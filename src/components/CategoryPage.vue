<template>
  <div class="category-page">
    <div class="category-page-image-container">
      <div
        :class="{
          'category-page-image-complete': true,
          'category-page-image-complete--active': imageCompletedFlag,
        }"
      >
        <img
          :src="pageInfo.cover[isMob ? 'mob' : 'pc']"
          :alt="pageInfo.title"
        >
      </div>
      <canvas
        :id="'category-page-canvas' + id"
        :class="{
          'category-page-canvas': true,
          'category-page-canvas--disabled': imageCompletedFlag,
        }"
      />
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap/TweenMax";

export default {
  name: 'CategoryPage',
  props: {
    id: {
      type: String,
      required: true,
    },
    pageInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pageImageSize: {
        width: Math.min(window.innerWidth, 1280),
        height: window.innerHeight,
      },
      imageCompletedFlag: false,
    }
  },
  computed: {
    isMob() {
      return window.innerWidth < 768 ? true : false;
    },
    coverImageRatio() {
      return this.pageInfo.coverSize[this.isMob ? 'mob' : 'pc'].height / this.pageInfo.coverSize[this.isMob ? 'mob' : 'pc'].width;
    },
  },
  methods: {
    drawParticules() {
      const vm = this;
      const canvas = document.getElementById('category-page-canvas' + vm.id);
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
        canvas.width = vm.pageImageSize.width;
        canvas.height = vm.pageImageSize.height;
        drawImage();
      }
      function drawImage() {        
        img.crossOrigin = "Anonymous";
        img.src = vm.pageInfo.cover[vm.isMob ? 'mob' : 'pc'];
        img.onload = function() {
          context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            (img.width - vm.pageImageSize.width * 0.8) / 2,
            0,
            vm.pageImageSize.width * 0.8,
            vm.pageImageSize.width * 0.8 * vm.coverImageRatio
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
.category-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10% 0;
  @media screen and (min-width: 769px) {
    align-items: center;
  }
  .category-page-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 769px) {
      height: 100%;
    }
  }
  .category-page-image-complete {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    img {
      width: 80%;
    }
  }
  .category-page-image-complete--active {
    opacity: 1;
  }
  .category-page-canvas {
    transition: opacity 1s ease-in-out;
    animation: bounce .666s ease-in-out forwards;
    @keyframes bounce {
      0% {
        transform: scale(5);
      }
      50% {
        transform: scale(2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .category-page-canvas--disabled {
    opacity: 0;
  }
}
</style>