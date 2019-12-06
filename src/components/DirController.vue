<template>
  <div class="page-maze-controller">
      <div class="page-maze-controller-group">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('up')
          }"
          @click="handleControllerClick('up')"
        >↑</button>
      </div>
      <div class="page-maze-controller-group page-maze-controller-group--middle">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('left')
          }"
          @click="handleControllerClick('left')"
        >←</button>
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('right')
          }"
          @click="handleControllerClick('right')"
        >→</button>
      </div>
      <div class="page-maze-controller-group">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('down')
          }"
          @click="handleControllerClick('down')"
        >↓</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DirController',
  props: {
    mazeIndexTable: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleControllerClick(dir) {
      const vm = this;
      const currentX = this.$route.params.x ? +this.$route.params.x : 0;
      const currentY = this.$route.params.y ? +this.$route.params.y : 0;

      function traceDirect() {
        let directArray = vm.mazeIndexTable.filter((e, i) => {
          if (dir === 'up') {
            if (e[0] === currentX && e[1] < currentY) {
              return e;
            }
          }
          if (dir === 'down') {
            if (e[0] === currentX && e[1] > currentY) {
              return e;
            }
          }
          if (dir === 'left') {
            if (e[0] < currentX && e[1] === currentY) {
              return e;
            }
          }
          if (dir === 'right') {
            if (e[0] > currentX && e[1] === currentY) {
              return e;
            }
          }
        });

        if (dir === 'up') return directArray.length > 0 ? directArray[directArray.length - 1][1] : currentY;
        if (dir === 'down') return directArray.length > 0 ? directArray[0][1] : currentY;
        if (dir === 'left') return directArray.length > 0 ? directArray[directArray.length - 1][0] : currentX;
        if (dir === 'right') return directArray.length > 0 ? directArray[0][0] : currentX;
        return 1;
      }

      switch (dir) {
        case "up":
          this.$router.push({
            name: 'coords',
            params: {
              x: currentX,
              y: traceDirect()
            }
          });
          break;
        case "down":
          this.$router.push({
            name: 'coords',
            params: {
              x: currentX,
              y: traceDirect()
            }
          });
          break;
        case "left":
          this.$router.push({
            name: 'coords',
            params: {
              x: traceDirect(),
              y: currentY
            }
          });
          break;
        case "right":
          this.$router.push({
            name: 'coords',
            params: {
              x: traceDirect(),
              y: currentY
            }
          });
          break;
        default:
          break;
      }
    },
    hasNeighbor(dir) {
      const vm = this;
      const currentX = this.$route.params.x ? +this.$route.params.x : 0;
      const currentY = this.$route.params.y ? +this.$route.params.y : 0;

      function traceDirect() {
        let directArray = vm.mazeIndexTable.filter((e, i) => {
          if (dir === 'up') {
            if (e[0] === currentX && e[1] < currentY) {
              return e;
            }
          }
          if (dir === 'down') {
            if (e[0] === currentX && e[1] > currentY) {
              return e;
            }
          }
          if (dir === 'left') {
            if (e[0] < currentX && e[1] === currentY) {
              return e;
            }
          }
          if (dir === 'right') {
            if (e[0] > currentX && e[1] === currentY) {
              return e;
            }
          }
        });
        
        return directArray.length > 0;
      }
      return traceDirect();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-maze-controller {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 120px;
  height: 120px;
  margin: 10px;
  .page-maze-controller-group {
    position: relative;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .page-maze-controller-group--middle {
    justify-content: space-between;
  }
  .page-maze-controller-button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #ffffff;
  }
  .page-maze-controller-button--disabled {
    pointer-events: none;
    color: #898989;
    opacity: 0.2;
  }
}
</style>