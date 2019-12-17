<template>
  <div class="editor-page">
    <div class="editor-page-head">
      <div v-if="!isMob" class="editor-page-head-title">
        <img :src="require('@/assets/editor/ending_title.svg')" alt="專題迷宮">
      </div>
    </div>
    <div class="editor-page-body">
      <div class="editor-page-survey">
        <p>看完這些專題，有什麼想法？</p>
        <p>請填寫「<a href="https://www.surveycake.com/s/KpQKN" title="閱讀體驗問卷">閱讀體驗問卷</a>」告訴我們！</p>
        <p></p>
      </div>
      <div class="editor-page-editor-container">
        <div class="editor-page-editor-title-section">
          <div class="editor-page-editor-title">製作團隊</div>
          <div class="editor-page-editor-title">製作人</div>
          <div class="editor-page-editor-title">設計</div>
          <div class="editor-page-editor-title"><br></div>
          <div class="editor-page-editor-title">網頁製作</div>
          <div class="editor-page-editor-title"><br></div>
          <div class="editor-page-editor-title">製作單位</div>
          <div class="editor-page-editor-title"><br></div>
        </div>
        <div class="editor-page-editor-name-section">
          <div class="editor-page-editor-name"><br></div>
          <div class="editor-page-editor-name">謝汶均</div>
          <div class="editor-page-editor-name">蘇士堯</div>
          <div class="editor-page-editor-name">張心慈</div>
          <div class="editor-page-editor-name">楊若榆</div>
          <div class="editor-page-editor-name">胡凈悟</div>
          <div class="editor-page-editor-name">聯合報新媒體中心</div>
          <div class="editor-page-editor-name">視覺設計中心</div>
        </div>
        <div class="editor-page-editor-text">2019.12.23</div>
      </div>
      <div class="editor-page-logo-container">
        <div class="editor-page-logo">
          <a
            href="https://udn.com/news/index"
            target="_blank" name="聯合新聞網"
            @click="sendLogoGA('聯合新聞網')"
          >
            <img :src="require('@/assets/udn.svg')" alt="聯合新聞網">
          </a>
        </div>
        <div class="editor-page-logo">
          <img :src="require('@/assets/nm.svg')" alt="新媒體中心">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'EditorPage',
  computed: {
    isMob() {
      return window.innerWidth < 1025 ? true : false;
    }
  },
  methods: {
    sendLogoGA(item) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "logo",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + item +"logo點擊]"
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.editor-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: flex-start; 
  }
}
.editor-page-head {
  position: relative;
  width: 100%;
  height: 135px;
  background-image: url('../assets/editor/ending_mob.jpg');
  background-size: cover;
  background-position: 50% 100%;
  @media screen and (max-width: 375px) {
    height: 90px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 35%;
    background-position: 50% 50%;
  }
  @media screen and (min-width: 1025px) {
    width: 55%;
    height: 70%;
    background-image: url('../assets/editor/ending.jpg');
    background-position: 100% 100%;
  }
  .editor-page-head-title {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5% 0 10%;
    img {
      width: 100%;
    }
  }
}
.editor-page-body {
  position: relative;
  width: 100%;
  height: calc(100% - 200px);
  padding: 10px 35px;
  background-color: #ffffff;
  @media screen and (max-width: 375px) {
    height: calc(100% - 160px);
  }
  @media screen and (min-width: 769px) {
    width: 65%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0px 50px;
  }
  .editor-page-survey {
    position: relative;
    margin: 20px 0;
    @media screen and (max-width: 374px) {
      margin: 5px 0;
    }
    p {
      padding: 0;
      margin: 0;
      text-align: left;
      color: #000000;
      @media screen and (max-width: 374px) {
        font-size: 15px;
      }
      @media screen and (min-width: 769px) {
        font-size: 28px;
      }
    }
    a {
      font-weight: bold;
      color: #000000;
    }
  }
  .editor-page-editor-container {
    position: relative;
    width: 100%;
    padding: 10px 0;
    text-align: left;
    @media screen and (max-width: 374px) {
      font-size: 13px;
    }
    // @media screen and (min-width: 769px) {}
    .editor-page-editor-title-section {
      display: inline-block;
      width: 85px;
      @media screen and (min-width: 769px) {
        font-size: 20px;
        width: 100px;
      }
      .editor-page-editor-title{
        padding-right: 10px;
        margin: 5px 0;
        text-align-last: justify;
        &:first-child {
          margin-bottom: 10px;
          @media screen and (min-width: 769px) {
            font-weight: bold;
          }
        }
      }
    }
    .editor-page-editor-name-section {
      display: inline-block;
      width: calc(100% - 85px);
      @media screen and (min-width: 769px) {
        font-size: 20px;
        width: calc(100% - 100px);
      }
      .editor-page-editor-name {
        padding-left: 10px;
        margin: 5px 0;
        text-align: left;
        letter-spacing: 0.2rem;
      }
    }
  }
  .editor-page-logo-container {
    position: relative;
    .editor-page-logo {
      text-align: left;
      @media screen and (min-width: 769px) {
        float: left;
        margin-right: 20px;
      }
      img {
        width: 120px;
        @media screen and (max-width: 374px) {
          width: 100px;
        }
        @media screen and (min-width: 769px) {
          width: 180px;
        }
      }
    }
  }
}
</style>