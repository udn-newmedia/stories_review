<template>
  <h1>
    這是一顆小劇場蛋
    {{$route.params.y + '_' + $route.params.x}}
    <slot />
  </h1>
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
  methods: {
    updatedEggCollectedStatus() {
      EventBus.$emit('UPDATE_COLLECTED', this.id);    
    },
  }
}
</script>

<style>

</style>