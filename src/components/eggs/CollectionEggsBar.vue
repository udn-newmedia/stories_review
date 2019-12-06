<template>
  <div class="collection-eggs-bar">
    <div :style="{'background-color': currentBackgroundColor}" :class="{'isMenuClose': isMenuClose}" class="egg-repo">
      <div class="eggs-bar-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="88.135" height="640.529" viewBox="0 0 88.135 640.529">
        <defs>
            <filter id="Path_1036" x="0" y="0" width="80.268" height="640.529" filterUnits="userSpaceOnUse">
              <feOffset dx="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_1332" x="49.153" y="291.181" width="38.982" height="56.696" filterUnits="userSpaceOnUse">
              <feOffset dx="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="5" result="blur-2"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-2"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_1330" x="52.302" y="8.989" width="27.807" height="323.484" filterUnits="userSpaceOnUse">
              <feOffset dy="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur-3"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-3"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="Path_1331" x="52.275" y="313.332" width="27.833" height="324.192" filterUnits="userSpaceOnUse">
              <feOffset dy="3" input="SourceAlpha"/>
              <feGaussianBlur stdDeviation="3" result="blur-4"/>
              <feFlood flood-opacity="0.161"/>
              <feComposite operator="in" in2="blur-4"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g id="Group_1682" data-name="Group 1682" transform="translate(4736.5 1827.029)">
            <g class="cls-7" transform="matrix(1, 0, 0, 1, -4736.5, -1827.03)">
              <path :style="{'fill': currentBackgroundColor}" id="Path_1036-2" data-name="Path 1036" class="cls-1" d="M2.478-.133,613,0V50.136H2.471Z" transform="translate(62.14 12.53) rotate(90)"/>
            </g>
            <g class="cls-6" transform="matrix(1, 0, 0, 1, -4736.5, -1827.03)">
              <path :style="{'fill': currentBackgroundColor}" id="Path_1332-2" data-name="Path 1332" class="cls-1" d="M13.727-.135,26.7,8.847H0Z" transform="translate(70 306.18) rotate(90)"/>
            </g>
            <g id="Group_1675" data-name="Group 1675" transform="translate(1325 -238)">
              <g class="cls-5" transform="matrix(1, 0, 0, 1, -6061.5, -1589.03)">
                <path id="Path_1330-2" data-name="Path 1330" class="cls-2" d="M-5940.7-1574.215V-1282.2l8.609,12.275" transform="translate(6002.5 1589.7)"/>
              </g>
              <g class="cls-4" transform="matrix(1, 0, 0, 1, -6061.5, -1589.03)">
                <path id="Path_1331-2" data-name="Path 1331" class="cls-2" d="M-5940.725-1269.68l.027-292.72,8.609-12.275" transform="translate(6002.5 1894.7)"/>
              </g>
            </g>
            <g id="Group_1676" data-name="Group 1676" transform="translate(1326.645 -236)">
              <path id="Path_1333" data-name="Path 1333" class="cls-3" d="M0,0,2.019.015l.059,8.046L.059,8.046Z" transform="matrix(0.788, -0.616, 0.616, 0.788, -6004.25, -1276.536)"/>
              <path id="Path_1334" data-name="Path 1334" class="cls-3" d="M.938.341,2.957.327,2.9,8.373.878,8.388Z" transform="matrix(0.788, 0.616, -0.616, 0.788, -5999.778, -1273.614)"/>
            </g>
          </g>
        </svg>
      </div>
<!-- 
      <img  class="eggs-bar-arrow" src="../../assets/eggs/eggbar.svg" alt=""> -->
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
import anime from 'animejs';

export default {
  name: 'app',
  data () {
    return {
      eggTotal: 0,
      test: '123',
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
  },
  watch: { 
    pageInfo: function(newVal, oldVal) { // watch it
      
      this.currentBackgroundColor = this.colorScheme[newVal.category - 1]
      if (newVal.egg.flag && newVal.egg.collected === false) {
        this.eggTotal += 1; 
        let key = newVal.key
        let whichEgg = this.mapToEggDictionary[key]
        this.eggTitle = newVal.title
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

      let element = document.querySelector(targetDOM),
          element_forward = document.querySelector(target_forwardDOM),
          move_x = -(element.getBoundingClientRect().left - element_forward.getBoundingClientRect().left),
          move_y = -(element.getBoundingClientRect().top - element_forward.getBoundingClientRect().top);

      let tl = anime.timeline({
        targets: element,
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
        opacity: 1,
        duration: 100
      })
      .add({
        duration: 1500,
        delay: 3000,
        translateX: move_x,
        translateY: move_y -2,
        translateZ: 0,
        scale: 0.15
      })
      .add({
        duration: 100,
        opacity: 0
      });
    }
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
      // top: 0;
      right: -10px;
      transform: translateX(20%);
      z-index: 5;
      // height: 100%;
      .cls-2 {
        fill: none;
        stroke: #7c7c7c;
        stroke-linecap: square;
      }

      .cls-3 {
        fill: #fff;
      }

      .cls-4 {
        filter: url(#Path_1331);
      }

      .cls-5 {
        filter: url(#Path_1330);
      }

      .cls-6 {
        filter: url(#Path_1332);
      }

      .cls-7 {
        filter: url(#Path_1036);
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
