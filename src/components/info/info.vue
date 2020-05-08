<template>
  <div class="info">
    <div class="info-frag">
      <el-carousel :interval="8000" height="550px">
        <el-carousel-item v-for="(item, index) in knowList" :key="index">
          <!-- <h3>{{ item }}</h3> -->
          <div class="info-frag__carousel">
            <span class="info-frag__carousel--title">{{item.knowledgeTitle}}</span>
            <el-divider content-position="right">诗词小知识</el-divider>
            <span class="info-frag__carousel--content" v-html="item.knowledgeContent">
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
      <el-card class="info-content__card" v-for="(item, index) in poetList" :key="index">
        <div class="avatar"></div>
        <div class="clearfix">
          <router-link :to="{name: 'InfoPoet', query:{poetList: item}}"><el-link :underline="false">{{item.authorName}}</el-link></router-link>
          <!-- <span class="poem">李白</span> -->
          <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection[index]" @click="mark(item.id, index, 0)"/>
          <el-button style="float: right; padding: 0; margin-left: 14px" type="text" :icon="iconLikes[index]" @click="mark(item.id, index, 1)"/>
          <!-- <div class="text item">
            {{item.authorDesc}}
          </div> -->
          <div class="text item" v-html="item.authorDesc">
          </div>
        </div>
      </el-card>
      <el-pagination background small @current-change="handleCurrentChange" :current-page="page" :page-size="5" layout="prev, pager, next" :total="30"/>
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
      page: 1,
      poetList: [],
      isDynasty: false,
      tDynasty: '',
      dynasty: [
        '所有朝代',
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
      knowList: []
    }
  },
  mounted () {
    this.getAuthor()
    this.getKnow()
  },
  methods: {
    changeDynasty (val) {
      console.log(val)
      this.isDynasty = true
      this.tDynasty = val
      this.getDynasty(val)
    },
    handleCurrentChange (val) {
      this.page = val
      this.getAuthor()
    },
    getAuthor () {
      this.$axios
        .get('author/authorList', {
          params: {
            page: this.page,
            pagesize: 5
          }
        })
        .then(response => {
          console.log(response)
          this.poetList = response.data
          this.dealWithPoem(this.poetList, 0)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDynasty (val) {
      let url = 'author/dynastyList/'
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
          this.poetList = response.data
          this.dealWithPoem(this.poetList, 0)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getKnow () {
      this.$axios
        .get('knowledge/knowledgeList', {
          params: {
            page: 1,
            pagesize: 3
          }
        })
        .then(response => {
          console.log(response)
          this.knowList = response.data
          this.dealWithPoem(this.knowList, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    mark (authorId, index, num) {
      let vm = this
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        if (num === 0) {
          vm.markCollection.splice(index, 1, !vm.markCollection[index]) // 每点击一次就取反
          this.$axios
            .post('poetryuserown/book', {
              poetryId: 1,
              isDo: vm.markCollection[index]
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
            .post('poetryuserown/praise', {
              poetryId: 1,
              isPraise: vm.markLikes[index]
            })
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
    dealWithPoem (val, index) {
      let list = val
      for (let i in list) {
        let strOld = index === 0 ? list[i].authorDesc : list[i].knowledgeContent
        // console.log(str)
        let str = strOld.replace(/<[^>]+>/g, '') // 去掉htlm标签
        str = str.replace(/\s/g, '') // 去掉空格
        str = str.replace(/&nbsp;/ig, '') // 去掉nbsp
        str = str.replace(/\[.*?\]/g, '') // 去掉[]
        str = str.replace(/【[^】]+】/g, '') // 去掉【】
        // item.push({poetryBody: str.split('。')})
        index === 0 ? list[i].authorDesc.repalce(/strOld/, str) : list[i].knowledgeContent.repalce(/strOld/, str)
      }
      /* val = list
      return val */
      console.log(list)
      if (!index) {
        this.poetList = list
      } else this.knowList = list
      /* for (let j in vm.poetryBodyList) {
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
      } */
    }
  }
}
</script>

<style lang="scss">
  .info {
    margin-top: 71px!important;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 1100px;
    margin: 0px auto;
    .el-divider {
      margin: 12px 0;
    }
    &-bar {
      padding: 0 20px;
      &__card {
        width: 660px;
        margin: 0 20px 40px 20px;
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
        .el-link {
          font-size: 20px;
          font-weight: 500;
          color: #68AAAD;
          margin-bottom: 10px;
        }
        .item {
          font-size: 16px;
          line-height: 30px;
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
        left: 320px;
      }
    }
    &-frag {
      position: fixed;
      right: 140px;
      width: 340px;
      // float: right;
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
    }
  }
</style>
