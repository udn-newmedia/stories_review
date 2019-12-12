<template>
  <div class="cover-page">
    <div class="cover-page-head">
      <div class="cover-page-title">
        <div class="cover-page-title-canvas">
          <canvas
            id="cover-page-title-canvas"
            :class="{
              'cover-page-title-canvas': true,
              'cover-page-title-canvas--disabled': imageCompletedFlag,
            }"
          />
        </div>
        <div
          :class="{
            'cover-page-title-image': true,
            'cover-page-title-image--active': imageCompletedFlag,
          }"
        >
          <img :src="titleImageSrc" alt="專題迷宮">
        </div>
      </div>
      <div :class="{
        'cover-page-description': true,
        'cover-page-description--active': imageCompletedFlag,
        }"
      >
        <div v-if="!isMob" class="cover-page-description-light">
          <img :src="require('@/assets/cover/cover_light.png')" alt="light">
        </div>
        <div class="cover-page-description-text">
          <h1>你敢挑戰嗎？</h1>
          <p>聯合報新媒體中心在2019年共製作14檔專題，是史上最多產的一年。</p>
          <p>邀請你來感受專題產不完的體驗，歡迎以方向鍵探索專題迷宮，你，走得出去嗎？</p>
          <p v-if="!isMob" class="hint">PS. 迷宮內藏有12顆彩蛋，集滿有神秘獎勵喔！</p>
        </div>
      </div>
    </div>
    <div class="cover-page-body" />
  </div>
</template>

<script>
export default {
  name: 'CoverPage',
  data() {
    return {
      imageCompletedFlag: false,
    };
  },
  computed: {
    isMob() {
      return window.innerWidth < 768 ? true : false;
    },
    pageImageSize() {
      return {
        width: this.isMob ? 200 :　window.innerWidth * 0.6,
        height: window.innerHeight * 0.7,
      }
    },
    coverImageRatio() {
      return this.isMob ? (443 / 272) : (931 / 1288);
    },
    titleImageSrc() {
      return require(this.isMob ? '@/assets/cover/cover_title_mob.png' : '@/assets/cover/cover_title.png');
    },
  },
  methods: {
    drawParticules() {
      const vm = this;
      const canvas = document.getElementById('cover-page-title-canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      const particules_max = 2000;
      const paritcule_size = 5;
      let particlesDistance = 0;
      let pixelCoordinates;
      let pixels;
      let raf;
      init();
      function init() {
        canvas.width = window.innerWidth;
        canvas.height = vm.pageImageSize.height;
        drawImage();
      }
      function drawImage() {        
        img.crossOrigin = 'Anonymous';
        img.src = vm.titleImageSrc;
        img.onload = function() {
          context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            0,
            0,
            vm.pageImageSize.width,
            vm.pageImageSize.width * vm.coverImageRatio
          );
          getImageData();
        };
      }
      function getImageData() {
        const imageData = context.getImageData(0, 0, img.width, img.height).data;

        pixelCoordinates = [];
        pixels = [];
        for (let i = 0; i < imageData.length; i = i + 4) {
          if (imageData[i] !== 0) {
            const currentPixel = i / 4;
            const x = currentPixel % img.width;
            const y = ~~(currentPixel / img.width);
            pixelCoordinates.push({
              x: x,
              y: y,
              red: imageData[i],
              green: imageData[i + 1],
              blue: imageData[i + 2],
              alpha: imageData[i + 3]
            });
          }
        }
        generateParticuleImage();
        function generateParticuleImage() {
          let particuleOffset = 0;
          if (pixelCoordinates.length > particules_max) {
            particuleOffset = ~~(pixelCoordinates.length / particules_max);
          }
          for (let i = 0; i < particules_max; i++) {
            const pIndex = particuleOffset * i;
            const pixelOptions = {
              x: pixelCoordinates[pIndex].x,
              y: pixelCoordinates[pIndex].y,
              colors: {
                red: pixelCoordinates[pIndex].red,
                green: pixelCoordinates[pIndex].green,
                blue: pixelCoordinates[pIndex].blue,
                alpha: pixelCoordinates[pIndex].alpha
              }
            };
            const pixel = new particule(pixelOptions);
            pixels.push(pixel);
          }
          context.clearRect(0, 0, canvas.width, canvas.height);
          render();
          generateTimelines();
        }
      }
      function onMouseMove(ev) {
        const mousePos = ev * 2;
        for (let i = 0; i < pixels.length; i++) {
          pixels[i].timeline.time(mousePos);
        }
      }
      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < pixels.length; i++) {
          pixels[i].draw();
        }
        onMouseMove(Math.min(particlesDistance += 0.03, 1));
        vm.imageCompletedFlag = particlesDistance >= 0.7 ? true : false ;
        raf = window.requestAnimationFrame(render);
      }
      function generateTimelines() {
        for (let i = 0; i < pixels.length; i++) {
          pixels[i].animate();
        }
      }
      function destroyParticules() {
        for (let i = 0; i < pixels.length; i++) {
          pixels[i] = null;
          delete pixels[i];
        }
      }
      class particule {
        constructor(options) {
          const centerOffsetX = canvas.width / 2 - img.width / 2;
          const centerOffsetY = 0;
          this.centerPosX = centerOffsetX + options.x;
          this.centerPosY = centerOffsetY + options.y;
          this.posX = getRandomInt(0, canvas.width);
          this.posY = getRandomInt(0, canvas.height);
          this.timeline = new TimelineMax({
            paused: true
          });
          this.colors = options.colors;
        }
        draw() {
          context.beginPath();
          context.arc(this.posX, this.posY, paritcule_size, 0, 2 * Math.PI);
          context.fillStyle = `rgb( ${this.colors.red},${this.colors.green},${this.colors.blue})`;
          context.globalAlpha = this.colors.alpha;
          context.fill();
        }
        animate() {
          this.timeline.to(this, 1, {
            posX: this.centerPosX,
            posY: this.centerPosY,
            delay: getRandomFloat(0, 0.001)
          });
        }
      }
      function getRandomInt(min, max) {
        return ~~(Math.random() * (max - min + 1)) + min;
      }
      function getRandomFloat(min, max) {
        return Math.random() * (max - min + 1) + min;
      }
    },
  },
  mounted() {
    this.drawParticules();
  },
};
</script>

