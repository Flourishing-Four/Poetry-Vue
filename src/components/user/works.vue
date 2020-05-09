<template>
  <div class="works">
      <el-card shadow="hover" v-for="(item, index) in content" :key="index">{{item.lable}}
        <el-button style="padding: 4px 10px" type="text" @click="showOwnWorks">{{index}}</el-button>
      </el-card>
      <viewWorks ref="viewWorks"></viewWorks>
  </div>
</template>

<script>
import ViewWorks from './viewWorks'
export default {
  components: {ViewWorks},
  data () {
    return {
      content: [
        {lable: '作品一'},
        {lable: '作品二'},
        {lable: '作品三'},
        {lable: '作品四'}
      ]
    }
  },
  mounted () {
    this.getOwnWorks()
  },
  methods: {
    showOwnWorks () {
      console.log('okay')
      this.$refs.viewWorks.showDialog()
    },
    getOwnWorks () {
      let url = 'api/article/userList/'
      url += this.$route.query.user
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios
          .get(url, {
            params: {
              username: this.$route.query.user,
              pagesize: 5
            }
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    }
  }
}
</script>

<style lang="scss">
.works {
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
}
</style>
