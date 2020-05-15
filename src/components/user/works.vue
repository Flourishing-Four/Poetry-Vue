<template>
  <div class="works">
      <!-- <el-card shadow="hover" v-for="(item, index) in content" :key="index">{{item.lable}}
        <el-button style="padding: 4px 10px" type="text" @click="showOwnWorks">{{index}}</el-button>
      </el-card> -->
      <el-card shadow="hover" v-for="(item, index) in ArticleData" :key="index">
          <div slot="header" class="clearfix">
              <el-link :underline="false" class="title">{{item.title}}</el-link>
              <span class="subTitle" style="dispaly: block; font-size: 14px;">{{'-' + item.idea}}</span>
          </div>
          <div class="text item" v-for="i in poetryBodyList[index].content" :key="i">
                {{i}}
              </div>
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
      ArticleData: [{}],
      poetryBodyList: []
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
      let url = 'article/userList/'
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
            this.ArticleData = response.data
            this.dealWithPoem()
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        console.log('用户wei登录')
        this.$message.error('请登录后再进行操作')
      }
    },
    dealWithPoem () {
      var vm = this
      let item = []
      let list = vm.ArticleData ? vm.ArticleData : ''
      for (let i in list) {
        let str = list[i].content.replace(/<[^>]+>/g, '') // 去掉htlm标签
        str = str.replace(/\s/g, '') // 去掉空格
        str = str.replace(/&nbsp;/ig, '') // 去掉nbsp
        str = str.replace(/\[.*?\]/g, '') // 去掉[]
        str = str.replace(/【[^】]+】/g, '') // 去掉【】
        item.push({content: str.split('。')})
      }
      vm.poetryBodyList = item
      for (let j in vm.poetryBodyList) {
        for (let i in vm.poetryBodyList[j].content) {
          // 使用。分割后数组最后是空元素；此时的处理会使以？！结尾的诗句也会被圧进句号
          if (vm.poetryBodyList[j].content[i] !== '') {
            vm.poetryBodyList[j].content.splice(i, 1, vm.poetryBodyList[j].content[i] + '。')
          }
          let symbol = ['！', '？', '；']
          for (let n in symbol) {
            if (vm.poetryBodyList[j].content[i].indexOf(symbol[n]) !== -1) {
              let str = vm.poetryBodyList[j].content[i].replace(/。/g, '') // 将多余的句号删除
              let arr = str.split(symbol[n])
              vm.poetryBodyList[j].content.splice(i, 1, arr[0] + symbol[n], arr[1])
            }
          }
        }
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
        background-color:rgba(188, 204, 194, 0.3);
    }
    // .el-card:nth-child(2n) {
    //     background-color: #acbed6;
    // }
    // .el-card:nth-child(2n+1) {
    //     background-color: #d3dce6;
    // }
    .title{
      font-family: 'STLITI';
      font-size: 28px;
    }
    .text{
      padding-left: 20px;;
      line-height: 30px;
    }
}
</style>
