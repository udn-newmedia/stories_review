<template>
  <div id="app">
    <HeadBar />
    <PageMaze />
  </div>
</template>

<script>
import InApp from 'detect-inapp';
import HeadBar from './components/HeadBar.vue'
import PageMaze from './components/PageMaze.vue'

export default {
  name: 'app',
  components: {
    HeadBar,
    PageMaze
  },
  created() {
    // 處理inapp browser window.innerWidth問題
    (function() {
      const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera);
      let currentWidth = window.innerWidth;
      let executeCount = 0;
      if (inapp.isInApp) {
        const inappWidthListener = setInterval(() => {
          executeCount++;
          if (window.innerWidth !== currentWidth) {
            window.location.reload();
            currentWidth = window.innerWidth;
          }
          if (executeCount > 10) {
            clearInterval(inappWidthListener);
          }
        }, 100);
      }
    })();
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
body {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
