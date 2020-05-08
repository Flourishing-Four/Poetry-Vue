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
                            <span class="title">{{poetryData.poetryTitle.replace(/[\(（][^\(（]+[\)）]/g, '')}}</span>
                            <span class="subTitle">{{poetryData.dynasty + '·' + poetryData.authorName}}</span>
                            <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection" @click="mark(poetryData.poetryId, 0)"/>
                            <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes" @click="mark(poetryData.poetryId, 1)"/>
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
      iconCollection: 'iconfont iconcollection',
      markCollection: false, // 默认不收藏
      iconLikes: 'iconfont iconlikes',
      markLikes: false, // 默认不点赞
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
    mark (poetryId, num) {
      let vm = this
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        if (num === 0) {
          vm.markCollection = !vm.markCollection// 每点击一次就取反
          this.$axios
            .post('poetryuserown/book', {
              poetryId: poetryId,
              isDo: vm.markCollection
            })
            .then(response => {
              console.log('正确' + response)
              if (vm.markCollection) {
                vm.iconCollection = 'iconfont iconcollection-fill'
              } else vm.iconCollection = 'iconfont iconcollection' // 取消收藏
            })
            .catch(error => {
              console.log('错误' + error)
            })
        } else {
          vm.markLikes = !vm.markLikes // 每点击一次就取反
          this.$axios
            .post('poetryuserown/praise', {
              poetryId: poetryId,
              isPraise: vm.markLikes
            })
            .then(response => {
              console.log('正确' + response)
              if (vm.markLikes) {
                vm.iconLikes = 'iconfont iconlikes-fill'
              } else vm.iconLikes = 'iconfont iconlikes' // 取消点赞
            })
            .catch(error => {
              console.log('错误' + error)
            })
        }
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    dealWithPoem () {
      this.poetryType = this.poetryData.poetryType.split('|')
      this.poetryType.pop()// 分割类型 删除最后的空元素
      let str = this.poetryData.poetryBody.replace(/<[^>]+>/g, '') // 去掉htlm标签
      str = str.replace(/\s/g, '') // 去掉空格
      str = str.replace(/&nbsp;/ig, '') // 去掉nbsp
      str = str.replace(/\[.*?\]/g, '') // 去掉[]
      str = str.replace(/【[^】]+】/g, '') // 去掉【】
      let list = str.split('。')
      console.log('0' + list)
      for (let i in list) {
        if (list[i] !== '') {
          list.splice(i, 1, list[i] + '。')
        }
        let symbol = ['！', '？', '；']
        for (let n in symbol) {
          if (list[i].indexOf(symbol[n]) !== -1) {
            let str = list[i].replace(/。/g, '') // 将多余的句号删除
            let arr = str.split(symbol[n])
            list.splice(i, 1, arr[0] + symbol[n], arr[1])
          }
        }
      }
      this.poetryBody = list
    }
  }
}
</script>

<style lang="scss">
.classicPoem {
  margin-top: 71px!important;
  padding-top: 20px;
  width: 900px;
  margin: 0px auto;
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
