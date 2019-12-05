<template>
  <div>
    <!-- 這是一顆小劇場蛋
    {{$route.params.y + '_' + $route.params.x}} -->
    <slot />
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

<style>

</style>