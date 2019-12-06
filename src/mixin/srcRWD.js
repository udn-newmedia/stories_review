var mixin = {
  methods: {
    srcRWD (mobile, pad, screen) {
      if (window.matchMedia("(max-width: 767px)").matches) {
        // console.log("The Device is mobile")
        return mobile
      } else if ( window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1023px)").matches ) {
        // console.log("The Device is pad")
        return pad
      } else {
        // console.log("The Device is screen")
        return screen
      }
    }
  }
}

export default mixin
