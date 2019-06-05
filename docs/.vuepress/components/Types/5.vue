<template>
  <div
    @mouseleave="addMouse"
    @mouseenter="removeMouse"
    class="box box5">

    <button class="k-hover6">
      Hello Kursor 5!
    </button>

  </div>
</template>
<script>
export default {
  mounted() {
    let kursor = this.$kursor
    new kursor({
      type: 5,
      el: '.box5'
    })
  },
  methods:{
    removeMouse() {
      let mykursor = this.$mykursor
      mykursor.hidden()
    },
    addMouse() {
      let mykursor = this.$mykursor
      mykursor.hidden(false)
    }
  }
}
</script>
<style lang="stylus" scoped>
.box
  position relative
  width 100%
  height 300px
  border 1px dashed rgba(0,0,0,.2)
  margin-top 10px
  display flex
  align-items center
  justify-content center
  border-radius 4px
  cursor default
  button
    padding 10px
    background #FF4858
    color rgb(255,255,255)
    border 0px
    border-radius 3px
    cursor pointer
</style>

