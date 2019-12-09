<template>
  <div class="collection-eggs-bar">
    <div :style="{'background-color': currentBackgroundColor}" :class="{'isMenuClose': isMenuClose}" class="egg-repo">
      <div class="eggs-bar-arrow">
        <svg class="bar" x="0px" y="0px" viewBox="0 0 67 608" style="enable-background:new 0 0 67 608;" xml:space="preserve">
          <g id="圖層_4">
            <polygon  :style="{'fill': currentBackgroundColor}" class="st0" points="57.61,304.11 49.69,292 49.75,0.01 0,0 0,608 49.62,608 49.68,315.56 	"/>
          </g>
          <g id="圖層_2">
            <g>
              <polyline class="st1" points="49.5,0 49.5,292 57.5,304 		"/>
              <polyline class="st2" points="49.5,608 49.5,316 57.5,304 		"/>
            </g>
          </g>
        </svg>
        <div :class="{'open': !isMenuClose}" class="pointer">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
          <g>
            <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
              c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
              "/>
          </g>
          </svg>
        </div>
      </div>

      <!-- <img  class="eggs-bar-arrow" src="../../assets/eggs/eggbar.svg" alt=""> -->
      <ul>
        <li v-for="(item, index) in bar_eggs" :key="index" >
          <div :class="['egg-wrapper', item.class]"><img :class="{'isGet': item.isGet}" :src="item.src" alt="" class="egg-hidden"></div>
        </li>
      </ul>
    </div>



    <div :style="{'background-color': currentBackgroundColor}" :class="{'close': isMenuClose}" class="egg-get-repo">
      <h1 class="congrate_title">恭喜獲得彩蛋！<div>邀請你來看 {{ eggTitle }}</div></h1>
      <ul>
        <li v-for="(item, index) in ani_eggs" :key="index">
          <div :class="['egg_get_wrapper', item.class]"><img :src="item.src" alt="" class="egg_get_hidden"></div>
        </li>
      </ul>
      <div v-show="eggTotal === 6" class="congrate_content">
        <h3>你已集滿6顆彩蛋<div>獲得新媒體提案書一份！</div></h3>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import anime from 'animejs';

export default {
  name: 'app',
  data () {
    return {
      eggTotal: 0,
      eggTitle: '新媒小劇場',
      isMenuClose: true,
      currentBackgroundColor: '',
      mapToEggDictionary: {
        'ae_3': 1,
        'd_5' : 2,
        'e_3' : 3,
        'h_6' : 4,
        'l_3' : 5,
        'm_5' : 6,
        'p_4' : 7,
        'q_6' : 8,
        't_3' : 9,
        'u_5' : 10,
        'w_6' : 11,
        'z_3' : 12
      },
      eggDictionary: {
        'egg1': require('../../assets/eggs/map/AE_3_map.svg'),
        'egg2': require('../../assets/eggs/map/D_5_map.svg'),
        'egg3': require('../../assets/eggs/map/E_3_map.svg'),
        'egg4': require('../../assets/eggs/map/H_6_map.svg'),
        'egg5': require('../../assets/eggs/map/L_3_map.svg'),
        'egg6': require('../../assets/eggs/map/M_5_map.svg'),
        'egg7': require('../../assets/eggs/map/P_4_map.svg'),
        'egg8': require('../../assets/eggs/map/Q_6_map.svg'),
        'egg9': require('../../assets/eggs/map/T_3_map.svg'),
        'egg10': require('../../assets/eggs/map/U_5_map.svg'),
        'egg11': require('../../assets/eggs/map/W_6_map.svg'),
        'egg12': require('../../assets/eggs/map/Z_3_map.svg'),
      },
      bar_eggs: [
        {
          class: 'egg1_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg2_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg3_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg4_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg5_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg6_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg7_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg8_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg9_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg10_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg11_wrapper',
          isGet: false,
          src: ""
        },
        {
          class: 'egg12_wrapper',
          isGet: false,
          src: ""
        }
      ],
      ani_eggs: [
        {
          class: 'egg1',
          src: require("../../assets/eggs/map/AE_3_map.svg"),
        },
        {
          class: 'egg2',
          src: require("../../assets/eggs/map/D_5_map.svg"),
        },
        {
          class: 'egg3',
          src: require("../../assets/eggs/map/E_3_map.svg"),
        },
        {
          class: 'egg4',
          src: require("../../assets/eggs/map/H_6_map.svg"),
        },
        {
          class: 'egg5',
          src: require("../../assets/eggs/map/L_3_map.svg"),
        },
        {
          class: 'egg6',
          src: require("../../assets/eggs/map/M_5_map.svg"),
        },
        {
          class: 'egg7',
          src: require("../../assets/eggs/map/P_4_map.svg"),
        },
        {
          class: 'egg8',
          src: require("../../assets/eggs/map/Q_6_map.svg"),
        },
        {
          class: 'egg9',
          src: require("../../assets/eggs/map/T_3_map.svg"),
        },
        {
          class: 'egg10',
          src: require("../../assets/eggs/map/U_5_map.svg"),
        },
        {
          class: 'egg11',
          src: require("../../assets/eggs/map/W_6_map.svg"),
        },
        {
          class: 'egg12',
          src: require("../../assets/eggs/map/Z_3_map.svg"),
        }
      ]
    }
  },
  props: {
    pageInfo: {
      type: Object,
      required: true,
    },
    colorScheme: {
      type: Array,
    },
    currentId: {
      type: String,
      default: '0',
    },
  },
  watch: { 
    pageInfo: function(newVal, oldVal) { // watch it
      
      this.currentBackgroundColor = this.colorScheme[newVal.category - 1]
      if (newVal.egg.flag && newVal.egg.collected === false) {
        this.eggTotal += 1; 
        let key = newVal.key
        let whichEgg = this.mapToEggDictionary[key]
        this.eggTitle = newVal.title
        this.updatedEggCollectedStatus(this.currentId)
        this.eggShow(whichEgg, this.eggTotal)
      }
    }
  },
  mounted () {
    this.currentBackgroundColor = this.colorScheme[this.pageInfo.category - 1]
    if (this.pageInfo.egg.flag && this.pageInfo.egg.collected === false) {
      let key = this.pageInfo.key
      let whichEgg = this.mapToEggDictionary[key]
      this.eggTitle = this.pageInfo.title
      this.updatedEggCollectedStatus(this.currentId)
      this.eggShow(whichEgg, this.eggTotal)
      this.eggTotal += 1;
    }
    
  },
  components: {

  },
  methods: {
    initEggList () {
      let vm = this
    },
    eggShow (target = 5, target_forward = 5) {
        
      let vm = this
      let targetDOM = `.egg${target}`
      let target_forwardDOM = `.egg${target_forward}_wrapper`
      let eggBarWidth = document.querySelector('.egg-repo')

      let element = document.querySelector(targetDOM),
          element_forward = document.querySelector(target_forwardDOM),
          move_x = -(element.getBoundingClientRect().left - element_forward.getBoundingClientRect().left),
          move_y = -(element.getBoundingClientRect().top - element_forward.getBoundingClientRect().top);
      if (this.isMenuClose) {
        move_x = move_x + eggBarWidth.getBoundingClientRect().width
      }
      let tl = anime.timeline({
        begin: function () {
            vm.isMenuClose = false
        },
        complete: function() {
          let img = vm.eggDictionary[`egg${target}`]
          vm.bar_eggs[target_forward - 1].src = img
          vm.bar_eggs[target_forward - 1].isGet = true
          if ( (0 < vm.eggTotal && vm.eggTotal < 6) || (6 < vm.eggTotal && vm.eggTotal < 12) ) {
            console.log(typeof(vm.eggTotal))
            console.log(vm.eggTotal !== 1)
            console.log(vm.eggTotal !== 12)
            setTimeout(() => {
              vm.isMenuClose = true
            }, 1000);
          }
        }
      });

      tl
      .add({
        targets: element,
        opacity: 1,
        duration: 100
      })
      .add({
        targets: element,
        duration: 1500,
        delay: 3000,
        translateX: move_x,
        translateY: move_y -2,
        translateZ: 0,
        scale: 0.15
      })
      .add({
        targets: element,
        duration: 100,
        opacity: 0
      });
    },
    updatedEggCollectedStatus(id) {
      EventBus.$emit('UPDATE_COLLECTED', id);    
    },
  },
  computed: {
    curretnEggs: function () {
      return this.eggsList
    }
  }
}
</script>

