<template>
    <div class="activityWorks">
        <div class="activityWorks-bar">
            <!-- <el-card class="activityWorks-bar__card">
                <span class="title">作者头像&简介</span>
            </el-card> -->
        </div>
        <div class="activityWorks-content">
            <el-row class="layout">
                <el-col :span='14'>
                    <el-card class="activityWorks-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">诗词名字</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item">
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='10'>
                    <el-card class="activityWorks-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">作者头像</span>
                        </div>
                        <div class="text item lineHeight">
                            作者想说的话<br>
                            灵感来源,创作说明
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-card class="activityWorks-content__card">
                <div slot="header" class="clearfix">
                    <span class="title">评论区</span>
                </div>
                <div class="text item lineHeight"  v-for="s in 4" :key="s">
                    我是第{{s}}个评论
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.activityWorks {
    width: 900px;
    margin: 10px auto;
    padding-bottom: 40px;
    &-bar {
        padding: 0 20px;
        &__card {
            margin: 20px;
            .el-tag {
                margin-left: 12px;
                 font-size: 14px;
            }
        }
    }
    &-content {
        padding: 0 20px;
        .layout {
            display: flex;
            align-items: stretch;
            padding-bottom: 40px;// 因为card高度100%失去了间距
        }
        &__card {
            height: 100%;
            margin: 20px;
            .title {
                padding: 14px 10px 0 10px;
                font-size: 20px;
            }
            .subTitle {
                font-size: 12px;
                color: rgb(165, 165, 165);
            }
            .el-card__body {
                padding: 20px 30px;
            }
            .text {
                font-size: 16px;
            }
            .item {
                margin-bottom: 18px;
            }
            .lineHeight {
                line-height: 36px;
            }
            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }
            .clearfix:after {
                clear: both
            }
        }
    }
}
</style>
