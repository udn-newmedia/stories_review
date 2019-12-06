<template>
  <div class="maze-map">
    <div class="maze-map-table">
      <div class="maze-map-table-row">
        <h1>{{row}}</h1>
        <h1>{{column}}</h1>
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
  data() {
    return {
      row: 29,
      column: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
.maze-map {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>