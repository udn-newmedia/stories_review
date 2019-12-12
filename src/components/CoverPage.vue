<template>
  <div class="cover-page">
    <div class="cover-page-head">
      <div class="cover-page-title">
        <img :src="require(isMob ? '@/assets/cover/cover_title_mob.png' : '@/assets/cover/cover_title.png')" alt="專題迷宮">
      </div>
      <div class="cover-page-description">
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
  computed: {
    isMob() {
      return window.innerWidth < 768 ? true : false;
    }
  },
};
</script>

<style lang="scss" scoped>
.cover-page {
  position: relative;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (min-width: 769px) {
      width: 60%;
      padding-right: 50px;
      padding-top: 25px;
    }
    img {
      width: 100%;
      @media screen and (min-width: 769px) {
        width: 85%;
      }
    }
  }
  .cover-page-description {
    position: relative;
    width: calc(100% - 200px);
    padding: 60px 15px 0 5px;
    display: flex;
    flex-direction: column;
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