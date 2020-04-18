<template>
    <div class="savor">
        <div class="savor-tag">
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">朝代</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">朝代</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
        </div>
        <div class="savor-content">
            <el-card class="savor-content__card">
                <div slot="header" class="clearfix">
                    <span>古诗词名称（这个页面需要再商榷）</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                    <!-- <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">释</el-button> -->
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容 ' + o }}
                </div>
            </el-card>
            <el-card class="savor-content__card">
                <div slot="header" class="clearfix">
                    <span>鉴赏方法（好像有疑问）</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                    <!-- <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">释</el-button> -->
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容 ' + o }}
                </div>
            </el-card>
            <el-card class="savor-content__card">
                <div slot="header" class="clearfix">
                    <span>评论区</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">释</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容 ' + o }}
                </div>
            </el-card>
            <el-pagination background layout="prev, pager, next" :total="20"/>
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
.savor {
    width: 1000px;
    margin: 10px auto;
    &-content {
        padding: 0 20px;
        &__card {
            width: 600px;
            margin: 20px;
            .text {
            font-size: 14px;
            }
            .item {
                margin-bottom: 18px;
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
        .el-pagination {
            width: 200px;
            position: relative;
            left: 360px;
        }
    }
    &-tag {
        width: 260px;
        float: right;
        margin: 0 20px;
        padding: 20px;
        background-color: rgba(195, 221, 205, 0.253);
        border: 1px solid rgb(182, 198, 188);
        border-radius: 4px;
        &__box {
            margin-bottom: 20px;
            &--title {
                display: block;
                border-left: 3px solid #F9BE64;
                margin-bottom: 10px;
                padding: 4px 10px;
            }
            .another {
                border-left: 3px solid #68AAAD;
            }
            &--btu {
                display: flex;
                flex-wrap: wrap;
                .el-button {
                    margin: 6px;
                }
            }
        }
    }
}
</style>
