<template>
  <div :class="{
    'page-maze-controller': true,
    'page-maze-controller--cover': isOnCover,
    'page-maze-controller--disabled': $store.state.animationFlag
  }">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 131.59 131.59"
      style="enable-background:new 0 0 131.59 131.59;"
      xml:space="preserve"
    >
      <g id="圖層_2" class="st0" />
      <g id="wheel">
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <image
            style="overflow:visible;opacity:0.25;"
            width="141"
            height="141"
            xlink:href="data:image/png;base64,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
            SUVORK5CYII="
            transform="matrix(1 0 0 1 -4.5441 -4.1395)"
          />
          <g>
            <g>
              <path
                id="Subtraction_96-2_12_"
                class="st1"
                d="M76.37,123.87h-21c-5.52-0.01-9.99-4.48-10-10l4.34-31.84l-31.84,4.34
                c-5.52-0.01-9.99-4.48-10-10v-21c0.01-5.52,4.48-9.99,10-10l31.84,4.34l-4.34-31.84c0.01-5.52,4.48-9.99,10-10h21
                c5.52,0.01,9.99,4.48,10,10l-4.34,31.84l31.84-4.34c5.52,0.01,9.99,4.48,10,10v21c-0.01,5.52-4.48,9.99-10,10l-31.84-4.34
                l4.34,31.84C86.36,119.39,81.89,123.86,76.37,123.87z M65.87,52.87c-7.18,0-13,5.82-13,13s5.82,13,13,13s13-5.82,13-13
                C78.86,58.69,73.04,52.87,65.87,52.87z"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="right">
        <path
          id="Polygon_57-2_1_"
          :class="{
            'st2': true,
            'category--1': currentCategory === 1,
            'category--2': currentCategory === 2,
            'category--3': currentCategory === 3,
            'category--4': currentCategory === 4 || isOnCover,
            'category--5': currentCategory === 5,
            'category--disabled': !hasNeighbor('right') && !isOnCover || $store.state.animationFlag,
          }"
          d="M116.24,63.82c1.41,0.87,1.84,2.72,0.97,4.13c-0.24,0.39-0.58,0.73-0.97,0.97l-8.29,5.12
          c-1.41,0.87-3.26,0.43-4.13-0.98c-0.29-0.47-0.45-1.02-0.45-1.57V61.25c0-1.66,1.34-3,3-3c0.56,0,1.1,0.16,1.58,0.45L116.24,63.82z
          "
        />
      </g>
      <g id="down">
        <path
          id="Polygon_58"
          :class="{
            'st2': true,
            'category--1': currentCategory === 1,
            'category--2': currentCategory === 2,
            'category--3': currentCategory === 3 || isOnCover,
            'category--4': currentCategory === 4,
            'category--5': currentCategory === 5,
            'category--disabled': !hasNeighbor('down') && !isOnCover || $store.state.animationFlag,
          }"
          d="M68.42,116.74c-0.87,1.41-2.72,1.84-4.13,0.97c-0.39-0.24-0.73-0.58-0.97-0.97l-5.12-8.29
          c-0.87-1.41-0.43-3.26,0.98-4.13c0.47-0.29,1.02-0.45,1.57-0.45h10.24c1.66,0,3,1.34,3,3c0,0.56-0.15,1.1-0.45,1.58L68.42,116.74z"
        />
      </g>
      <g id="left">
        <path
          id="Polygon_58-2_1_"
          :class="{
            'st2': true,
            'category--1': currentCategory === 1,
            'category--2': currentCategory === 2 || isOnCover,
            'category--3': currentCategory === 3,
            'category--4': currentCategory === 4,
            'category--5': currentCategory === 5,
            'category--disabled': !hasNeighbor('left') && !isOnCover || $store.state.animationFlag,
          }"
          d="M15.5,68.92c-1.41-0.87-1.84-2.72-0.97-4.13c0.24-0.39,0.58-0.73,0.97-0.97l8.29-5.12
          c1.41-0.87,3.26-0.43,4.13,0.98c0.29,0.47,0.45,1.02,0.45,1.57v10.24c0,1.66-1.34,3-3,3c-0.56,0-1.1-0.15-1.58-0.45L15.5,68.92z"
        />
      </g>
      <g id="up">
        <path
          id="Polygon_57"
          :class="{
            'st2': true,
            'category--1': currentCategory === 1 || isOnCover,
            'category--2': currentCategory === 2,
            'category--3': currentCategory === 3,
            'category--4': currentCategory === 4,
            'category--5': currentCategory === 5,
            'category--disabled': !hasNeighbor('up') && !isOnCover || $store.state.animationFlag,
          }"
          d="M63.32,16c0.87-1.41,2.72-1.84,4.13-0.97c0.39,0.24,0.73,0.58,0.97,0.97l5.12,8.29
          c0.87,1.41,0.43,3.26-0.98,4.13c-0.47,0.29-1.02,0.45-1.57,0.45H60.75c-1.66,0-3-1.34-3-3c0-0.56,0.16-1.1,0.45-1.58L63.32,16z"
        />
      </g>
    </svg>
    <div
      class="page-maze-controller-container"
      id="controller"
    >
      <div class="page-maze-controller-group">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('up') && !isOnCover || $store.state.animationFlag
          }"
          @click="handleControllerClick('up')"
        />
      </div>
      <div class="page-maze-controller-group page-maze-controller-group--middle">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('left') && !isOnCover || $store.state.animationFlag
          }"
          @click="handleControllerClick('left')"
        />
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('right') && !isOnCover || $store.state.animationFlag
          }"
          @click="handleControllerClick('right')"
        />
      </div>
      <div class="page-maze-controller-group">
        <button
          :class="{
            'page-maze-controller-button': true,
            'page-maze-controller-button--disabled': !hasNeighbor('down') && !isOnCover || $store.state.animationFlag
          }"
          @click="handleControllerClick('down')"
        />
      </div>
    </div>
    <div
     v-show="isMob && mazeMapToggleFlag"
     class="maze-map-button"
     @click="updatedMazeMapFlag"
    >
      <img :src="require('@/assets/controller/mapkey.svg')" alt="key">
    </div>
  </div>
