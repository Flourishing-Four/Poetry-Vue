<template>
  <div class="activity">
    <el-carousel :interval="4000" type="card" height="280px">
        <!-- <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item> -->
        <el-carousel-item>
        <img src="../img/index/banner/banner1.png" class="bannerImg">
        </el-carousel-item>
        <el-carousel-item>
        <img src="../img/index/banner/banner2.png" class="bannerImg">
        </el-carousel-item>
        <el-carousel-item>
        <img src="../img/index/banner/banner3.png" class="bannerImg">
        </el-carousel-item>
    </el-carousel>
    <div class="activity-main">
        <el-card class="activity-main__bar">
          <span class="filter">筛选</span>
          <el-divider direction="vertical"/>
          <el-button type="text" v-for="(item, index) in type" :key="item.lable" :class="item.select" @click="selectBtu(index)">{{item.lable}}</el-button>
          <el-divider direction="vertical"/>
          <el-button type="text" v-for="(item, index) in date" :key="item.lable" :class="item.select" @click="selectBtu(index + 3)">{{item.lable}}</el-button>
        </el-card>
        <el-card class="activity-main__card" shadow="hover">
          <div class="activity-main__card--group">
            <span class="dateTitle">2020年5月12日</span>
            <el-card shadow="hover">
              <router-link :to="{name: 'ActivityMatch'}"><el-link :underline="false">【征稿启事】第四届“诗词中国”传统诗词创作大赛</el-link></router-link>
            </el-card>
            <el-card shadow="hover" v-for="(item, index) in ArticleData" :key="index">
              <div slot="header" class="clearfix">
                <el-link :underline="false" class="title">{{item.title}}</el-link>
                <span class="subTitle" style="dispaly: block; font-size: 14px;">{{'-' + item.idea}}</span>
              </div>
              <div class="text item" v-for="i in poetryBodyList[index].content" :key="i">
                {{i}}
              </div>
            </el-card>
            <!-- <el-card shadow="hover">
              <router-link :to="{name: 'ActivityWorks'}"><el-link :underline="false">作品</el-link></router-link>
            </el-card>
            <el-card shadow="hover">
              <router-link :to="{name: 'ActivityWorks'}"><el-link :underline="false">作品</el-link></router-link>
            </el-card> -->
          </div>
          <!-- <div class="activity-main__card--group">
            <span class="dateTitle">2020年5月7日</span>
            // 可删除
            <el-card shadow="hover" v-for="(item, index) in type" :key="index">{{item.lable}}
              <router-link :to="{name: 'ActivityWorks', query:{userWorks: i}}"><el-link :underline="false">{{i}}</el-link></router-link>
            </el-card>
            <el-card shadow="hover">
              <router-link :to="{name: 'ActivityMatch'}"><el-link :underline="false">【征稿启事】第四届“诗词中国”传统诗词创作大赛</el-link></router-link>
            </el-card>
            <el-card shadow="hover">
              <router-link :to="{name: 'ActivityWorks'}"><el-link :underline="false">作品</el-link></router-link>
            </el-card>
          </div> -->
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: [
        {lable: '不限', select: 'select'},
        {lable: '近一周', select: ''},
        {lable: '近一月', select: ''},
        {lable: '近三月', select: ''}
      ],
      type: [
        {lable: '全部', select: 'select'},
        {lable: '活动', select: ''},
        {lable: '作品展', select: ''}
      ],
      ArticleData: [{}],
      poetryBodyList: []
    }
  },
  mounted () {
    this.getArticle()
    console.log()
  },
  methods: {
    getArticle () {
      this.$axios
        .get('article/articleList')
        .then(response => {
          console.log(response)
          this.ArticleData = response.data
          this.dealWithPoem()
        })
        .catch(error => {
          console.log(error)
        })
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
.activity {
  margin-top: 71px;
  .el-carousel {
    .bannerImg {
      width: 100%;
      height: inherit;
      background-size: 100%;
      /*max-height: 490px;*/
    }
    // .el-carousel__item h3 {
    //   color: #475669;
    //   font-size: 14px;
    //   opacity: 0.75;
    //   line-height: 100px;
    //   margin: 0;
    // }
    // .el-carousel__item:nth-child(2n) {
    //   background-color: #99a9bf;
    // }
    // .el-carousel__item:nth-child(2n+1) {
    //   background-color: #d3dce6;
    // }
  }
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
      &--group {
        padding: 40px;
        .dateTitle {
          // margin-top: 40px;
          font-size: 18px;
          color: #68AAAD;
        }
        .el-card{
          margin: 30px;// 这里上下、左右的间距都会塌陷
          font-size: 16px;
          line-height: 26px;
          background-color: rgba(104, 169, 173, 0.027);
        }
        .el-link{
          font-size: 22px;
          font-family: 'STLITI';
        }
        .el-link:hover{
          color: rgb(140, 16, 56);
        }
        /* .el-card:nth-child(2n) {
          background-color: #a4b4ca;
        }
        .el-card:nth-child(2n+1) {
          background-color: #c0cddb;
        } */
      }
    }
  }
}
</style>
