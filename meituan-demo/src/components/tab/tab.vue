<template>
    <div>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods" class="hahahah">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/rating">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/saller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus">
    @import '../../common/stylus/index.styl'
    .tab
        display flex
        width 100%
        height 40px
        line-height 40px
        border-1px(rgba(7,17,27,0.1))
        .tab-item
            flex 1
            text-align center
            & > a
                display block
                font-size 14px
                color rgb(77,85,93)
                &.active
                    color rgb(240,20,20)
</style>