<style lang="scss">

.collection-eggs-bar {
  .egg-repo {
    position: absolute;
    left: 0px;
    top: 0px;
    box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.16);
    height: 100vh;
    transition: all 1s;
    opacity: 1;
    background-color: #3d3657;
    z-index: 1;
    &.isMenuClose {
      transition: all 1s;
      transform: translateX(-100%);
      // opacity: 0;
    }
    .eggs-bar-arrow {
      position: absolute;
      right: -10px;
      transform: translateX(20%);
      z-index: 5;
      height: 100%;
      .pointer {
        position: absolute;
        top: 50%;
        right: -15px;
        height: 15px;
        width: 15px;;
        transform: translate(-50%, -50%);
        g {
          fill:#FFFFFF;
        }
        &.open {
          transform-origin: center;
          transform: translate(-50%, -50%) rotate(180deg);
        }
      }
      .bar {
        position: absolute;
        right: -20px;
        height: inherit;
        .st0{fill: transparent;}
        .st1{fill:none;stroke:#7C7C7C;}
        .st2{fill:none;stroke:#7C7C7C;stroke-linecap:round;}
      }
      @media screen and (min-width: 769px) {
        display: none;
      }
    }
    ul {
      list-style: none;
      padding: 40px 0;
      position: relative;
      z-index: 10;
      li {
        div {
          background-color: red;
        }
      }
      .egg-wrapper {
        height: 25px;
        width: 25px;
        position: relative;
        transform-origin: center;
        margin: 5px 15px;
        border-radius: 50%;
        background-color: #858585;
        text-align: center;
        img {
          height: 80%;
          width: 80%;
          opacity: 0;
          transition: opacity 1s;
          &.isGet {
            opacity: 1;
          }
        }
      }
    }
  }
  .egg-get-repo {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 50px;
    top: 0;
    left: 0;
    &.close {
      opacity: 0;
      z-index: -1;
    }
    h1.congrate_title {
      text-align: center;
      margin-bottom: 71px;
      color: #fcff98;
      font-size: 1.652rem;
      line-height: 1.33;
      font-family: 'Microsoft JhengHei';
      font-weight: 500;
    }
    .congrate_content {
      margin-top: 50px;
      color: white;
      text-align: center;
      font-size: 1.125rem;
    }
    ul {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 50px 0;
      li {
        .egg_get_wrapper {
          position: absolute;
          transition: all 1s;
          transform-origin: center;
          opacity: 0;
          text-align: center;
          z-index: 15;
          .egg_get_hidden {
            height: 25px;
            width: 25px;
            transform-origin: center;
            transform: scale(5);
            position: relative;
          }
        }
        
      }
    }
  }
}
</style>
