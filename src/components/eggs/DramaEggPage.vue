<template>
  <div class="drama">
    <div class="left">
      <!-- <img src="../../assets/drama/" alt=""> -->
      <video autoplay muted src="../../assets/drama/profile_videos/chang_mob.mp4"></video>
      <div class="profile">
        <div>數位內容製作</div>
        <div>洪欣慈</div>
      </div>
    </div>
    <div class="right">
      <h1 class="drama_title">新媒小劇場</h1>
      <!-- {{$route.params.y + '_' + $route.params.x}} -->
      <slot />
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';

export default {
  name: 'DramaEggPage',
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
  mounted () {
    console.log(this.pageInfo)
  },
  methods: {
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
  .left, .right {
    height: 80%;
  }
  .left {
    width: 40%;
    position: relative;
    video {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
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
    width: 60%;
    text-align: left;
    overflow: scroll;
    .drama_title {
      color:aliceblue;
    }
  }
}
</style>