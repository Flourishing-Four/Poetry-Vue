<template>
  <div class="search" ref="child">
    <div class="search-main">
        <el-card class="search-main__card" shadow="hover">
          <div class="search-main__card--group">
            <span class="dateTitle">{{type + '诗鉴赏举例深度赏析'}}</span>
            <el-card shadow="hover" v-for="(item, index) in appreCont" :key="index">
              <div slot="header" class="clearfix">
                {{item.title}}
              </div>
              <div class="text item" v-html="item.appreciate"></div>
            </el-card>
          </div>
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appreCont: {},
      type: this.$route.query.item// 这里并不会动态赋值
    }
  },
  activated () {
    this.type = this.$route.query.item
    this.getType(this.type)
  },
  methods: {
    getType (val) {
      let url = 'appreciate/poetryList/' + val
      this.$axios.get(url)
        .then(res => {
          console.log(res)
          this.appreCont = res.data
          // console.log(this.savorList.content.repalce(/\n/g, '<br/>'))
        })
        .catch(err => {
          console.log(err)
        })
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
