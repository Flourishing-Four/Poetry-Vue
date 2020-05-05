<template>
  <div class="homePage">
    <el-carousel class="homePage-banner" :interval="4000" height="460px">
      <el-carousel-item>
        <img src="../img/index/banner/banner1.png" class="bannerImg">
        </el-carousel-item>>
        <el-carousel-item>
        <img src="../img/index/banner/banner2.png" class="bannerImg">
        </el-carousel-item>>
        <el-carousel-item>
        <img src="../img/index/banner/banner3.png" class="bannerImg">
        </el-carousel-item>>
        <!-- <h3 class="medium">{{ item }}</h3> -->
    </el-carousel>
    <div class="homePage-main">
      <div class="homePage-main__singlePoemBorder">
        <span class="border top" />
        <span class="borderLong" />
        <div class="placeholder"></div>
        <span class="border bottom" />
      </div>
      <div class="homePage-main__singlePoem layout">
        <div class="homePage-main__singlePoem--singleHead">
          <span class="poemTitle">塞上曲</span>
          <span class="subTitle">/&nbsp;经典诗词推荐&nbsp;/</span>
        </div>
        <div class="homePage-main__singlePoem--singleContent">
          <div class="Left"></div>
          <div class="Right">
            <div id="yue" v-show="!showShi && !showPin">
              [唐]&nbsp;&nbsp;李白
              <div style="font-size:24px;font-family: 'STLITI';">
              大汉无中策，匈奴犯渭桥。
              <br />五原秋草绿，胡马一何骄。
              <br />命将征西极，横行阴山侧。
              <br />燕支落汉家，妇女无华色。
              <br />转战渡黄河，休兵乐事多。
              <br />萧条清万里，瀚海寂无波。
              </div>
            </div>
            <div id="shi" v-show="showShi">
              这是释！
            </div>
            <div id="pin" v-show="showPin">
              这是品！
            </div>
          </div>
        </div>
        <div class="homePage-main__singlePoem--singleBottom">
          <el-button circle @click="infoChange(0)">阅</el-button>
          <el-button circle @click="infoChange(1)" style="margin: 0 200px;">释</el-button>
          <el-button circle @click="infoChange(2)">品</el-button>
        </div>
      </div>
      <div class="homePage-main__sortPoem layout">
        <div class="homePage-main__sortPoem--sortBox" v-for="i in 5" :key="i"
        :style ="{ 'background-image': 'url(' + sort_images[i-1] + ')', 'background-size': '100%'}">
        </div>
      </div>
      <div class="homePage-main__storyPoem layout">
        <div class="homePage-main__storyPoem--storyLeft">
            <h1 class="splitLine">诗人生平轶事</h1>
            <div class="homePage-main__storyPoem--content">
              <h2>李白</h2>
            </div>
        </div>
        <div class="homePage-main__storyPoem--storyRight">
          <h1 class="splitLine">诗词小知识</h1>
          <div class="homePage-main__storyPoem--content">

          </div>
          <router-link to="/info"><span class="more">查 看 更 多</span></router-link>
        </div>
      </div>
      <div class="homePage-main__gamePoem layout">
        <div class="homePage-main__gamePoem--gameLeft">
          <h1>- 诗歌断句 -</h1>
          <p>【杜牧版】<br>清明时节雨纷纷，路上行人欲断魂。<br>借问酒家何处有？牧童遥指杏花村。</p>
          <p>【苏轼版】<br>清明时节雨，纷纷路上行人。<br>欲断魂，借问酒家何处？有牧童，遥指杏花村。</p>
          <p>【剧本版（佚名）】<br>清明时节，雨纷纷。<br>路上。<br>行人（欲断魂）：借问酒家何处有？<br>牧童（遥指）：杏花村。</p>
          <p>【于丹版】<br>清明时节雨，纷纷路上行。<br>人欲断魂借问酒。家何处？有牧童，遥指杏花村。</p>
          <p>【毛翰版】<br>清明时节雨，纷纷路上，行人欲断。<br>魂借问酒家，何处有牧童，遥指杏花村。</p>
        </div>
        <div class="homePage-main__gamePoem--gameRight">
          <div class="each">
            《旅思》<br>【元】徐再思<br>一去二三里，烟村四五家。<br>门前六七书，八九十枝花。
          </div>
          <div class="each">
            《一字诗》<br>【清】何佩玉<br>一花一柳一鱼矶，一抹斜阳一鸟飞。<br>一山一水一禅寺，一林黄叶一僧归。
          </div>
          <div class="each">
            《八至》<br>【唐】李治<br>至近至远东西，至深至浅清溪。<br>至高至明日月，至亲至疏夫妻。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showShi: false,
      showPin: false,
      // sortBox_images: [
      //   {id: 0, idView: require('../img/index/sortBox/1.png')},
      //   {id: 1, idView: require('../img/index/sortBox/2.png')},
      //   {id: 2, idView: require('../img/index/sortBox/3.png')},
      //   {id: 3, idView: require('../img/index/sortBox/4.png')},
      //   {id: 4, idView: require('../img/index/sortBox/5.png')}
      // ]
      sort_images: [
        require('../img/index/sortBox/1.png'),
        require('../img/index/sortBox/2.png'),
        require('../img/index/sortBox/3.png'),
        require('../img/index/sortBox/4.png'),
        require('../img/index/sortBox/5.png')
      ]
    }
  },
  methods: {
    infoChange (num) {
      if (num === 0) {
        this.showShi = false// false
        this.showPin = false// false
      } else if (num === 1) {
        this.showShi = !this.showShi// true
        this.showPin = false
      } else if (num === 2) {
        this.showShi = false
        this.showPin = !this.showPin// true
      }
    }
  }
}
</script>

