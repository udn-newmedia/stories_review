<template>
  <div class="observatory">    
    <div class="observatory_content">
      <div class="left">
        <h1 class="observatory_title">新媒觀察室</h1>
        <slot />
      </div>
      <div class="right">
        <img :class="{'enter': isEnter }" class="mouse" :src="srcRWD(require('../../assets/observatory/mouse/mouse_mob.svg'), require('../../assets/observatory/mouse/mouse.svg'))" alt="">
        <div class="observatory-img-wrapper">
          <img class="observatory-img" v-for="(item, index) in imgSrc" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import srcRWD from '@/mixin/srcRWD.js';

export default {
  name: 'ObservatoryEggPage',
  mixins: [srcRWD],
  mounted () {
    this.imgSource = this.pageInfo.egg.observatory.pics
    this.isEnter = this.pageInfo.egg.collected
    
  },
  computed: {
    // 计算属性的 getter
    imgSrc: function () {
      let vm = this
      return this.srcRWD(vm.pageInfo.egg.observatory.pics.mob, vm.pageInfo.egg.observatory.pics.pc)
    }
  },
  data () {
    return {
      imgSource: [],
      isEnter: false
    }
  },
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
  },
  watch: {
    'pageInfo.egg.collected': {
      handler(newName, oldName) {
        this.isEnter = true
      }
    }
  },
  methods: {
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
};
</script>

<style lang="scss">
.observatory {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  width: 70%;
  height: 100%;
  @media screen and (min-width: 769px) {
    padding-left: 50px;
    padding-top: 100px;
  }
  .observatory_content {
    width: 60%;
    padding-top: 30px;
    overflow: auto;
    padding-right: 13px;
    @media screen and (min-width: 769px) {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      padding: 0;
    }
    .left, .right {

    }
    .left {
      color: #ffffff;
      text-align: left;
      
      @media screen and (min-width: 769px) {
        width: 54%;
        padding-left: 20px;
        padding-top: 135px;
      }
      
      .observatory_title {
        font-size: 1.5rem;
        margin-bottom: 12px;
        color: inherit;
        font-weight: 600;
        @media screen and (min-width: 769px) {
          font-size: 1.875rem;
        }
      }
    }
    .right {   
      @media screen and (min-width: 769px) {
        width: 45%;
        padding-right: 20px;
        position: relative;
        max-height: 55%;
      }
      .mouse {
        position: absolute;
        left: 15%;
        top: 0;
        height: 100%;
        z-index: 1;
        transform: translateY(-100%);
        @media screen and (min-width: 769px) {
          left: 92%;
          transform: translateY(-100%);
          width: 40px;
        }
        &.enter {
          transition: all 1s;
          transform: translateY(0%);
          @media screen and (min-width: 769px) {
            transform: translateY(-35%);
          }
        }
        
      }
      .observatory-img-wrapper {
        @media screen and (min-width: 769px) {
          // position: absolute;
          // bottom: 0;
          width: 100%;
      
          padding-top: 200px;
        }
        .observatory-img {
          width: 100%;
        }
      }
    }
  }
}
</style>