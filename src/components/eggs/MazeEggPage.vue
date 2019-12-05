<template>
  <h1>
    這是一顆迷宮地圖蛋
    {{$route.params.y + '_' + $route.params.x}}
  </h1>
</template>

<script>
import EventBus from '@/eventBus';

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
  methods: {
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
}
</script>

<style>

</style>