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
  .proposal_content {
      width: 100%;
    @media screen and (min-width: 769px) {
      width: 50%;
    }
  }
  .close {
        position: absolute;
        right: 12px;
        top: 62px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        border-radius: 50%;
        border: solid 1px #fff;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
        &:before, &:after {
            position: absolute;
            top: 16px;
            left: 16px;
            content: ' ';
            height: 17px;
            width: 2px;
            background-color: #fff;
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