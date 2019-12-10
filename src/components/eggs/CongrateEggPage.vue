<template>
  <div :style="{'background-color': currentBackgroundColor}"  class="congrate">
    <div class="congrate_text"><span>恭喜集滿彩蛋  彩蛋達人是你  (￣ ◡￣)y  你好棒棒  恭喜集滿彩蛋</span><span>恭喜集滿彩蛋  彩蛋達人是你  (￣ ◡￣)y  你好棒棒  恭喜集滿彩蛋</span><span>恭喜集滿彩蛋  彩蛋達人是你  (￣ ◡￣)y  你好棒棒  恭喜集滿彩蛋</span></div>
    <div class="congrate_text"><span>你好棒棒  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span><span>你好棒棒  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span><span>你好棒棒  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span></div>
    <div class="congrate_text"><span> ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span><span> ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span><span> ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒  (￣ ◡￣)y  彩蛋達人是你</span></div>
    <div class="congrate_text"><span>彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒</span><span>彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒</span><span>彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  恭喜集滿彩蛋  你好棒棒</span></div>
    <div class="congrate_text"><span>(￣ ◡￣)y  恭喜集滿彩蛋  你好棒棒  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  ┌( ಠ‿ಠ)┘</span><span>(￣ ◡￣)y  恭喜集滿彩蛋  你好棒棒  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  ┌( ಠ‿ಠ)┘</span><span>(￣ ◡￣)y  恭喜集滿彩蛋  你好棒棒  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘  ┌( ಠ‿ಠ)┘</span></div>
    <div class="congrate_text"><span>你好棒棒  (￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘</span><span>你好棒棒  (￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘</span><span>你好棒棒  (￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  ┌( ಠ‿ಠ)┘</span></div>
    <div class="congrate_text"><span>(￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  你好棒棒</span><span>(￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  你好棒棒</span><span>(￣ ◡￣)y  彩蛋達人是你  恭喜集滿彩蛋  你好棒棒</span></div>
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
  position: absolute;
  color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  .congrate_text {
     span {
      text-transform: uppercase;
      will-change: transform;
      transform: translateX(100px);
      font-size: 50px;
      font-weight: 900;
      line-height: 2;
      animation: marquee 24s linear infinite;
    }
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    } 
  }
    
}
</style>