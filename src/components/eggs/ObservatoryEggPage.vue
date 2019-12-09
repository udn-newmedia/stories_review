<template>
  <div class="observatory">
    <!-- 這是一顆天文台蛋
    {{$route.params.y + '_' + $route.params.x}} -->
    <div class="observatory_content">
      <div class="left">
        <h1 class="observatory_title">新媒觀察室</h1>
        <slot />
      </div>
      <div class="right">
        <img v-for="(item, index) in imgSrc" :key="index" :src="item" alt="">
        
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
      imgSource: []
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
  methods: {
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
};
</script>

<style lang="scss">
.observatory {
  display: flex;
  justify-content: flex-end;
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
      img {
        width: 100%;
      }
      @media screen and (min-width: 769px) {
        width: 45%;
        padding-right: 20px;
      }
    }
  }
}
</style>