<template>
  <div class="category-page">
    <img :src="pageInfo.cover[isMob ? 'mob' : 'pc']" :alt="pageInfo.title" srcset="">
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  props: {
    pageInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMob() {
      return window.innerWidth < 768 ? true : false;
    }
  },
};
</script>

<style lang="scss" scoped>
.category-page {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 80%;
  }
}
</style>