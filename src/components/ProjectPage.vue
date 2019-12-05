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
        <h1>{{pageInfo.title}}</h1>
      </div>
      <div class="project-page-url">
        <a :href="pageInfo.url" target="_blank">看專題</a>
      </div>
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
  padding: 20px;
  .project-page-image {
    img {
      width: 100%;
      @media screen and (min-width: 769px) {
        width: 50%;        
      }
    }
  }
  .project-page-body {

  }
  .project-page-category {
    .page-category-text {

    }
  }
  .project-page-title {

  }
  .project-page-url {

  }
}
</style>