<template>
  <div class="drama">
    <div class="left">
      <div class="light_wrapper">
        <img  class="light" :src="srcRWD(require('../../assets/drama/light/light_mob.svg'), require('../../assets/drama/light/light.svg'))" alt="">
        <div :class="{'enter': isEnter}" :style="{'background-color': currentBackgroundColor}" class="light_cover"></div>
      </div>
      <video  :class="{'enter': isEnter}" class="profile_video" loop autoplay muted :src="profile.photo"></video>
      <div class="profile">
        <div>{{ profile.title }}</div>
        <div>{{ profile.name }}</div>
      </div>
    </div>
    <div class="right">
      <h1 class="drama_title">新媒小劇場</h1>
      <!-- {{$route.params.y + '_' + $route.params.x}} -->
      <div class="drama_monologue">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import srcRWD from '@/mixin/srcRWD.js';
import anime from 'animejs';

export default {
  name: 'DramaEggPage',
  data () {
    return {
      profile: {
        title: '數位內容製作',
        name: '洪欣慈',
        photo: ''
      },
      isEnter: false,
      currentBackgroundColor: ''
    }
  },
  mixins: [srcRWD],
  props: {
    id: {
      type: String,
      required: true
    },
    pageInfo: {
      type: Object,
      required: true,
    },
    eggsCollection: {
      type: Number,
      default: 0,
    },
    colorScheme: {
      type: Array,
    }
  },
  mounted () {
    this.initData()

  },
  watch: {
    'pageInfo.egg.collected': {
      handler(newName, oldName) {
        if(newName) {
          console.log('hello light:',newName)
          this.isEnter = true
        }
      }
    }
  },
  methods: {
    initData () {
      let vm = this
      this.profile.name = this.pageInfo.egg.drama.name
      this.profile.title = this.pageInfo.egg.drama.job
      this.profile.photo = this.srcRWD(vm.pageInfo.egg.drama.profile.mob, vm.pageInfo.egg.drama.profile.pc)
      this.currentBackgroundColor = this.colorScheme[this.pageInfo.category - 1]
    },
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
}
</script>

<style lang="scss">
.drama {
  display: flex;
  height: 100%;
  @media screen and (min-width: 769px) {
    padding-left: 50px;
    padding-top: 100px;
  }
  .left, .right {
    height: 80%;
  }
  .left {
    width: 40%;
    position: relative;
    @media screen and (min-width: 769px) {
      width: 46%;
    }
    .light_wrapper {
      height: 100%;
      vertical-align: bottom;
      transition: all 1s;
      position: relative;
      // @media screen and (min-width: 769px) {
      //   position: absolute;
      //   left: 50%;
      //   transform: translate(-50%);
      // }
      .light {
        position: absolute;
        height: inherit;
        vertical-align: bottom;
        height: 100%;
        transform: translate(-50%);
        opacity: 1;
        
      }
      .light_cover {
          position: absolute;
          width: 90%;
          bottom: 0;
          left: 50%;
          height: 91%;
          transform: translateX(-50%);
          z-index: 2;
          transition: all 1s;
          &.enter {
            transition: all 1s;
            height: 0%;
          }
      }
    }
    .profile_video {
      position: absolute;
      left: 50%;
      height: 30%;
      bottom: 5px;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 1s;
      &.enter {
        transition-delay: 1s;
        translate: opacity 1s;
        opacity: 1;
      }
    }
    
    .profile {
      position: absolute;
      width: 100%;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 110%);
      color: white;
      font-size: 20px;
    }
  }
  .right {
    padding-top: 30px;
    width: 60%;
    text-align: left;
    overflow-y: scroll;
    color: #ffffff;
    @media screen and (min-width: 769px) {
      overflow-y: auto;
      width: 53%;
    }
    .drama_title {
      font-size: 1.5rem;
      margin-bottom: 12px;
      color: inherit;
      font-weight: 600;
      @media screen and (min-width: 769px) {
        font-size: 1.875rem;
      }
    }
    .drama_monologue {
      font-size: 1.25rem;
      padding-right: 22px;
      @media screen and (min-width: 769px) {
        line-height: 1.58;
        font-size: 1.5rem;
      }
    }
  }
}
</style>