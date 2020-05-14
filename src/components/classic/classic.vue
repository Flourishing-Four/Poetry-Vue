<template>
    <div class="classic">
        <div class="classic-tag">
            <div class="classic-tag__box">
                <span class="classic-tag__box--title">朝代</span>
                <div class="classic-tag__box--btu">
                    <el-button type="primary" size="mini" style="width:68px" @click="getDynasty(item)" v-for="item in dynastyList" :key="item">{{item}}</el-button>
                </div>
            </div>
            <div class="classic-tag__box">
                <span class="classic-tag__box--title another">诗人</span>
                <div class="classic-tag__box--btu">
                    <el-button type="warning" size="mini" style="width:68px" @click="getPoem(item)" v-for="item in poemList" :key="item">{{item}}</el-button>
                    <!-- <el-button type="warning" size="mini" style="width:68px">李白</el-button>
                    <el-button type="warning" size="mini" style="width:68px">陆游</el-button>
                    <el-button type="warning" size="mini" style="width:68px">李清照</el-button>
                    <el-button type="warning" size="mini" style="width:68px">杜甫</el-button>
                    <el-button type="warning" size="mini" style="width:68px">王维</el-button>
                    <el-button type="warning" size="mini" style="width:68px">辛弃疾</el-button>
                    <el-button type="warning" size="mini" style="width:68px">白居易</el-button>
                    <el-button type="warning" size="mini" style="width:68px">李商隐</el-button>
                    <el-button type="warning" size="mini" style="width:68px">王安石</el-button>
                    <el-button type="warning" size="mini" style="width:68px">柳永</el-button>
                    <el-button type="warning" size="mini" style="width:68px">岑参</el-button> -->
                </div>
            </div>
            <div class="classic-tag__box">
                <span class="classic-tag__box--title">类别</span>
                <div class="classic-tag__box--btu">
                    <el-button type="primary" size="mini" style="width:68px" @click="getType(item)" v-for="item in typeList" :key="item">{{item}}</el-button>
                </div>
            </div>
        </div>
        <div class="classic-content">
            <el-card class="classic-content__card" v-for="(item, index) in poetryData" :key="index">
                <div slot="header" class="clearfix">
                    <router-link :to="{name: 'ClassicPoem', query:{poetryData: item}}"><el-link :underline="false" class="title">{{item.poetryTitle.replace(/[\(（][^\(（]+[\)）]/g, '')}}</el-link></router-link>
                    <span class="subTitle">{{item.dynasty + '·' + item.authorName}}</span>
                    <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[index]" @click="mark(item.poetryId, index, 0)"/>
                    <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[index]" @click="mark(item.poetryId, index, 1)"/>
                    <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconShang[index]" @click="changeTab(index, 0)"/>
                    <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconZhu[index]" @click="changeTab(index, 1)"/>
                </div>
                <div class="text item" v-for="i in poetryBodyList[index].poetryBody" :key="i" v-show="!showAppri[index] && !showExplan[index]">
                     {{i}}
                </div>
                <div class="text item" v-show="showExplan[index]">{{item.translation}}</div>
                <div class="text item" v-show="showAppri[index]">{{item.appreciation}}</div>
            </el-card>
            <el-pagination background small @current-change="handleCurrentChange" :current-page="page" :page-size="5" layout="prev, pager, next" :total="30"/>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconZhu: [
        'iconfont iconzhushi',
        'iconfont iconzhushi',
        'iconfont iconzhushi',
        'iconfont iconzhushi',
        'iconfont iconzhushi'
      ],
      showExplan: [
        false,
        false,
        false,
        false,
        false
      ],
      iconShang: [
        'iconfont iconshang',
        'iconfont iconshang',
        'iconfont iconshang',
        'iconfont iconshang',
        'iconfont iconshang'
      ],
      showAppri: [
        false,
        false,
        false,
        false,
        false
      ],
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
      page: 1,
      dynastyList: [
        '先秦',
        '汉朝',
        '魏晋',
        '南北朝',
        '隋朝',
        '唐朝',
        '宋朝',
        '元朝',
        '明朝',
        '清朝',
        '近代',
        '当代'
      ],
      typeList: [
        '写景',
        '写水',
        '写雪',
        '写花',
        '离别',
        '送别',
        '友情',
        '爱情',
        '边塞',
        '田园',
        '抒情',
        '闺怨'
      ],
      poemList: [
        '李白',
        '王维',
        '李清照',
        '辛弃疾',
        '陆游',
        '苏轼',
        '李商隐',
        '杜甫'
      ],
      poetryData: [{
      }],
      poetryBodyList: [{
        poetryBody: [] // 用。！？；分割得到的诗文数组
      }]
    }
  },
  mounted () {
    this.getPoetry()
  },
  methods: {
    // 可删除 保留参考
    bringPoetry (val) {
      // let vm = this
      let list = {
        poetryTitle: val.poetryTitle,
        dynasty: val.dynasty,
        authorName: val.authorName,
        translation: val.translation,
        poetryId: val.poetryId,
        appreciation: val.appreciation,
        pid: val.pid,
        id: val.id,
        appricate: val.appricate,
        poetryBody: val.poetryBody,
        poetryType: val.poetryType
      }
      /* list.poetryTitle = val.poetryTitle
      list.dynasty = val.dynasty
      list.authorName = val.authorName
      list.translation = val.translation
      list.poetryId = val.poetryId
      list.appreciation = val.appreciation
      list.pid = val.pid
      list.id = val.id
      list.appricate = val.appricate
      list.poetryBody = val.poetryBody
      list.poetryType = val.poetryType */
      console.log('val' + list.poetryTitle)
      console.log('ohno' + list)
      this.$store.dispatch('setOnePoetry', list)
      console.log('ohyeah' + this.$store.getters.onePoetry)
    },
    changeTab (index, num) {
      if (num === 0) {
        this.showAppri.splice(index, 1, !this.showAppri[index])
        if (this.showAppri[index]) {
          this.iconShang.splice(index, 1, 'iconfont iconshang-fill')
        } else this.iconShang.splice(index, 1, 'iconfont iconshang')
      } else {
        this.showExplan.splice(index, 1, !this.showExplan[index])
        if (this.showExplan[index]) {
          this.iconZhu.splice(index, 1, 'iconfont iconzhushi-fill')
        } else this.iconZhu.splice(index, 1, 'iconfont iconzhushi')
      }
    },
    /* mark (index, num) {
      let vm = this
      vm.$nextTick(() => {
        console.log(vm.iconCollection + index)
        if (num === 0) {
          vm.markCollection.splice(index, 1, !vm.markCollection[index])
          // vm.markCollection[index] = !vm.markCollection[index] // 每点击一次就取反
          if (vm.markCollection[index]) {
            vm.iconCollection.splice(index, 1, 'iconfont iconcollection-fill')
            // vm.iconCollection[index] = 'iconfont iconcollection-fill'
          } else vm.iconCollection.splice(index, 1, 'iconfont iconcollection')
          console.log(vm.markCollection + index)
        } else {
          vm.markLikes[index] = !vm.markLikes[index] // 每点击一次就取反
          if (vm.markLikes[index]) {
            vm.iconLikes[index] = 'iconfont iconlikes-fill'
          } else vm.iconLikes[index] = 'iconfont iconlikes'
        }
        console.log(vm.markCollection[index])
      })
    }, */
    mark (poetryId, index, num) {
      let vm = this
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        if (num === 0) {
          vm.markCollection.splice(index, 1, !vm.markCollection[index]) // 每点击一次就取反
          let url = 'poetryuserown/book/' + poetryId + '/' + vm.markCollection[index]
          this.$axios
            .post(url)
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
          let url = 'poetryuserown/praise/' + poetryId + '/' + vm.markLikes[index]
          this.$axios
            .post(url)
            .then(response => {
              console.log('正确' + response)
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
    },
    handleCurrentChange (val) {
      this.page = val
      this.getPoetry()
    },
    getPoetry () {
      this.$axios
        .get('poetry/poetryList', {
          params: {
            page: this.page,
            pagesize: 5
          }
        })
        .then(response => {
          console.log(response)
          this.poetryData = response.data
          this.dealWithPoem()// 用。！？；分割诗文数组
        })
        .catch(error => {
          console.log(error)
        })
    },
    dealWithPoem () {
      var vm = this
      let item = []
      let list = vm.poetryData ? vm.poetryData : ''
      for (let i in list) {
        let str = list[i].poetryBody.replace(/<[^>]+>/g, '') // 去掉htlm标签
        str = str.replace(/\s/g, '') // 去掉空格
        str = str.replace(/&nbsp;/ig, '') // 去掉nbsp
        str = str.replace(/\[.*?\]/g, '') // 去掉[]
        str = str.replace(/【[^】]+】/g, '') // 去掉【】
        item.push({poetryBody: str.split('。')})
        /* let strr = list[i].poetryTitle.replace(/[\(（][^\(（]+[\)）]/g, '')
        vm.poetryData[i].poetryTitle.replace(list[i].poetryTitle, strr) */
      }
      vm.poetryBodyList = item
      for (let j in vm.poetryBodyList) {
        for (let i in vm.poetryBodyList[j].poetryBody) {
          // 使用。分割后数组最后是空元素；此时的处理会使以？！结尾的诗句也会被圧进句号
          if (vm.poetryBodyList[j].poetryBody[i] !== '') {
            vm.poetryBodyList[j].poetryBody.splice(i, 1, vm.poetryBodyList[j].poetryBody[i] + '。')
          }
          let symbol = ['！', '？', '；']
          for (let n in symbol) {
            if (vm.poetryBodyList[j].poetryBody[i].indexOf(symbol[n]) !== -1) {
              let str = vm.poetryBodyList[j].poetryBody[i].replace(/。/g, '') // 将多余的句号删除
              let arr = str.split(symbol[n])
              vm.poetryBodyList[j].poetryBody.splice(i, 1, arr[0] + symbol[n], arr[1])
            }
          }
        }
        /* for (let i in vm.poetryBodyList[j].poetryBody) {
          if (vm.poetryBodyList[j].poetryBody[i].indexOf('！') !== -1) {
            let str = vm.poetryBodyList[j].poetryBody[i].replace(/。/g, '')
            let arr = str.split('！')
            vm.poetryBodyList[j].poetryBody.splice(i, 1, arr[0] + '！', arr[1])
          }
        }
        for (let i in vm.poetryBodyList[j].poetryBody) {
          if (vm.poetryBodyList[j].poetryBody[i].indexOf('？') !== -1) {
            let str = vm.poetryBodyList[j].poetryBody[i].replace(/。/g, '')
            let arr = str.split('？')
            vm.poetryBodyList[j].poetryBody.splice(i, 1, arr[0] + '？', arr[1])
          }
        }
        for (let i in vm.poetryBodyList[j].poetryBody) {
          if (vm.poetryBodyList[j].poetryBody[i].indexOf('；') !== -1) {
            let arr = vm.poetryBodyList[j].poetryBody[i].split('；')
            vm.poetryBodyList[j].poetryBody.splice(i, 1, arr[0] + '；', arr[1])
          }
        } */
      }
    },
    getDynasty (val) {
      if (val === undefined) {
        // console.log('this.getPoetry()')
        this.getPoetry()
      } else {
        let url = 'poetry/dynastyList/'
        url += val
        this.$axios
          .get(url, {
            params: {
              page: this.page,
              pagesize: 5
            }
          })
          .then(response => {
            console.log(response)
            this.poetryData = response.data
            this.dealWithPoem()// 用。！？；分割诗文数组
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getPoem (val) {
      let url = 'poetry/authorList/'
      url += val
      this.$axios
        .get(url, {
          params: {
            page: this.page,
            pagesize: 5
          }
        })
        .then(response => {
          console.log(response)
          this.poetryData = response.data
          this.dealWithPoem()// 用。！？；分割诗文数组
        })
        .catch(error => {
          console.log(error)
        })
    },
    getType (val) {
      let url = 'poetry/typeList/'
      url += val
      this.$axios
        .get(url, {
          params: {
            page: this.page,
            pagesize: 5
          }
        })
        .then(response => {
          console.log(response)
          this.poetryData = response.data
          this.dealWithPoem()// 用。！？；分割诗文数组
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  watch: {
    '$route': {
      handler (route) {
        const that = this
        if (route.query.dynasty !== undefined) {
          // console.log('here' + route.query.dynasty + '0' + route)
          that.getDynasty(route.query.dynasty)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.classic {
  margin-top: 71px!important;
  padding-top: 20px;
  padding-bottom: 40px;
  .btuStyle {
      margin-top: 4px;
      margin-left: 18px;
      width: 22px;
      height: 22px;
      border: 1.5px solid #68AAAD;
      color: #68AAAD;
  }
  width: 1000px;
  margin: 0px auto;
  &-content {
      padding: 0 20px;
      &__card {
          width: 550px;
          margin: 0 20px 40px 20px;
          .el-link {
              font-size: 22px;
              font-weight: 500;
          }
          .subTitle {
              font-size: 12px;
              color: rgb(165, 165, 165);
              position: relative;
              top: 5px;
              right: -10px;
          }
          .text {
            font-size: 16px;
            line-height: 1.5;
          }
          .item {
            margin-bottom: 14px;
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
          left: 320px;
      }
  }
  &-tag {
    position: fixed;
    // right: 150px;
    left: 58%;
    width: 320px;
    // float: right;
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