</template>

<script>
import EventBus from "@/eventBus";
export default {
  name: "DirController",
  props: {
    mazeIndexTable: {
      type: Array,
      required: true
    },
    currentCategory: {
      type: Number,
      default: 1,
    },
    mazeMapFlag: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isMapOpen: false,
      mazeMapToggleFlag: false,
      longTouchFlag: false,
    };
  },
  computed: {
    isMob() {
      return window.innerWidth < 769 ? true : false;
    },
    isOnCover() {
      return this.$store.state.x === 0 && this.$store.state.y === 0;
    }
  },
  methods: {
    handleControllerClick(dir) {
      if (this.isOnCover) {
        this.handleOnCoverControllerClick(dir);
      } else {
        const vm = this;
        const currentX = this.$store.state.x;
        const currentY = this.$store.state.y;
  
        function traceDirect() {
          let directArray = vm.mazeIndexTable.filter((e, i) => {
            if (dir === 'up') {
              if (e[0] === +currentX && e[1] < +currentY) {
                return e;
              }
            }
            if (dir === 'down') {
              if (e[0] === +currentX && e[1] > +currentY) {
                return e;
              }
            }
            if (dir === 'left') {
              if (e[0] < +currentX && e[1] === +currentY) {
                return e;
              }
            }
            if (dir === 'right') {
              if (e[0] > +currentX && e[1] === +currentY) {
                return e;
              }
            }
          });
  
          if (dir === 'up')
            return directArray.length > 0
              ? directArray[directArray.length - 1][1]
              : +currentY;
          if (dir === 'down')
            return directArray.length > 0 ? directArray[0][1] : +currentY;
          if (dir === 'left')
            return directArray.length > 0
              ? directArray[directArray.length - 1][0]
              : +currentX;
          if (dir === 'right')
            return directArray.length > 0 ? directArray[0][0] : +currentX;
          return 1;
        }
  
        switch (dir) {
          case 'up':
            this.$store.dispatch('setCoordinate', { x: currentX, y: traceDirect() });
            break;
          case 'down':
            this.$store.dispatch('setCoordinate', { x: currentX, y: traceDirect() });
            break;
          case 'left':
            this.$store.dispatch('setCoordinate', { x: traceDirect(), y: currentY });
            break;
          case 'right':
            this.$store.dispatch('setCoordinate', { x: traceDirect(), y: currentY });
            break;
          default:
            break;
        }
      }
    },
    handleOnCoverControllerClick(dir) {
      switch (dir) {
        case 'up':
          this.$store.dispatch('setCoordinate', {x: 1, y: 0});
          break;
        case 'down':
          this.$store.dispatch('setCoordinate', {x: 1, y: 2});
          break;
        case 'left':
          this.$store.dispatch('setCoordinate', {x: 1, y: 1});
          break;
        case 'right':
          this.$store.dispatch('setCoordinate', {x: 1, y: 3});
          break;
        default:
          break;
      }
    },
    hasNeighbor(dir) {
      const vm = this;
      const currentX = this.$store.state.x;
      const currentY = this.$store.state.y;

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
    updatedMazeMapFlag() {
      EventBus.$emit('UPDATE_MAZEMAP_FLAG', true);
    },
  },
  mounted() {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 38 && this.hasNeighbor('up'))
        this.handleControllerClick('up');
      if (e.keyCode === 40 && this.hasNeighbor('down'))
        this.handleControllerClick('down');
      if (e.keyCode === 37 && this.hasNeighbor('left'))
        this.handleControllerClick('left');
      if (e.keyCode === 39 && this.hasNeighbor('right'))
        this.handleControllerClick('right');

      if (e.keyCode === 27) {
        if (this.mazeMapFlag === true) {
          EventBus.$emit('UPDATE_MAZEMAP_FLAG', false);
        } else {
          EventBus.$emit('UPDATE_MAZEMAP_FLAG', true);
        }
      };
    });    
  }
};
</script>

<style lang="scss" scoped>
.page-maze-controller {
  position: fixed;
  z-index: 10;
  right: 18px;
  top: calc((100vw - 40px) * 0.63 + 36vh - 50px);
  width: 120px;
  height: 120px;
  margin: 10px;
  transition: .666s ease-in-out;
  @media screen and (min-width: 769px) {
    right: calc(50% - 540px);
    top: 63%;
  }
  .page-maze-controller-container {
    position: absolute;
    top: 0;
    left: 0;
  }
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
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  .page-maze-controller-button--disabled {
    pointer-events: none;
  }
}
.page-maze-controller--cover {
  @media screen and (min-width: 769px) {
    transform: scale(1.75);
    right: 180px;
  }
}
.page-maze-controller--disabled {
  opacity: 0;
}
.maze-map-button {
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  img {
    width: 100%;
  }
}
.st0 {
  display: none;
}
.st1 {
  fill: #ffffff;
}
.st2 {
  // fill: #bbd500;
  transition: .333s ease-in-out;
}
.category--1 {
  fill: #3fde7e;
}
.category--2 {
  fill: #f45b74;
}
.category--3 {
  fill: #f5822f;
}
.category--4 {
  fill: #a2c4fd;
}
.category--5 {
  fill: #3d3657;
}
.category--disabled {
  fill: #dedede;
}
</style>