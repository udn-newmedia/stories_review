<template>
  <div :class="{
    'award-hint': true,
    'award-hint--active': hintToggle,
    'award-hint--disabled': !hintToggle,
  }">
    <div class="award-hint-title">2019《全球華文永續報導獎》專業組融媒體類</div>
    <div class="award-hint-award">首獎</div>
    <div v-if="isMob" class="award-hint-button-container">
      <button class="award-hint-button" @click="handleHintToggleClick()" name="award toggle">
        <i class="up" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AwardHint',
  data() {
    return {
      hintToggle: true,
    };
  },
  computed: {
    isMob() {
      return window.innerWidth < 769 ? true : false;
    },
  },
  methods: {
    handleHintToggleClick() {
      this.hintToggle = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.award-hint {
  position: fixed;
  z-index: 5001;
  top: 0;
  left: 0;
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: rgba(64, 64, 64, 0.9);
  @media screen and (min-width: 769px) {
    position: absolute;
    top: -135px;
    margin: 0 20px;
  }
  .award-hint-title {
    margin-top: 20px;
  }
  .award-hint-award {
    margin-top: 5px;
    color: #f5822f;
  }
}
.award-hint--active {
  animation: slideIn .333s ease-in-out forwards;
  @keyframes slideIn {
    from {
      transform: translateY(-135px);
    }
    to {
      transform: translateY(0);
    }
  }
}
.award-hint--disabled {
  animation: slideOut .333s ease-in-out forwards;
  @keyframes slideOut {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-135px);
    }
  }
}
.award-hint-button-container {
  position: absolute;
  bottom: 0;
  right: 0;
  .award-hint-button {
    position: relative;
    width: 35px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    i {
      border: solid #ffffff;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 5px;
    }
    .up {
      transform: rotate(-135deg);
    }
  }
}
</style>