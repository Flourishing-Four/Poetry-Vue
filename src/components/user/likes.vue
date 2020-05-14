<template>
  <div class="likes">
    <div class="likes-content">
      <span class="title">诗人</span>
      <el-card shadow="hover" v-for="(item, index) in poetLikes" :key="index"></el-card>
      <el-pagination background small @current-change="handleCurrentChangeOne" :current-page="pageOne" :page-size="5" layout="prev, pager, next" :total="30"/>
    </div>
    <div class="likes-content">
      <span class="title">诗词</span>
      <el-card shadow="hover" v-for="(item, index) in poemLikes" :key="index">{{poemLikes.title}}</el-card>
      <el-pagination background small @current-change="handleCurrentChangeTwo" :current-page="pageTwo" :page-size="5" layout="prev, pager, next" :total="30"/>
    </div>
    <div class="likes-content">
      <span class="title">文章</span>
      <el-card shadow="hover" v-for="(item, index) in articleLikes" :key="index"></el-card>
      <el-pagination background small @current-change="handleCurrentChangeThree" :current-page="pageThree" :page-size="5" layout="prev, pager, next" :total="30"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      poetLikes: [{
      }],
      poemLikes: [{
      }],
      articleLikes: [{
      }],
      pageOne: 1,
      pageTwo: 1,
      pageThree: 1
      // content: [
      //   {lable: '点赞一'},
      //   {lable: '点赞二'},
      //   {lable: '点赞三'}
      // ]
    }
  },
  mounted () {
    this.getPoetLikes()
    this.getPoemLikes()
    this.getArticleLikes()
  },
  methods: {
    getPoetLikes () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get('user/bookAuthor', {
            params: {
              page: this.pageOne,
              pagesize: 5
            }
          })
          .then(response => {
            console.log(response)
            this.poemLikes = response.data
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    getPoemLikes () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get('user/bookPoetry', {
            params: {
              page: this.pageTwo,
              pagesize: 5
            }
          })
          .then(response => {
            console.log(response)
            this.poetLikes = response.data
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    getArticleLikes () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get('user/bookArticle', {
            params: {
              page: this.pageThree,
              pagesize: 5
            }
          })
          .then(response => {
            console.log(response)
            this.articleLikes = response.data
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    handleCurrentChangeOne (val) {
      this.pageOne = val
      this.getPoemLikes()
      this.getPoetLikes()
      this.getArticleLikes()
    },
    handleCurrentChangeTwo (val) {
      this.pageTwo = val
      this.getPoemLikes()
      this.getPoetLikes()
      this.getArticleLikes()
    },
    handleCurrentChangeThree (val) {
      this.pageThree = val
      this.getPoemLikes()
      this.getPoetLikes()
      this.getArticleLikes()
    }
  }
}
</script>

<style lang="scss">
.likes {
    padding: 40px;
    .el-card{
        margin: 30px;// 这里上下、左右的间距都会塌陷
        padding: 30px;
    }
    .el-card:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-card:nth-child(2n+1) {
        background-color: #d3dce6;
    }
  &-content{
    margin: 0 0 15px 0;
    .title{
      font-size: 24px;
      font-family: 'STLITI';
    }
    .el-pagination {
          width: 200px;
          position: relative;
          left: 38%;
      }
  }
}
</style>
