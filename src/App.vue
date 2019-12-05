<template>
  <div id="app">
    <PageMaze />
  </div>
</template>

<script>
import PageMaze from './components/PageMaze.vue'

export default {
  name: 'app',
  components: {
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
