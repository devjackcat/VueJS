<template>
  <div class="demo">
    <div class="cell cell-7">
        <div class="sub-row-1">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="sub-row-2">
          <div class="dot"></div>
        </div>
        <div class="sub-row-3">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .demo 
    margin auto
    width 770px
    height 330px
    .cell
      display flex
      flex-direction column
      justify-content space-between
      width 100px
      height 100px
      background red
      .dot
        width 30px
        height 30px
        background black 
        border-radius 15px
    .sub-row-1
      display flex
      justify-content space-between
      background-color pink 
    .sub-row-2
      display flex
      justify-content center
      background-color yellow
    .sub-row-3
      display flex
      justify-content space-between
      background-color blue
</style>