<style lang="scss">
.homePage {
  background-color: #fff;
  &-banner {
    .bannerImg {
      width: 100%;
      height: inherit;
      background-size: 100%;
      // max-height: 490px;
    }
  }
  // 首页主体样式布局，在四个盒子里分别写
  &-main {
    height: 2800px; // 相对定位影响，写定
    &__singlePoemBorder {
      height: 420px;
      margin: 140px 120px;
      margin-top: 200px; // 为标题留空间
      .border {
        width: 200px;
        border: 4px solid #3b4753;
      }
      .top {
        border-right: none;
      }
      .bottom {
        border-left: none;
      }
      .borderLong {
        width: 600px;
        border-top: 4px solid #3b4753;
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
          background-image: url("../img/index/poem.png");
          background-size: 100%;
        }
        .Right {
          width: 480px;
          height: 340px;
          line-height:34px;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background-image: url("../img/index/poem-right.png");
          // background-size: 100%;
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
          color: #68aaad;
          border: 4px solid #68aaad;
        }
        .el-button:hover{
          font-size: 34px;
          font-weight: bold;
          color: #fff;
          background-color: #68aaad;
          // border: 4px solid #68aaad;
        }
        .el-button:active{
          font-size: 34px;
          font-weight: bold;
          color: #fff;
          background-color: #68aaad;
          // border: 4px solid #68aaad;
        }
      }
    }
    &__sortPoem {
      height: 450px;
      margin: 140px 0;
      padding: 40px 120px;
      background-color: rgba(204, 224, 212,0.8);
      // background-size: 100%!important;
      display: flex;
      &--sortBox {
        width: 200px;
        margin: 0 10px;
        // background-color: aliceblue;
      }
    }
    &__storyPoem {
      height: 380px;
      margin: 140px 120px;
      background-image: url("../img/index/storyPoem.png");
      background-size: 100%;
      // need to delete background-color: rgb(187, 200, 216);
      display: flex;
      .splitLine{
          font-family: 'STLITI';
          text-align: center;
          padding: 6px 0;
          line-height: 40px;
          border-bottom: 2px solid rgb(204, 224, 212);
        }
      &--content{
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &--storyLeft {
        width: 620px;
        margin-right: 70px;
        border-radius: 3%;
        background-color: rgba(204, 224, 212,0.3); // need to delete
      }
      &--storyRight {
        width: 420px;
        height: 280px;
        border-radius: 3%;
        background-color: rgba(204, 224, 212,0.3);  // need to delete
        .more {
          font-size: 20px;
          color: rgb(140, 16, 56);
          font-weight: bold;
          position: relative;
          top: 230px;
          left: 140px;
        }
      }
    }
    &__gamePoem {
      height: 480px;
      margin: 140px 0;
      padding: 80px 240px;
      text-align: center;
      background-image: url("../img/index/game-background.png");
      background-size: 100%;
      display: flex;
      &--gameLeft {
        width: 480px;
        margin-right: 3px;
        padding: 20px 30px 40px 30px;
        border-radius: 3%;
        background-color: rgba(120, 146, 131, 0.2);
        // background-image: url("../img/index/game-left.png");
        h1{
          font-family: 'STLITI';
          margin:0 0 7px 7px;
        }
        p{
          margin-bottom: 8px;
        }
      }
      &--gameRight {
        width: 370px;
        .each {
          height: 158px;
          margin-bottom: 3px;
          line-height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3%;
          background-color: rgba(120, 146, 131, 0.2); // need to delete
        }
      }
    }
  }
}
</style>
