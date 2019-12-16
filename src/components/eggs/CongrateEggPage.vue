<template>
  <div :style="{'background-color': currentBackgroundColor}"  class="congrate">
    <div class="congrate_marquee"><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span></div>
    <div class="congrate_marquee"><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span></div>
    <div class="congrate_marquee"><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span></div>
    <div class="congrate_marquee"><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span></div>
    <div class="congrate_marquee"><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span><span>彩蛋達人是你  ┌( ಠ‿ಠ)┘</span></div>
    <div class="congrate_marquee"><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span><span>(￣ ◡￣)y  恭喜集滿彩蛋</span></div>
    <div class="congrate_marquee"><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span><span>恭喜集滿彩蛋   你好棒棒</span></div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import srcRWD from '@/mixin/srcRWD.js';

export default {
  name: 'CongrateEggPage',
  props: {
    currentBackgroundColor: {
      type: String,
      required: true  
    }
  },
  mixins: [srcRWD],
  methods: {
   
  }
}
</script>

<style lang="scss">
.congrate {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
  color: white;
  z-index: 2;  
  .congrate_marquee {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &:nth-child(2n) span {
      animation: marquee-left 7.5s linear infinite;
    }
    &:nth-child(2n-1) span {
      animation: marquee-right 7.5s linear infinite;
    }
    span {
      white-space: nowrap;
      text-transform: uppercase;     
      will-change: transform;
      font-size: 50px;
      font-weight: 900;
      line-height: 2;
      transform: translateX(0);
    }
    
    @keyframes marquee-left {
      0% {
        transform: translate(0);
      }
      100% {
        transform: translate(-100%);
      }
    }
    @keyframes marquee-right {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
    
}
</style>