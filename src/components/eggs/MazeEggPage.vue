<template>
  <div class="maze">
    <div class="maze_title">
      <div v-html="srcRWD('<h2>長按方向鍵中間<div>解鎖迷宮地圖</div></h2>', '<h2>長按方向鍵中間<div>解鎖迷宮地圖</div></h2>', '<h2>按ESC鍵即可領取迷宮地圖</h2>')" />
    </div>
    <div class="maze_img">
      <!-- <img :src="srcRWD(require('../../assets/maze/unlockmap.svg'), require('../../assets/maze/unlockmap.svg'), require('../../assets/maze/esckey.svg'))" alt=""> -->
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import srcRWD from '@/mixin/srcRWD';

export default {
  name: 'MazeEggPage',
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
  mixins: [srcRWD],
  methods: {
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
}
</script>

<style lang="scss">
.maze {
  .maze_title {
    h2 {
      text-align: center;
      margin-bottom: 71px;
      color: #fcff98;
      font-size: 1.652rem;
      line-height: 1.33;
      font-family: 'Microsoft JhengHei';
      font-weight: 500;
    }
  }
}

</style>