<template>
    <div class="fun">
      <div class="fun-timeline">
        <el-timeline>
            <el-timeline-item v-for="(time, index) in halfMonth" :key="index" :type="time.type" :timestamp="time.timestamp">
                <el-button type="text" style="padding: 0px;" @click="cutOver(index)">{{contentList[index]}}</el-button>
            </el-timeline-item>
        </el-timeline>
      </div>
      <div class="fun-blank">
          <el-card class="fun-blank__box">
              <div slot="header" class="clearfix">
                  <span>{{funPoet.explainTitle}}</span>
              </div>
              <div class="text item" v-html="funPoet.explainCont"></div>
          </el-card>
      </div>
      <!-- <div class="fun-blank">
          <el-card class="fun-blank__box">
              <div slot="header" class="clearfix">
                  <span>古诗词名称</span>
                  <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">释</el-button>
              </div>
              <div v-for="o in 10" :key="o" class="text item">
                  {{'古诗词内容 ' + o }}
              </div>
          </el-card>
      </div> -->
      <div class="fun-show">
          <el-card class="fun-show__card" v-for="(item, index) in funPoet.mainPoet" :key="index" >
              <div slot="header" class="clearfix">
                  <span>{{item.title}}</span>
              </div>
              <div class="text item" v-html="item.poet">
              </div>
          </el-card>
          <!-- <el-card class="fun-show__card">
              <div slot="header" class="clearfix">
                  <span>古诗词名称</span>
                  <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">释</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                  {{'古诗词内容 ' + o }}
              </div>
          </el-card>
          <el-card class="fun-show__card">
              <div slot="header" class="clearfix">
                  <span>古诗词名称</span>
                  <el-button style="float: right; padding: 3px 3px" type="text">收藏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">点赞</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">赏</el-button>
                  <el-button style="float: right; padding: 3px 3px" type="text">释</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                  {{'古诗词内容 ' + o }}
              </div>
          </el-card> -->
          <!-- <el-pagination background layout="prev, pager, next" :total="20"/> -->
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      halfMonth: [],
      /* contentList: [
        'zhe',
        'shi',
        'biao',
        'ti',
        'ma',
        'zhe',
        'shi',
        'biao',
        'ti',
        'ma',
        'zhe',
        'shi',
        'biao',
        'ti',
        'ma'
      ], */
      contentList: [],
      funPoet: []
    }
  },
  created () {
    this.getHalfMonth()
    this.halfMonth[0].type = 'primary'
  },
  mounted () {
    this.getFun(0)
  },
  methods: {
    getHalfMonth () {
      for (var i = 0; i < 10; i++) {
        /* this.halfMonth.push(new Date(new Date().setDate(new Date().getDate() - i)).toLocaleDateString()) */
        this.halfMonth.push({
          'timestamp': new Date(new Date().setDate(new Date().getDate() - i)).toLocaleDateString(),
          'show': false,
          'type': '',
          'content': this.contentList[i]
        })
      }
      console.log(this.halfMonth)
    },
    cutOver (val) {
      for (var i = 0; i < this.halfMonth.length; i++) {
        this.halfMonth[i].type = ''
      }
      this.halfMonth[val].type = 'primary'
      this.getFun(val)
    },
    getFun (val) {
      this.$axios.get('http://localhost:8080/static/funPoet.json')
        .then(res => {
          console.log(res)
          this.funPoet = res.data[val]
          if (this.contentList.length < 2) {
            for (let i in res.data) {
              this.contentList.push(res.data[i].explainTitle)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.fun {
    margin-top: 71px!important;
    padding-top: 20px;
    width: 1000px;
    margin: 0px auto;
    padding-bottom: 30px;
    &-timeline {
      // float: left;
      position: fixed;
      left: 180px;
      width: 120px;
      margin: 10px 60px 0 0;
    }
    &-show {
        padding: 0 20px;
        margin-left: 120px;
        &__card {
            width: 340px;
            margin: 0 20px 30px 20px;
            .text {
            font-size: 16px;
            line-height: 26px;
            }
            .item {
                margin-bottom: 18px;
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
    }
    &-blank {
      position: fixed;
      left: 52%;
      width: 420px;
      // float: right;
      margin: 0 20px 20px 20px;
      padding: 20px;
      background-color: rgba(195, 221, 205, 0.253);
      border: 1px solid rgb(182, 198, 188);
      border-radius: 4px;
      .text {
        font-size: 16px;
        line-height: 28px;
      }
    }
}
</style>
