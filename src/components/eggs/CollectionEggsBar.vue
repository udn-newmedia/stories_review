<template>
  <div class="collection-eggs-bar">
    <div :class="{'isMenuClose': isMenuClose}" class="egg-repo">
      <ul>
        <li v-for="(item, index) in bar_eggs" :key="index" >
          <div :class="['egg-wrapper', item.class]"><img :class="{'isGet': item.isGet}" :src="item.src" alt="" class="egg-hidden"></div>
        </li>
      </ul>
    </div>
    <div class="egg-get-repo">
      <!-- <h1 class="congrate_title">恭喜獲得彩蛋！<div>邀請你來看新媒小劇場</div></h1> -->
      <ul>
        <li v-for="(item, index) in ani_eggs" :key="index">
          <div :class="['egg_get_wrapper', item.class]"><img :src="item.src" alt="" class="egg_get_hidden"></div>
        </li>
      </ul>
      <!-- <div class="congrate_content">
        <h3>你已集滿6顆彩蛋<div>獲得新媒體提案書一份！</div></h3>
      </div> -->
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'app',
  data () {
    return {
      isMenuClose: true,
      eggDictionacry: {
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
  mounted () {
    // this.eggShow('12', '1')
    
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
          let img = vm.eggDictionacry[`egg${target}`]
          vm.bar_eggs[target_forward - 1].src = img
          vm.bar_eggs[target_forward - 1].isGet = true
        }
      });


      tl
      .add({
        opacity: 1,
        duration: 100,
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
    border-right: solid 1px #7c7c7c;
    height: 100vh;
    transition: all 1s;
    &.isMenuClose {
      transition: all 1s;
      transform: translateX(-100%);
    }
    ul {
      list-style: none;
      padding: 40px 0;
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
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 50px;
     z-index: 100;
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
