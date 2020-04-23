<template>
    <div class="infoPoet">
        <div class="infoPoet-bar">
            <el-card class="infoPoet-bar__card">
                <div slot="header" class="clearfix">
                    <span class="poet-name">李白</span>
                </div>
                <div class="item lineHeight">
                    <span class="title">-&nbsp;诗人生平</span>
                    <div v-for="o in 4" :key="o" class="text">
                    {{'生平生平生平生平生平 ' + o }}
                </div>
                </div>
                <div class="item lineHeight">
                    <span class="title">-&nbsp;诗人轶事</span>
                    <div v-for="o in 4" :key="o" class="text">
                    {{'轶事轶事轶事轶事轶事 ' + o }}
                </div>
                </div>
            </el-card>
        </div>
        <div class="infoPoet-content">
            <el-row class="layout">
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">将进酒</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item">
                            <span>你好你好你好</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">将进酒</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item">
                            <span>你好你好你好</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="layout">
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">将进酒</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item">
                            <span>你好你好你好</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">将进酒</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item">
                            <span>你好你好你好</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.infoPoet {
    width: 900px;
    margin: 10px auto;
    padding-bottom: 40px;
    &-bar {
        padding: 0 20px;
        &__card {
            margin: 20px;
            .poet-name{
                font-size: 22px;
                font-weight: 500;
                color: #68AAAD;
                margin-bottom: 10px;
            }
            .title {
                padding: 14px 10px 0 10px;
                font-size: 16px;
            }
            .text {
                font-size: 14px;
                margin-top: 5px;
            }
            .item {
                margin-bottom: 10px;
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
