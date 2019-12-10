<template>
  <div class="head-bar">
    <div class="head-bar-logo">
      <a class="head-bar-link" href="#/0/0" @click="sendLogoGa"><i class="udn-icon udn-icon-logo" /></a>
    </div>
    <div class="head-bar-share">
      <a class="head-bar-link" target="_blank" :href="shareUrlFB" @click="sendFacebookGA">
        <img :src="require('@/assets/headbar/fb_logo.svg')" alt="Facebook">
      </a>
      <a class="head-bar-link" target="_blank" :href="shareUrlLine" @click="sendLineGA">
        <img :src="require('@/assets/headbar/line_logo.svg')" alt="Line">
      </a>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'HeadBar',
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  computed: {
    shareUrlFB() {
      return 'https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=' + encodeURIComponent(this.href);
    },
    shareUrlLine() {
      let sharedText = document.querySelector('title').innerHTML
      let shareContent = document.querySelector('meta[property="og:description"]').content
      // desktop
      if (!this.isMobile) {
        return `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}&url=${encodeURIComponent(this.href)}`
      }
      // mobile
      if (!this.isInApp) {
        return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}%0D%0A%0D%0A${encodeURIComponent(this.href)}`
      }
      // mobile in-app webview
      return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(sharedText)}%0D%0A%0D%0A${encodeURIComponent(shareContent)}%0D%0A%0D%0A${encodeURIComponent(this.href)}`
    },
  },
  methods: {
    sendFacebookGA() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [headbar FB分享]"
      });
    },
    sendLineGA() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "share",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [ headbar Line分享]"
      });
    },
    sendLogoGa() {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "logo",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [圓形logo點擊]"
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.head-bar {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-bar-logo {
  position: relative;
  i {
    font-size: 32px;
  }
}
.head-bar-share {
  position: relative;
  width: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  img {
    width: 24px;
  }
}
.head-bar-link {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration-line: none;
  color: #000000;
  cursor: pointer;
}
</style>