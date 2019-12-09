<template>
  <div id="app">
    <HeadBar />
    <PageMaze />
  </div>
</template>

<script>
import HeadBar from './components/HeadBar.vue'
import PageMaze from './components/PageMaze.vue'

export default {
  name: 'app',
  components: {
    HeadBar,
    PageMaze
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, 微軟正黑體, sans-serif
}
</style>
