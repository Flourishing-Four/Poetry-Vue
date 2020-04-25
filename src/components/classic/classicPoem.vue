<template>
    <div class="classicPoem">
        <div class="classicPoem-bar">
            <el-card class="classicPoem-bar__card">
                <span class="title">诗词标签</span>
                <el-tag v-for="i in poetryType" :key="i">{{i}}</el-tag>
            </el-card>
        </div>
        <div class="classicPoem-content">
            <!-- <div class="layout">
            </div> -->
            <el-row class="layout">
                <el-col :span='14'>
                    <el-card class="classicPoem-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">{{poetryData.poetryTitle}}</span>
                            <span class="subTitle">{{poetryData.dynasty + '·' + poetryData.authorName}}</span>
                            <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                            <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                        </div>
                        <div class="text item" v-for="i in poetryBody" :key="i">
                            {{i}}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='10'>
                    <el-card class="classicPoem-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">译文</span>
                        </div>
                        <div class="text item lineHeght">
                            {{'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + poetryData.translation}}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-card class="classicPoem-content__card">
                <div slot="header" class="clearfix">
                    <span class="title">赏析</span>
                </div>
                <div class="text item lineHeght">
                    {{'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + poetryData.appreciation}}
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      poetryData: [{
      }],
      poetryBody: [], // 用。！？；分割得到的诗文数组
      poetryType: [] // 用|分割得到的标签数组
      // testStr: '君！不见？黄河之水。天上来！奔流;到海。不复？回'
    }
  },
  activated () {
    // this.poetryData = this.$store.getters.onePoetry
    // console.log('yeah' + this.$store.getters.onePoetry.poetryTitle)
    console.log(this.$route.query.poetryData.poetryTitle)
    this.poetryData = this.$route.query.poetryData
    this.dealWithPoem()
  },
  /* updated () {
    // this.poetryData = this.$store.getters.onePoetry
    // console.log('yeah' + this.$store.getters.onePoetry.poetryTitle)
    console.log(this.$route.query.poetryData.poetryTitle)
    this.poetryData = this.$route.query.poetryData
    this.dealWithPoem()
  }, */
  methods: {
    getApi () {
      this.$axios
        .get('http://localhost:8443/poetry/onepoetry/5')
        .then(response => {
          this.poetryData = response.data
          this.poetryBody = response.data.poetryBody.split('。')
          this.poetryBody.pop()// 分割诗文 删除最后的空元素
          this.dealWithPoem()// 用。！？；分割诗文数组
          this.poetryType = response.data.poetryType.split('|')
          this.poetryType.pop()// 分割类型 删除最后的空元素
          console.log(this.poetryType)
        })
        .catch(error => {
          console.log(error)
        })
    },
    dealWithPoem () {
      this.poetryType = this.poetryData.poetryType.split('|')
      this.poetryType.pop()// 分割类型 删除最后的空元素
      this.poetryBody = this.poetryData.poetryBody.split('。')
      this.poetryBody.pop()// 分割诗文 删除最后的空元素
      for (let i = 0; i < this.poetryBody.length; i++) {
        this.poetryBody.splice(i, 1, this.poetryBody[i] + '。')
        console.log('new' + this.poetryBody[i])
      }
      for (let i = 0; i < this.poetryBody.length; i++) {
        if (this.poetryBody[i].indexOf('！') !== -1) {
          let arr = this.poetryBody[i].split('！')
          this.poetryBody.splice(i, 1, arr[0] + '！', arr[1])
        }
      }
      for (let i = 0; i < this.poetryBody.length; i++) {
        if (this.poetryBody[i].indexOf('？') !== -1) {
          let arr = this.poetryBody[i].split('？')
          this.poetryBody.splice(i, 1, arr[0] + '？', arr[1])
        }
      }
      for (let i = 0; i < this.poetryBody.length; i++) {
        if (this.poetryBody[i].indexOf(';') !== -1) {
          let arr = this.poetryBody[i].split(';')
          this.poetryBody.splice(i, 1, arr[0] + ';', arr[1])
        }
        console.log('new' + this.poetryBody[i])
      }
    }
  }
}
</script>

<style lang="scss">
.classicPoem {
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
            .lineHeght {
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
