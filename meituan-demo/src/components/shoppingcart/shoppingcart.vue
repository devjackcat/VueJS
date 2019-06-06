<template>
  <div class="shoppingcart">
    <div class="icon">
      <span class="img"></span>
    </div>
    <div class="price">
      <span class="text">￥20</span>
    </div>
    <div class="separator"></div>
    <div class="distribution-fee">
      <span class="text">另需配送费4元</span>
    </div>
    <div class="submit">
      <span class="text">￥20起送</span>
    </div>
  </div>
</template>
<style lang="stylus">
  @import '../../common/stylus/mixin'
  .shoppingcart
    display flex
    position absolute 
    left 0
    bottom 0
    width 100%
    height 48px
    background-color #141d27
    .icon
      margin-left 12px
      margin-top -10px
      width 56px
      height 56px
      border-radius 28px
      text-align center
      background-color #141d27
      .img 
        margin-top 6px
        display inline-block
        width 44px
        height 44px
        border-radius 22px
        bg-image('shopping_cart')
        background-position center center
        background-size 33px 33px
        background-repeat no-repeat
        background-color #2B343C
    .price
      display flex
      align-items center
      margin-left 20px
      margin-right 10px
      .text
        font-size 12px
        font-weight 700
        line-height 24px
        color rgba(255,255,255,0.4)
    .separator
      margin 12px 0 12px 0
      width 1px
      background-color rgba(255,255,255,0.4)
    .distribution-fee
      display flex
      align-items center
      margin-left 10px
      margin-right 10px
      .text
        font-size 12px
        line-height 24px
        color rgba(255,255,255,0.4)
    .submit
      position absolute
      top 0
      right 0
      width 105px
      height 100%
      display flex
      justify-content center
      align-items center
      background-color rgb(43,51,59)
      .text
        font-size 12px
        font-weight 700
        line-height 24px
        color rgba(255,255,255,0.4)

</style>

