<template>
  <div class="maze-map">
    <div class="maze-map-table">
      <div class="maze-map-table-row">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MazeMap',
  props: {
    mazeData: {
      type: Object,
      required: true,
    },
    colorScheme: {
      type: Array,
      required: true,
    },
    currentId: {
      type: String,
      default: '0',
    },
  },
  data:
};
</script>

<style lang="scss" scoped>
.maze-map {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>