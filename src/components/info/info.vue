<template>
    <div class="classic">
        <div class="classic-tag">
            <div class="classic-tag__box">
                <span class="classic-tag__box--title">朝代</span>
                <div class="classic-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="classic-tag__box">
                <span class="classic-tag__box--title another">类别</span>
                <div class="classic-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="classic-tag__box">
                <span class="classic-tag__box--title">朝代</span>
                <div class="classic-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="classic-tag__box">
                <span class="classic-tag__box--title another">类别</span>
                <div class="classic-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
        </div>
        <div class="classic-bar">
            <el-card class="classic-bar__card">
                <span v-show="!isDynasty" class="choose">所有朝代</span>
                <span v-show="isDynasty" class="choose">{{this.tDynasty}}</span>
                <el-divider content-position="right">朝代</el-divider>
                <el-button type="text" v-for="i in dynasty" :key="i" @click="changeDynasty(i)">{{i}}</el-button>
            </el-card>
        </div>
        <div class="classic-content">
            <el-card class="classic-content__card">
                <div class="avatar"></div>
                <div class="clearfix">
                    <span class="poem">李白</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。 ' + o }}
                </div>
                </div>
            </el-card>
            <el-card class="classic-content__card">
                <div slot="header" class="clearfix">
                    <span>古诗词名称</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">释</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容 ' + o }}
                </div>
            </el-card>
            <el-card class="classic-content__card">
                <div slot="header" class="clearfix">
                    <span>古诗词名称</span>
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
      isDynasty: false,
      tDynasty: '',
      dynasty: [
        '所有朝代',
        '秦',
        '两汉',
        '魏晋',
        '南北朝',
        '隋',
        '唐',
        '五代',
        '宋',
        '金',
        '元',
        '明',
        '清'
      ]
    }
  },
  methods: {
    changeDynasty (val) {
      console.log(val)
      this.isDynasty = true
      this.tDynasty = val
    }
  }
}
</script>

<style lang="scss">
.classic {
    width: 1000px;
    margin: 10px auto;
    &-bar {
        padding: 0 20px;
        &__card {
            width: 560px;
            margin: 20px;
            .choose {
                font-weight: bold;
                /* color: #F9BE64; */
                margin-left: 12px;
            }
            .el-divider {
                margin: 12px 0;
            }
            .el-button {
                margin-left: 12px;
                span {
                    font-size: 14px;
                }
            }
        }
    }
    &-content {
        padding: 0 20px;
        &__card {
            width: 560px;
            margin: 20px;
            .avatar {
                width: 100px;
                height: 200px;
                background-color: blueviolet;
                float: left;
                margin-right:20px;
            }
            .poem {
                font-size: 20px;
                font-weight: 500;
                color: #68AAAD;
                margin-bottom: 10px;
            }
            .item {
                font-size: 14px;
                margin: 10px 0;
                /* position: relative;
                top: -120px;
                left: 120px; */
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
        width: 300px;
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
