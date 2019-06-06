<template>
  <div class="demo">
    <div class="row row-1">
      <div class="cell cell-1">
        <div class="dot"></div>
      </div>
      <div class="cell cell-2">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-3"></div>
      <div class="cell cell-4"></div>
      <div class="cell cell-5"></div>
      <div class="cell cell-6"></div>
      <div class="cell cell-7"></div>
    </div>
    <div class="row row-2">
      <div class="cell cell-1"></div>
      <div class="cell cell-2"></div>
      <div class="cell cell-3"></div>
      <div class="cell cell-4"></div>
      <div class="cell cell-5"></div>
      <div class="cell cell-6"></div>
      <div class="cell cell-7"></div>
    </div>
    <div class="row row-3">
      <div class="cell cell-1"></div>
      <div class="cell cell-2"></div>
      <div class="cell cell-3"></div>
      <div class="cell cell-4"></div>
      <div class="cell cell-5"></div>
      <div class="cell cell-6"></div>
      <div class="cell cell-7"></div>
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
    .row 
      display flex
      width 100%
      height 100px
      margin-bottom 10px
      &:last-child
        margin-bottom 0
      .cell
        display flex
        flex-flow wrap
        justify-content space-between
        width 100px
        height 100%
        margin-right 10px
        border 1px solid blue
        border-radius 10px
        &:last-child
          margin-right 0
        .dot 
          width 30px
          height 30px
          border-radius 15px
          background-color black
        &.cell-1
          background-color red
          .dot 
            background-color yellow
</style>

