<template>
  <div class="activity">
    <el-carousel :interval="4000" type="card" height="280px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
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
          <div class="activity-main__card--group" v-for="i in 2" :key="i">
            <span class="dateTitle">这是日期标题</span>
            <el-card shadow="hover" v-for="(item, index) in type" :key="index">{{item.lable}}
              <router-link :to="{name: 'ActivityWorks', query:{userWorks: i}}"><el-link :underline="false">{{i}}</el-link></router-link>
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
      date: [
        {lable: '不限', select: 'select'},
        {lable: '近一周', select: ''},
        {lable: '近一月', select: ''},
        {lable: '近三月', select: ''},
        {lable: '近六月', select: ''}
      ],
      type: [
        {lable: '全部', select: 'select'},
        {lable: '活动', select: ''},
        {lable: '作品展', select: ''}
      ]
    }
  },
  mounted () {

  },
  methods: {
    // 此处传值方式需要完善，两组按钮分别单选
    selectBtu (index) {
      if (index < 3) {
        for (var i = 0; i < this.type.length; i++) {
          this.type[i].select = ''
        }
        this.type[index].select = 'select'
      } else {
        for (var j = 0; j < this.date.length; j++) {
          this.date[j].select = ''
        }
        this.date[index - 3].select = 'select'
      }
      console.log(index)
    }
  }
}
</script>

<style lang="scss">
.activity {
  .el-carousel {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 100px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
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
        }
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
