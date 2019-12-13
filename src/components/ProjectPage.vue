<template>
  <div class="project-page">
    <div class="project-page-container">
      <div class="project-page-image">
        <img :src="pageInfo.cover" :alt="pageInfo.title">
      </div>
      <div class="project-page-body">
        <div class="project-page-category">
          <p v-if="pageInfo.category === 1" class="page-category-text">製作有23個分頁的超級大專題</p>
          <p v-if="pageInfo.category === 2" class="page-category-text">原來調查報導可以這樣玩！</p>
          <p v-if="pageInfo.category === 3" class="page-category-text">最酷最炫的資料呈現都在這裡</p>
          <p v-if="pageInfo.category === 4" class="page-category-text">用視覺亮點打造讓人過目不忘的專題</p>
        </div>
        <div class="project-page-title">
          <h1
            v-for="(item, index) in computeTitleText" :key="index"
          >
            {{item}}
          </h1>
        </div>
        <div class="project-page-create-time">
          <div class="project-page-create-time-clock">
            <img :src="require('@/assets/project_page/date.svg')" alt="" srcset="">
          </div>
          {{pageInfo.create}}
        </div>
        <div v-if="!isMob" class="project-page-url">
          <a
            :href="pageInfo.url"
            target="_blank"
            @click="sendReadProjectClickGA()"
          >
            <div class="project-page-url-arrow">→</div>看專題
          </a>
        </div>
      </div>
      <div v-if="isMob" class="project-page-url">
        <a
          :href="pageInfo.url"
          target="_blank"
          @click="sendReadProjectClickGA()"
        >
          <div class="project-page-url-arrow">→</div>
          看專題
        </a>
      </div>
      <AwardHint v-if="!isMob && pageInfo.award" />
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import AwardHint from "@/components/AwardHint";

export default {
  name: "ProjectPage",
  props: {
    pageInfo: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  },
  components: {
    AwardHint,
  },
  computed: {
    isMob() {
      return window.innerWidth < 769 ? true : false;
    },
    computeTitleText() {
      return this.pageInfo.title.split('\n');
    },
  },
  methods: {
    sendReadProjectClickGA() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "view",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Click_Project_" + this.pageInfo.key + "]"
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.project-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 35px;
  .project-page-container {
    position: relative;
    width: 100%;
    text-align: left;
    @media screen and (min-width: 769px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
    }
  }
  .project-page-image {
    position: relative;
    margin-bottom: 5px;
    height: calc((100vw - 40px) * 0.63);
    @media screen and (min-width: 769px) {
      width: 50%;
      height: 45%;
      padding: 20px 0 20px 40px;
      text-align: right;
    }
    img {
      width: 100%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      @media screen and (min-width: 769px) {
        height: 100%;
      }
    }
  }
  .project-page-body {
    position: relative;
    height: 36vh;
    @media screen and (min-width: 769px) {
      width: 50%;
      height: 385px;
      padding: 0 20px 20px 50px;
    }
  }
  .project-page-category {
    .page-category-text {
      font-size: 15px;
      font-weight: bold;
      color: #494949;
      margin-bottom: 10px;
      @media screen and (min-width: 769px) {
       font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
  .project-page-title {
    position: relative;
    margin-bottom: 5px;
    h1 {
      font-size: 28px;
      font-weight: bold;
      line-height: 1.3;
      color: #ffffff;
      @media screen and (max-width: 375px) {
        font-size: 22px;
      }
      @media screen and (min-width: 769px) {
        font-size: 44px;
      }
    }
  }
  .project-page-create-time {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    margin-bottom: 20px;
    color: #666666;
    @media screen and (min-width: 769px) {
      font-size: 20px;
    }
    .project-page-create-time-clock {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
        @media screen and (min-width: 769px) {
          width: 35px;
        }
      }
    }
  }
  .project-page-url {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (min-width: 769px) {
      padding: 0 50px;
    }
    .project-page-url-arrow {
      position: relative;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      color: #ffffff;
      margin-right: 10px;
      @media screen and (min-width: 769px) {
        width: 50px;
        height: 50px;
      }
    }
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      outline: none;
      text-decoration-line: none;
      color: #555555;
      font-size: 15px;
      @media screen and (min-width: 769px) {
        font-size: 20px;
      }
    }
  }
}
</style>