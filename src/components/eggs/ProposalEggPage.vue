<template>
  <div :style="{'background-color': currentBackgroundColor}" class="proposal">
      <div class="proposal_content">
          <iframe
            width="100%"
            height="600px"
            src="https://www.surveycake.com/s/XvAX3"
            style="border:#ddd 1px solid;"
            allowTransparency="true"
            frameborder="0">
          </iframe> 
      </div>
      
      <div  :style="{'background-color': currentBackgroundColor}" @click="handleClose" class="close">
      </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus';
import srcRWD from '@/mixin/srcRWD.js';

export default {
  name: 'ProposalEggPage',
  props: {
      currentBackgroundColor: {
        type: String,
        required: true  
      }
  },
  mixins: [srcRWD],
  methods: {
   handleClose () {
       this.$emit('closeProposal')
   }
  }
}
</script>

<style lang="scss">
.proposal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 180px;
  @media screen and (min-width: 375px) {
    padding-top: 100px;
  }
  .proposal_content {
      width: 100%;
    @media screen and (min-width: 769px) {
      width: 50%;
      padding-top: 0px;
    }
  }
  .close {
        position: absolute;
        top: 40px;
        right: 0;
        height: 32px;
        width: 100%;
        opacity: 0.3;        
        border: solid 1px #fff;
        cursor: pointer;
        @media screen and (min-width: 769px) {
          right: 12px;
          width: 32px;
          border-radius: 50%;
          top: 15%;
          right: 25%;
        }
        &:hover {
            opacity: 1;
        }
        &:before, &:after {
            position: absolute;
            top: 16px;
            left: 50%;
            content: ' ';
            height: 17px;
            width: 2px;
            background-color: #fff;
            @media screen and (min-width: 769px) {
              left: 16px;
            }
        }
        &:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
            transform:  translate(-50%, -50%) rotate(-45deg);
        }
    }

    
    
}
</style>