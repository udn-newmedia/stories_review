<template>
  <h1>
    這是一顆天文台蛋
    {{$route.params.y + '_' + $route.params.x}}
    <slot />
  </h1>
</template>

<script>
import EventBus from '@/eventBus';

export default {
  name: 'ObservatoryEggPage',
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

<style>

</style>