<style lang="scss" scoped>
.cover-page {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.cover-page-head {
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  background-image: url('../assets/cover/cover_door_mob.jpg');
  background-size: cover;
  background-position: -13px 0;
  @media screen and (min-width: 769px) {
    background-image: url('../assets/cover/cover_door.jpg');
    background-position: 70% 100%;
  }
  .cover-page-title {
    position: relative;
    width: 200px;
    height: 100%;
    @media screen and (min-width: 769px) {
      width: 60%;
    }
    .cover-page-title-image {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: .333s ease-in-out;
      img {
        width: 100%;
        @media screen and (min-width: 769px) {
          width: 100%;
        }
      }
    }
    .cover-page-title-image--active {
      opacity: 1;
    }
    .cover-page-title-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      transition: .333s ease-in-out;
    }
    .cover-page-title-canvas--disabled {
      opacity: 0;
    }
  }
  .cover-page-description {
    position: relative;
    width: calc(100% - 200px);
    padding: 60px 15px 0 5px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    @media screen and (min-width: 769px) {
      width: 40%;
      padding: 150px 90px 0 90px;
    }
    .cover-page-description-light {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .cover-page-description-text {
      position: relative;
      width: 100%;
      overflow-y: auto;
      h1 {
        margin-bottom: 20px;
        font-size: 24px;
        color: #ffffff;
        @media screen and (min-width: 769px) {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 50px;
        }
      }
      p {
        color: #ffffff;
        text-align: justify;
        margin-bottom: 20px;
        line-height: 1.3;
        @media screen and (min-width: 769px) {
          font-size: 1.6rem;
          line-height: 1.67;
        }
      }
      .hint {
        font-size: 18px;
      }
    }
  }
  .cover-page-description--active {
    transition: opacity .666s .333s ease-in-out;
    opacity: 1;
  }
}
.cover-page-body {
  position: relative;
  width: 100%;
  height: 30%;
  background-image: url('../assets/cover/cover_ground_mob.jpg');
  background-size: cover;
  background-position: -7px 0;
  @media screen and (min-width: 769px) {
    background-image: url('../assets/cover/cover_ground.jpg');
    background-position: 70% 0;
  }
}
</style>