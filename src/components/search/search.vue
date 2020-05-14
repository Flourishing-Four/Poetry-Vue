<template>
  <div class="search" ref="child">
    <div class="search-main">
        <el-card class="search-main__bar">
          <span class="filter">最近搜索</span>
          <el-divider direction="vertical"/>
          <span class="searchStr" v-if="historyList !== null">
              <el-button type="text" v-for="(item, index) in historyList" :key="index" :class="item.select" @click="selectBtu(index)">{{item.lable}}</el-button>
          </span>
        </el-card>
        <el-card class="search-main__card" shadow="hover">
          <div class="search-main__card--group">
            <span class="dateTitle">典/诗词经典</span>
            <el-card shadow="hover" v-for="(item, index) in poetryCont" :key="index">
              <div slot="header" class="clearfix">
                <router-link :to="{name: 'ClassicPoem', query:{poetryData: item}}"><el-link :underline="false" class="title">{{item.poetryTitle.replace(/[\(（][^\(（]+[\)）]/g, '')}}</el-link></router-link>
                <span class="subTitle">{{item.dynasty + '·' + item.authorName}}</span>
              </div>
              <div class="text item" v-for="i in poetryBodyList[index].poetryBody" :key="i">
                {{i}}
              </div>
            </el-card>
          </div>
          <div class="search-main__card--group">
            <span class="dateTitle">闻/诗词知识与诗人轶事</span>
            <el-card shadow="hover" v-for="(item, index) in authorCont" :key="index">
              <div slot="header" class="clearfix">
                <router-link :to="{name: 'InfoPoet', query:{poetList: item}}"><el-link :underline="false">{{item.authorName}}</el-link></router-link>
              </div>
              <div class="text item" v-html="item.authorDesc"></div>
            </el-card>
          </div>
          <div class="search-main__card--group">
            <span class="dateTitle">品/诗词品鉴</span>
            <el-card shadow="hover" v-for="(item, index) in appreCont" :key="index">
              <div slot="header" class="clearfix">
                <router-link :to="{name: 'InfoPoet', query:{poetList: item}}"><el-link :underline="false">{{item.title}}</el-link></router-link>
              </div>
              <div class="text item" v-html="item.appreciate"></div>
            </el-card>
          </div>
        </el-card>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus.js'// vue的空白实例（兄弟间的桥梁）
export default {
  data () {
    return {
      date: [
        {lable: '不限', select: 'select'},
        {lable: '近一周', select: ''},
        {lable: '近一月', select: ''},
        {lable: '近三月', select: ''},
        {lable: '近六月', select: ''},
        {lable: '近一周', select: ''},
        {lable: '近一月', select: ''}
      ],
      content: [
        {lable: '全部', select: 'select'},
        {lable: '活动', select: ''},
        {lable: '作品展', select: ''}
      ],
      poetryCont: [],
      authorCont: [],
      appreCont: [],
      historyList: [],
      poetryBodyList: [{
        poetryBody: [] // 用。！？；分割得到的诗文数组
      }],
      search_val: this.$route.query.search// 这里并不会动态赋值
    }
  },
  mounted () {
    this.searchPoet()
    /* 通过eventBus监听兄弟组件的搜索事件 */
    this.historyList.push({'lable': this.$route.query.search, 'select': 'select'})
    eventBus.$on('add', (message) => {
      this.search_val = message
      console.log('搜索触发' + this.search_val)
      this.get_search()
      this.searchPoet()
      for (var i = 0; i < this.historyList.length; i++) {
        this.historyList[i].select = ''
      }
      this.historyList[0].select = 'select'// 使每一个最新的搜索记录被选中
    })
    console.log(this.search_val)
  },
  methods: {
    selectBtu (index) {
      for (var i = 0; i < this.historyList.length; i++) {
        this.historyList[i].select = ''
      }
      this.historyList[index].select = 'select'
    },
    /* 历史记录处理方法 */
    get_search () {
      if (!this.historyList.includes(this.search_val)) {
        this.historyList.unshift({'lable': this.search_val, 'select': ''})
        localStorage.setItem('historyList', JSON.stringify(this.historyList))
      } else {
        if (this.historyList.indexOf({'lable': this.search_val, 'select': ''}) !== -1) {
          this.historyList = this.historyList
        } else {
          this.historyList.unshift({'lable': this.search_val, 'select': ''})
          localStorage.setItem('historyList', JSON.stringify(this.historyList))
        }
      }
      if (this.historyList.length > 6) {
        this.historyList.pop()
      }// 仅保留6条记录
      console.log('数组' + this.historyList + '最新值' + this.search_val)
    },
    searchPoet () {
      // let url = 'poetry/search/' + this.search_val
      this.$axios.get('poetry/search/', {
        params: {
          keywords: this.search_val
        }
      })
        .then(res => {
          console.log(res)
          this.poetryCont = res.data
          this.poetryCont.splice(5, this.poetryCont.length - 5)
          console.log('shici' + this.poetryCont)
          this.dealWithPoem()
        })
        .catch(err => {
          console.log(err)
        })
      this.$axios.get('appreciate/search/', {
        params: {
          keywords: this.search_val
        }
      })
        .then(res => {
          console.log(res)
          this.appreCont = res.data
          this.appreCont.splice(5, this.appreCont.length - 5)
        })
        .catch(err => {
          console.log(err)
        })
      this.$axios.get('author/search/', {
        params: {
          keywords: this.search_val
        }
      })
        .then(res => {
          console.log(res)
          this.authorCont = res.data
          this.authorCont.splice(5, this.authorCont.length - 5)
        })
        .catch(err => {
          console.log(err)
        })
    },
    dealWithPoem () {
      var vm = this
      let item = []
      let list = vm.poetryCont ? vm.poetryCont : ''
      for (let i in list) {
        let str = list[i].poetryBody.replace(/<[^>]+>/g, '') // 去掉htlm标签
        str = str.replace(/\s/g, '') // 去掉空格
        str = str.replace(/&nbsp;/ig, '') // 去掉nbsp
        str = str.replace(/\[.*?\]/g, '') // 去掉[]
        str = str.replace(/【[^】]+】/g, '') // 去掉【】
        item.push({poetryBody: str.split('。')})
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
      }
    }
  }
}
</script>

<style lang="scss">
.search {
  margin-top: 71px;
  &-main {
    padding: 10px 160px;
    &__bar {
      .el-card__body {
        padding: 20px 60px;
      }
      .select {
        color: #DD2F24;// 按钮被选中的颜色
      }
      .filter {
        font-size: 20px;
        margin-right: 20px;
      }
      .searchStr {
          overflow: hidden;
      }
      .el-button {
        font-size: 16px;
        margin: 0 20px;
      }
      .el-divider {
        width: 3px;
        height: 2.2rem;
        margin: 0 24px;
      }
    }
    &__card {
      margin-top: 20px;
      padding: 40px;
      &--group {
        padding: 40px 80px;
        .dateTitle {
          font-size: 20px;
          color: #68AAAD;
        }
        .el-card{
          margin: 30px;// 这里上下、左右的间距都会塌陷
          .el-link {
              font-size: 20px;
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
        }
        /* .el-card:nth-child(2n) {
          background-color: #99a9bf;
        }
        .el-card:nth-child(2n+1) {
          background-color: #d3dce6;
        } */
      }
    }
  }
}
</style>
