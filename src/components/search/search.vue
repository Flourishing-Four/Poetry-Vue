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
          <div class="search-main__card--group" v-for="(item, index) in type" :key="index">
            <span class="dateTitle">{{item.lable}}</span>
            <el-card shadow="hover" v-for="(item, index) in content" :key="index">{{item.lable}}</el-card>
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
      type: [
        {lable: '典/诗词经典'},
        {lable: '闻/诗词知识与诗人轶事'},
        {lable: '品/诗词品鉴'}
      ],
      content: [
        {lable: '全部', select: 'select'},
        {lable: '活动', select: ''},
        {lable: '作品展', select: ''}
      ],
      historyList: [],
      search_val: this.$route.query.search// 这里并不会动态赋值
    }
  },
  mounted () {
    /* if (JSON.parse(localStorage.getItem('historyList'))) {
      this.historyList = JSON.parse(localStorage.getItem('historyList'))
    } */
    this.historyList.push({'lable': this.$route.query.search, 'select': 'select'})
    eventBus.$on('add', (message) => {
      this.search_val = message
      console.log('搜索触发' + this.search_val)
      this.get_search()
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
    }
  }
}
</script>

<style lang="scss">
.search {
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
        .el-card{
          margin: 30px;// 这里上下、左右的间距都会塌陷
        }
        .el-card:nth-child(2n) {
          background-color: #99a9bf;
        }
        .el-card:nth-child(2n+1) {
          background-color: #d3dce6;
        }
      }
    }
  }
}
</style>
