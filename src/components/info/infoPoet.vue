<template>
    <div class="infoPoet">
        <div class="infoPoet-bar">
            <el-card class="infoPoet-bar__card">
                <div slot="header" class="clearfix">
                    <span class="poet-name">{{poetList.authorName}}</span>
                    <span>{{'&nbsp;' + poetList.dynasty}}</span>
                </div>
                <div class="item lineHeight">
                    <span class="title">-&nbsp;诗人生平</span>
                    <div class="text" style="line-height: 28px;">
                    {{poetList.authorDesc}}
                </div>
                </div>
                <div class="item lineHeight">
                    <span class="title">-&nbsp;诗人轶事</span>
                    <div v-for="o in 4" :key="o" class="text" style="line-height: 28px;">
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
                            <span class="title">{{poetWorks[0].poetryTitle}}</span>
                            <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[0]" @click="mark(poetWorks[0].poetryId, 0, 0)"/>
                            <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[0]" @click="mark(poetWorks[0].poetryId, 0, 1)"/>
                        </div>
                        <div class="text item" v-for="(item, index) in poetWorks[0].poetryBody" :key="index">
                            <span>{{item}}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">{{poetWorks[1].poetryTitle}}</span>
                            <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[1]" @click="mark(poetWorks[1].poetryId, 0, 0)"/>
                            <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[1]" @click="mark(poetWorks[1].poetryId, 0, 1)"/>
                        </div>
                        <div class="text item" v-for="(item, index) in poetWorks[1].poetryBody" :key="index">
                            <span>{{item}}</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="layout">
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">{{poetWorks[2].poetryTitle}}</span>
                            <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[2]" @click="mark(poetWorks[2].poetryId, 0, 0)"/>
                            <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[2]" @click="mark(poetWorks[2].poetryId, 0, 1)"/>
                        </div>
                        <div class="text item" v-for="(item, index) in poetWorks[2].poetryBody" :key="index">
                            <span>{{item}}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span='12'>
                    <el-card class="infoPoet-content__card">
                        <div slot="header" class="clearfix">
                            <span class="title">{{poetWorks[3].poetryTitle}}</span>
                            <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[3]" @click="mark(poetWorks[3].poetryId, 0, 0)"/>
                            <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[3]" @click="mark(poetWorks[3].poetryId, 0, 1)"/>
                        </div>
                        <div class="text item" v-for="(item, index) in poetWorks[3].poetryBody" :key="index">
                            <span>{{item}}</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconCollection: [
        'iconfont iconcollection',
        'iconfont iconcollection',
        'iconfont iconcollection',
        'iconfont iconcollection',
        'iconfont iconcollection'
      ],
      markCollection: [
        false,
        false,
        false,
        false,
        false
      ], // 默认不收藏
      iconLikes: [
        'iconfont iconlikes',
        'iconfont iconlikes',
        'iconfont iconlikes',
        'iconfont iconlikes',
        'iconfont iconlikes'
      ],
      markLikes: [
        false,
        false,
        false,
        false,
        false
      ], // 默认不点赞
      poetList: this.$route.query.poetList,
      poetWorks: [{
        poetryTitle: ''
      }]
    }
  },
  created () {
    console.log(this.poetList)
    this.getWorks()
  },
  activated () {
    this.poetList = this.$route.query.poetList
    this.getWorks()
    console.log('excute')
    console.log('excute' + this.poetList.authorName)
  },
  methods: {
    getWorks () {
      this.$axios.get('author/authorPoetry', {
        params: {
          authorName: this.poetList.authorName
        }
      })
        .then(res => {
          console.log(res)
          this.poetList = res.data
          this.dealWith(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    dealWith (val) {
      // 处理诗文题目
      for (let i in val) {
        let str = val[i].poetryTitle.replace(/（[^）]+）/g, '')
        console.log(str)
        val[i].poetryTitle = str
        console.log('val' + val[i].poetryTitle)
      }
      // 处理诗文内容
      for (let m in val) {
        let str = val[m].poetryBody.replace(/<[^>]+>/g, '') // 去掉htlm标签
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
        val[m].poetryBody = list
      }
      this.poetWorks = val
    },
    mark (poetryId, index, num) {
      let vm = this
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        if (num === 0) {
          vm.markCollection.splice(index, 1, !vm.markCollection[index]) // 每点击一次就取反
          this.$axios
            .post('collectlike/book', {
              poetryId: poetryId,
              isDo: vm.markCollection[index],
              entityType: 2
            })
            .then(response => {
              console.log('正确' + response)
              if (vm.markCollection[index]) {
                vm.iconCollection.splice(index, 1, 'iconfont iconcollection-fill')
              } else vm.iconCollection.splice(index, 1, 'iconfont iconcollection') // 取消收藏
            })
            .catch(error => {
              console.log('错误' + error)
            })
        } else {
          vm.markLikes.splice(index, 1, !vm.markLikes[index]) // 每点击一次就取反
          this.$axios
            .post('collectlike/like', {
              poetryId: poetryId,
              isDo: vm.markLikes[index],
              entityType: 2
            })
            .then(response => {
              console.log('正确' + response.data.isDo)
              if (vm.markLikes[index]) {
                vm.iconLikes.splice(index, 1, 'iconfont iconlikes-fill')
              } else vm.iconLikes.splice(index, 1, 'iconfont iconlikes') // 取消点赞
            })
            .catch(error => {
              console.log('错误' + error)
            })
        }
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    }
  }
}
</script>

<style lang="scss">
.infoPoet {
    margin-top: 71px!important;
    padding-top: 20px;
    width: 900px;
    margin: 0px auto;
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
