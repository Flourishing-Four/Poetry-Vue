<template>
  <div class="homePage">
    <el-carousel class="homePage-banner" :interval="4000" height="550px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    <div class="homePage-main">
      <div class="homePage-main__singlePoemBorder">
        <span class="border top"/>
        <span class="borderLong"/>
        <div class="placeholder"></div>
        <span class="border bottom"/>
      </div>
      <div class="homePage-main__singlePoem layout">
        <div class="homePage-main__singlePoem--singleHead">
          <span class="poemTitle">塞上曲</span>
          <span class="subTitle">经典诗词推荐</span>
        </div>
        <div class="homePage-main__singlePoem--singleContent">
          <div class="Left"></div>
          <div class="Right"></div>
        </div>
        <div class="homePage-main__singlePoem--singleBottom">
          <el-button circle>阅</el-button>
          <el-button circle style="margin: 0 200px;">释</el-button>
          <el-button circle>品</el-button>
        </div>
      </div>
      <div class="homePage-main__sortPoem layout">
        <div class="homePage-main__sortPoem--sortBox" v-for='i in 5' :key='i'></div>
      </div>
      <div class="homePage-main__storyPoem layout">
        <div class="homePage-main__storyPoem--storyLeft"></div>
        <div class="homePage-main__storyPoem--storyRight">
          <span class="more">查 看 更 多</span>
        </div>
      </div>
      <div class="homePage-main__gamePoem layout">
        <div class="homePage-main__gamePoem--gameLeft"></div>
        <div class="homePage-main__gamePoem--gameRight">
          <div class="each" v-for='i in 3' :key='i'></div>
        </div>
      </div>
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
.homePage {
  background-color: #fff;
  &-banner {
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
  // 首页主体样式布局，在四个盒子里分别写
  &-main {
  height: 2800px;// 相对定位影响，写定
   &__singlePoemBorder {
     height: 420px;
     margin: 140px 120px;
     margin-top: 200px;// 为标题留空间
     // need to delete background-color: rgb(182, 182, 182);
     .border {
       width: 200px;
       border: 4px solid #3B4753;
     }
     .top {
       border-right: none;
     }
     .bottom {
       border-left: none;
     }
     .borderLong {
       width: 600px;
       border-top: 4px solid #3B4753;
     }
     display: flex;
     .placeholder {
       width: 90%;
       height: 90%;
       // need to delete background-color: #8aa6cc;
     }
   }
   // 底下的整体往上挪
   .layout {
     position: relative;
     top: -700px;
   }
   &__singlePoem {
     margin: 140px 120px;
     padding: 40px;
     &--singleHead {
       margin-bottom: 50px;
       span {
         display: block;
         margin: 10px 0;
       }
       .poemTitle {
         font-size: 36px;
         font-weight: 500;
       }
     }
     &--singleContent {
       height: 340px;
       display: flex;
       .Left {
        width: 560px;
        margin-right: 60px;
        background-color: rgb(204, 224, 212);// need to delete
       }
       .Right {
        width: 480px;
        background-color: rgb(204, 224, 212);// need to delete
       }
     }
     &--singleBottom {
       margin-top: 50px;
       display: flex;
       justify-content: center;
       .el-button {
         // margin: 0 140px;
         font-size: 34px;
         font-weight: bold;
         color: #68AAAD;
         border: 4px solid #68AAAD;
       }
     }
   }
   &__sortPoem {
     height: 500px;
     margin: 140px 0;
     padding: 40px 120px;
     background-color: rgb(204, 224, 212);
     display: flex;
     &--sortBox {
       width: 200px;
       margin: 0 20px;
       background-color: aliceblue;
     }
   }
   &__storyPoem {
     height: 380px;
     margin: 140px 120px;
     // need to delete background-color: rgb(187, 200, 216);
     display: flex;
     &--storyLeft {
       width: 620px;
       margin-right: 70px;
       background-color: rgb(204, 224, 212);// need to delete
     }
     &--storyRight {
       width: 420px;
       height: 280px;
       background-color: rgb(204, 224, 212);// need to delete
       .more {
         font-size: 20px;
         position: relative;
         top: 320px;
         left: 140px
       }
     }
   }
   &__gamePoem {
     height: 600px;
     margin: 140px 0;
     padding: 100px 240px;
     background-color: rgb(243, 243, 243);
     display: flex;
     &--gameLeft {
       width: 580px;
       background-color: rgb(204, 224, 212);// need to delete
     }
     &--gameRight {
       width: 300px;
       .each {
         height: 198px;
         margin-bottom: 3px;
         background-color: rgb(120, 146, 131);// need to delete
       }
     }
   }
  }
}
</style>
