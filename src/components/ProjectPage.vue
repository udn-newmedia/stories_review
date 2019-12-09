<template>
  <div class="project-page">
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
    </div>
    <div class="project-page-url">
      <div class="project-page-url-arrow">→</div>
      <a :href="pageInfo.url" target="_blank">看專題</a>
    </div>
  </div>
</template>

<script>
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
  computed: {
    computeTitleText() {
      return this.pageInfo.title.split('\n');
    },
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss" scoped>
.project-page {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 20px 35px;
  .project-page-image {
    position: relative;
    margin-bottom: 5px;
    img {
      width: 100%;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      @media screen and (min-width: 769px) {
        width: 50%;        
      }
    }
  }
  .project-page-body {
    position: relative;
  }
  .project-page-category {
    .page-category-text {
      font-size: 15px;
      font-weight: bold;
      color: #494949;
      margin-bottom: 10px;
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
    .project-page-create-time-clock {
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20px;
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
    padding: 0 35px;
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
    }
    a {
      outline: none;
      text-decoration-line: none;
      color: #555555;
      font-size: 15px;
    }
  }
}
</style>