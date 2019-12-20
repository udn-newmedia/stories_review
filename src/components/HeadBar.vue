<template>
  <div class="head-bar">
    <div class="head-bar-logo">
      <i
        class="udn-icon udn-icon-logo"
        @click="updatedMazeMapFlag()"
      />
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
import EventBus from "@/eventBus";

export default {
  name: 'HeadBar',
  props: {
    href: {
      type: String,
      default: window.location.href,
    },
  },
  data() {
    return {
      isMobile: false,
      isInApp: false
    };
  },
  computed: {
    shareUrlFB() {
      return 'https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=' + encodeURIComponent(this.href) + '&redirect_uri=' + encodeURIComponent(this.href);
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
    updatedMazeMapFlag() {
      EventBus.$emit('UPDATE_MAZEMAP_FLAG', true);
    },
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
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [headbar Line分享]"
      });
    },
  },
  mounted() {
    this.isMobile = Utils.detectMob();
    this.isInApp = Utils.isFacebookApp(148) || Utils.isLineApp();
  },
};
</script>

<style lang="scss" scoped>
.head-bar {
  position: fixed;
  z-index: 5000;
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
  padding-left: 10px;
  @media screen and (min-width: 769px) {
    padding-left: 5px;
  }
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
.udn-icon {
  cursor: pointer;
}
</style>