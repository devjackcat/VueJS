<template>
  <div class="demo">
    <div class="row row-1">
      <div class="cell cell-1">
        <div class="dot"></div>
      </div>
      <div class="cell cell-2">
        <div class="dot"></div>
      </div>
      <div class="cell cell-3">
        <div class="dot"></div>
      </div>
      <div class="cell cell-4">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-5">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-6">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
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
    <div class="row row-2">
      <div class="cell cell-1">
        <div class="dot"></div>
      </div>
      <div class="cell cell-2">
        <div class="dot"></div>
      </div>
      <div class="cell cell-3">
        <div class="dot"></div>
      </div>
      <div class="cell cell-4">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-5">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-6">
        <div class="sub-row-1">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="sub-row-2">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
      <div class="cell cell-7">
        <div class="sub-row-1">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="sub-row-2">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="row row-3">
      <div class="cell cell-1">
        <div class="dot"></div>
      </div>
      <div class="cell cell-2">
        <div class="dot"></div>
      </div>
      <div class="cell cell-3">
        <div class="dot"></div>
      </div>
      <div class="cell cell-4">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-5">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-6">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="cell cell-7">
        <div class="sub-row-1">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="sub-row-2">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="sub-row-3">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
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
        background-color black
        border-radius 10px
        &:last-child
          margin-right 0
        .dot 
          width 30px
          height 30px
          border-radius 15px
          background-color white
      .cell-1
        justify-content flex-start
      .cell-2
        justify-content center
      .cell-3
        justify-content flex-end
    .row-1
      .cell-1,.cell-2,.cell-3
        align-items flex-start
      .cell-4
        justify-content space-between
      .cell-5
        flex-direction column
        align-items flex-end
      .cell-6
        .dot:nth-child(1)
          align-self flex-start
        .dot:nth-child(2)
          align-self center
        .dot:nth-child(3)
          align-self flex-end
      .cell-7
        flex-direction column
        .sub-row-1
          display flex
          justify-content space-between
        .sub-row-2
          display flex
          justify-content center
        .sub-row-3
          display flex
          justify-content space-between
    .row-2
      .cell-1,.cell-2,.cell-3
        align-items center
      .cell-4
        flex-direction column
        justify-content space-between
      .cell-5
        align-items flex-end
      .cell-6
        flex-direction row
        .sub-row-1
          display flex
          flex-direction column
          justify-content space-between
        .sub-row-2
          display flex
          flex-direction column
          justify-content space-between
      .cell-7
        display flex
        .sub-row-1
          display flex
          flex-direction column
          justify-content space-between
        .sub-row-2
          display flex
          flex-direction column
          justify-content space-between
    .row-3
      .cell-1,.cell-2,.cell-3
        align-items flex-end
      .cell-4
        flex-direction column
        justify-content flex-start
        .dot:nth-child(2)
            align-self center
      .cell-5
        flex-direction column
        justify-content flex-start
        .dot:nth-child(2)
          align-self flex-end
      .cell-6
        justify-content space-between
        .dot:nth-child(2)
          align-self flex-end
      .cell-7
        display flex
        flex-direction column
        align-content s
        .sub-row-1
          display flex
          flex-direction column
          justify-content space-between
          height 100%
        .sub-row-2
          display flex
          flex-direction column
          justify-content flex-end
          height 100%
        .sub-row-3
          display flex
          flex-direction column
          justify-content space-between
          height 100%
</style>

