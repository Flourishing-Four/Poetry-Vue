<template>
    <div class="info">
        <div class="info-frag">
            <el-carousel :interval="8000" height="560px">
                <el-carousel-item v-for="(item, index) in fragList" :key="index">
                    <!-- <h3>{{ item }}</h3> -->
                    <div class="info-frag__carousel">
                        <span class="info-frag__carousel--title">{{item.title}}</span>
                        <el-divider content-position="right">诗词小知识</el-divider>
                        <span class="info-frag__carousel--content">
                            {{item.content + '古诗词内容李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。'}}
                        </span>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="info-bar">
            <el-card class="info-bar__card">
                <span v-show="!isDynasty" class="choose">所有朝代</span>
                <span v-show="isDynasty" class="choose">{{this.tDynasty}}</span>
                <el-divider content-position="right">朝代</el-divider>
                <el-button type="text" v-for="i in dynasty" :key="i" @click="changeDynasty(i)">{{i}}</el-button>
            </el-card>
        </div>
        <div class="info-content">
            <el-card class="info-content__card">
                <div class="avatar"></div>
                <div class="clearfix">
                    <span class="poem">李白</span>
                    <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                    <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'古诗词内容李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。' + o }}
                </div>
                </div>
            </el-card>
            <el-card class="info-content__card">
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
            <el-card class="info-content__card">
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
      ],
      fragList: [
        {
          title: '标题一',
          content: '内容一'
        },
        {
          title: '标题二',
          content: '内容二'
        },
        {
          title: '标题三',
          content: '内容三'
        }
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
.info {
    width: 1100px;
    margin: 10px auto;
    .el-divider {
        margin: 12px 0;
    }
    &-bar {
        padding: 0 20px;
        &__card {
            width: 660px;
            margin: 20px;
            .choose {
                font-weight: bold;
                /* color: #F9BE64; */
                margin-left: 12px;
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
            width: 660px;
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
    &-frag {
        width: 340px;
        float: right;
        //position: fixed;
        //right: 200px;
        margin: 0 20px;
        //padding: 20px;
        background-color: rgb(204, 224, 212);
        border: 1px solid rgb(182, 198, 188);
        border-radius: 4px;
        &__carousel {
            margin: 30px;
            padding: 20px;
            height: 80%;
            background-color: #fff;
            border: 1px solid rgb(182, 198, 188);
            border-radius: 4px;
            box-shadow: 1px 1px 10px 1px #858585a9;
            &--title {
                font-size: 20px;
                font-weight: 500;
                color: #68AAAD;
            }
            &--content {
                font-size: 14px;
                line-height: 30px;
                color: #3B4753;
            }
        }
        /* .el-carousel__item h3 {
            color: #475669;
            font-size: 18px;
            opacity: 0.75;
            line-height: 300px;
            margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99bfba;
        }
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        } */
    }
}
</style>
