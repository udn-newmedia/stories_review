<template>
  <div class="maze-map">
    <div class="maze-map-turn-back" @click="updatedMazeMapFlag()">
      <div class="maze-map-turn-back-button">
        <img :src="require('@/assets/map/goback.svg')" alt="go back">
        返回
      </div>
    </div>
    <div 
      id="maze-map-table"
      class="maze-map-table"
    >
      <div
        v-for="(item_c, index_c) in column" :key="index_c"
        class="maze-map-table-column"
      >
        <ul
          v-for="(item_r, index_r) in mazeData" :key="index_r"
          :class="{
            'maze-map-table-row': true,
            'maze-map-table-row--active': +item_r.y === +index_c,
          }"
        >
          <li
            v-if="+item_r.y === +index_c"
            :class="{
              'maze-map-table-row-item': true,
              'maze-map-table-row-item--category1': item_r.y === 0 && +index_r !== +currentId,
              'maze-map-table-row-item--category2': item_r.y === 1 && +index_r !== +currentId,
              'maze-map-table-row-item--category3': item_r.y === 2 && +index_r !== +currentId,
              'maze-map-table-row-item--category4': item_r.y === 3 && +index_r !== +currentId,
              'maze-map-table-row-item--category5': item_r.y === 4 && +index_r !== +currentId,
              'maze-map-table-row-item--category1-active': item_r.y === 0 && +index_r === +currentId,
              'maze-map-table-row-item--category2-active': item_r.y === 1 && +index_r === +currentId,
              'maze-map-table-row-item--category3-active': item_r.y === 2 && +index_r === +currentId,
              'maze-map-table-row-item--category4-active': item_r.y === 3 && +index_r === +currentId,
              'maze-map-table-row-item--category5-active': item_r.y === 4 && +index_r === +currentId,
            }"
            @click="mapTabClick(item_r.x + 1, item_r.y, item_r.key)"
          >
            <div class="maze-map-table-row-item-text">
              <p
              v-for="(item, index) in item_r.title.split('\n')" :key="index"
              >
                {{item}}
              </p>
            </div>
            <div
              v-if="item_r.egg.flag"
              :class="{
                'maze-map-table-row-item-egg': true,
                'maze-map-table-row-item-egg--active': item_r.egg.collected,
              }"
            >
              <img :src="item_r.egg.skin" alt="go back">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';
import EventBus from '@/eventBus';
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
    mazeMapFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      row: 29,
      column: 5,
      mazeMapFirstTimeFlag: false, // for GA
    };
  },
  computed: {
    isMob() {
      return window.innerWidth < 768 ? true : false;
    }
  },
  watch: {
    mazeMapFlag: {
      handler(value) {
        const mazeMapItemWidth = this.isMob ? window.innerWidth * 0.7 : 320;
        if (value) {
          document.getElementById('maze-map-table').scrollLeft = this.mazeData[this.currentId].x * mazeMapItemWidth;
          this.sendMazeMapTriggerGA('Trigger_total');

          if (!this.mazeMapFirstTimeFlag) {
            this.mazeMapFirstTimeFlag = true;
            this.sendMazeMapTriggerGA('Trigger_People');
          }
        }
      },
    }
  },
  methods: {
    mapTabClick(x, y, key) {
      this.updatedMazeMapFlag();
      this.$store.dispatch('setCoordinate', {x: x, y: y});
      this.sendMazeMapItemClickGA(key);
    },
    updatedMazeMapFlag() {
      EventBus.$emit('UPDATE_MAZEMAP_FLAG', false);    
    },
    sendMazeMapTriggerGA(event) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "view",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + event + "]"
      });
    },
    sendMazeMapItemClickGA(key) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "view",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [map_item_click " + key + "]"
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.maze-map {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px 10px 0 10px;
  text-align: left;
  .maze-map-turn-back {
    position: relative;
    color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 10px;
    .maze-map-turn-back-button {
      width: 80px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }
    img {
      height: 24px;
      margin-right: 3px;
    }
  }
  .maze-map-table {
    position: relative;
    height: 85%;
    overflow-x: scroll;
    @media screen and (min-width: 769px) {
      height: calc(100% - 50px);
      margin-left: 185px;
    }
  }
  .maze-map-table-column {
    position: relative;
    width: calc(29 * (70vw));
    height: 100px;
    @media screen and (min-width: 769px) {
      width: calc(29 * (320px));
      height: 135px;
    }
  }
  .maze-map-table-row {
    position: relative;
    visibility: hidden;
    float: left;
    .maze-map-table-row-item {
      position: relative;
      width: calc(100% - 20px);
      height: calc(100% - 10px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 15px 15px 0 0;
      margin: 5px 10px;
      padding: 10px;
      cursor: pointer;
      p {
        font-size: 16px;
        line-height: 1.3;
        color: #ffffff;
        margin: 0;
        padding: 0;
        @media screen and (min-width: 769px) {
          font-size: 18px;
        }
      }
    }
    .maze-map-table-row-item--category1 {
      background-color: #40de7b44;
      border-bottom: solid 2px #40de7b;
    }
    .maze-map-table-row-item--category2 {
      background-color: #f45b7444;
      border-bottom: solid 2px #f45b74;
    }
    .maze-map-table-row-item--category3 {
      background-color: #fa6b4644;
      border-bottom: solid 2px #fa6b46;
    }
    .maze-map-table-row-item--category4 {
      background-color: #a2c4fd44;
      border-bottom: solid 2px #a2c4fd;
    }
    .maze-map-table-row-item--category5 {
      background-color: #e4e4e444;
      border-bottom: solid 2px #e4e4e4;
    }
    .maze-map-table-row-item--category1-active {
      background-color: #40de7b;
      animation: shake 0.1s ease-in-out infinite;
    }
    .maze-map-table-row-item--category2-active {
      background-color: #f45b74;
      animation: shake 0.1s ease-in-out infinite;
    }
    .maze-map-table-row-item--category3-active {
      background-color: #fa6b46;
      animation: shake 0.1s ease-in-out infinite;
    }
    .maze-map-table-row-item--category4-active {
      background-color: #a2c4fd;
      animation: shake 0.1s ease-in-out infinite;
    }
    .maze-map-table-row-item--category5-active {
      background-color: #e4e4e4;
      animation: shake 0.1s ease-in-out infinite;
    }
    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-1deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(1deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  .maze-map-table-row--active {
    visibility: visible;
    width: 70vw;
    height: 100px;
    @media screen and (min-width: 769px) {
      width: 320px;
      height: 135px;
    }
  }
  .maze-map-table-row-item-text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .maze-map-table-row-item-egg {
    position: relative;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.3;
    img {
      width: 100%;
    }
  }
  .maze-map-table-row-item-egg--active {
    opacity: 1;
  }
}
</style>