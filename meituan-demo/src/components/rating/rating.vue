<template>
    <div class="rating">
        <div class="summary border-1px">
            <div class="left">
                <span class="score">3.9</span>
                <span class="rating-label">综合评分</span>
                <span class="compare">高于周边上架69.2%</span>
            </div>
            <div class="separator"></div>
            <div class="right">
                <div class="score-row score-row-1">
                    <span class="name">服务态度</span>
                    <v-star class="star" :size='24' :score="3.9"></v-star>
                    <div class="score">3.9</div>
                </div>
                <div class="score-row score-row-2">
                    <span class="name">服务质量</span>
                    <v-star class="star" :size='24' :score="2"></v-star>
                    <div class="score">2</div>
                </div>
                <div class="score-row score-row-3">
                    <span class="name">送达时间</span>
                    <span class="time">40分钟</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import star from '@/components/star/star'
export default {
    components: {
		'v-star':star
	}
}
</script>

<style lang="stylus">
    @import '../../common/stylus/index.styl'
    .rating
        position absolute
        width 100%
        top 174px
        bottom 48px
        background-color #fff
        .summary
            display flex
            width 100%
            height 107px
            border-1px(rgba(7,17,27,0.1))
            .left
                display flex
                flex-direction column
                height 100%
                width 40%
                text-align center
                .score
                    margin-top 17px
                    font-size 24px
                    line-height 28px
                    color rgb(255,153,0)
                    // background-color red
                .rating-label
                    margin-top 7px
                    font-size 12px
                    line-height 12px
                    color rgb(7,17,27)
                    // background-color yellow
                .compare
                    margin-top 10px
                    font-size 10px
                    line-height 10px
                    color #93999F
                    // background-color blue
            .separator
                margin 16px 0 16px 0
                width 1px
                background-color #E6E7E8
            .right
                height 100%
                width 60%
                padding-top 20px
                .score-row
                    display flex
                    margin-bottom 8px
                    .name
                        margin-left 24px
                        margin-right 12px
                        font-size 12px
                        font-weight 700
                        color rgb(7,17,27)
                        line-height 18px
                    .star
                        margin-right 12px
                    .score
                        vertical-align top
                        font-size 12px
                        color rgb(255,153,0)
                        line-height 18px
                .score-row-3
                    .time
                        font-size 12px
                        color rgb(147,153,159)
                        line-height 18px
</style>

