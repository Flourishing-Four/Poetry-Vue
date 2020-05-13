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
            <div id="yi" v-show="showShi">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于大汉无灭匈奴之计策，至使匈奴进犯至渭桥。离长安不远的五原，就驻扎着胡人骄悍的兵马。将士们受命西征，大军横行于阴山之侧。攻下了盛产胭脂的燕支山，使胡人惊叹：失我燕支山，使我妇立无颜色！汉兵转战万里，大获全胜。回渡黄河，凯旋收兵。从此休兵，胡汉人民都乐其太平。茫茫瀚海，沙浪寂寂，萧条万里，和平安静。
            </div>
            <div id="pin" v-show="showPin">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此诗声声实在，句句真情。诗意具有飞扬跋扈、迅猛阔大的气势，又充溢着边塞秋景萧煞悲凉之意，表达出诗人对唐太宗委任李靖等名将平定匈奴离叛的祝颂之意，也表现出诗人对国家安危的忧虑和对民生疾苦的关怀。
            </div>
          </div>
        </div>
        <div class="homePage-main__singlePoem--singleBottom">
          <el-button circle @click="infoChange(0)">阅</el-button>
          <el-button circle @click="infoChange(1)" style="margin: 0 200px;">译</el-button>
          <el-button circle @click="infoChange(2)">品</el-button>
        </div>
      </div>
      <div class="homePage-main__sortPoem layout">
        <div class="homePage-main__sortPoem--sortBox" v-for="(item, index) in dynasty" :key="index" :style ="{ 'background-image': 'url(' + sort_images[index] + ')', 'background-size': '100% 100%'}">
        <router-link :to="{name: 'Classic', query:{dynasty:item +'朝'}}"><el-button type="text" class="sortBox_title" @click="getSort(item)">{{item}}</el-button></router-link>
        </div>
      </div>
      <div class="homePage-main__storyPoem layout">
        <div class="homePage-main__storyPoem--storyLeft">
            <div class="splitLine">诗人生平轶事</div>
            <div class="homePage-main__storyPoem--content">
              <h2>李白</h2>
            </div>
        </div>
        <div class="homePage-main__storyPoem--storyRight">
          <div class="splitLine">诗词小知识</div>
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
      sort_images: [
        require('../img/index/sortBox/1.png'),
        require('../img/index/sortBox/2.png'),
        require('../img/index/sortBox/3.png'),
        require('../img/index/sortBox/4.png'),
        require('../img/index/sortBox/5.png')
      ],
      dynasty: [
        '唐',
        '宋',
        '元',
        '明',
        '清'
      ]
    }
  },
  mounted () {
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
    },
    getSort (item) {
      this.$router.push({path: '/Classic', query: {dynasty: item + '朝'}})
    }
  }
}
</script>

<style lang="scss">
.homePage {
  margin-top: 71px;
  background-color: #fff;
  &-banner {
    .bannerImg {
      width: 100%;
      height: inherit;
      background-size: 100% 100%;
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
          width: 48%;
          margin-right: 60px;
          background-image: url("../img/index/poem.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
        .Right {
          width: 52%;
          height: 340px;
          line-height:34px;
          padding: 0 20px;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background-image: url("../img/index/poem-right.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
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
      margin: 8% 0;
      padding: 40px 120px;
      background-color: rgba(182,198,188,0.6);
      // background-color: rgba(204, 224, 212,0.5);
      // background-size: 100%!important;
      display: flex;
      &--sortBox {
        width: 20%;
        margin: 0 10px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        // background-color: aliceblue;
        .sortBox_title{
          width: 100%;
          text-align: center;
          font-family: 'STLITI';
          font-size: 50px;
          color: rgb(160, 68, 61);
          margin-top: 80%;
        }
      }
    }
    &__storyPoem {
      height: 380px;
      margin: 140px 120px;
      background-image: url("../img/index/storyPoem.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      display: flex;
      .splitLine{
          font-family: 'STLITI';
          font-size: 28px;
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
        width: 58%;
        margin-right: 70px;
        border-radius: 3%;
        background-color: rgba(204, 224, 212,0.3);
      }
      &--storyRight {
        width: 42%;
        height: 280px;
        border-radius: 3%;
        background-color: rgba(204, 224, 212,0.3);
        .more {
          font-size: 20px;
          color: rgb(140, 16, 56);
          font-weight: bold;
          position: relative;
          top: 230px;
          left: 41%;
        }
      }
    }
    &__gamePoem {
      height: 480px;
      margin: 140px 0;
      padding: 80px 240px;
      text-align: center;
      background-image: url("../img/index/game-background.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
      display: flex;
      &--gameLeft {
        width: 54%;
        margin-right: 3px;
        padding: 20px 30px 40px 30px;
        border-radius: 3%;
        background-color: rgba(120, 146, 131, 0.2);
        h1{
          font-family: 'STLITI';
          margin:0 0 7px 7px;
        }
        p{
          margin-bottom: 8px;
        }
      }
      &--gameRight {
        width: 46%;
        .each {
          height: 158px;
          margin-bottom: 3px;
          line-height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3%;
          background-color: rgba(120, 146, 131, 0.2);
        }
      }
    }
  }
}
</style>
