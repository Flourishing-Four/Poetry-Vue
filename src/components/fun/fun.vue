<template>
    <div class="fun">
      <div class="fun-timeline">
        <el-timeline>
            <el-timeline-item v-for="(time, index) in halfMonth" :key="index" :type="time.type" :timestamp="time.timestamp">
                <el-button type="text" style="padding: 0px;" @click="cutOver(index)">{{'click: ' + time.content}}</el-button>
            </el-timeline-item>
        </el-timeline>
      </div>
      <div class="fun-blank">
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
      </div>
      <div class="fun-blank">
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
      </div>
      <div class="fun-show">
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
          </el-card>
          <!-- <el-pagination background layout="prev, pager, next" :total="20"/> -->
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      halfMonth: [],
      contentList: [
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
      ]
    }
  },
  created () {
    this.getHalfMonth()
    this.halfMonth[0].type = 'primary'
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
    }
  }
}
</script>

<style lang="scss">
.fun {
    width: 1000px;
    margin: 10px auto;
    &-timeline {
      float: left;
      width: 120px;
      margin: 10px 20px 0 0;
    }
    &-show {
        padding: 0 20px;
        &__card {
            width: 340px;
            margin: 20px;
            .text {
            font-size: 14px;
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
        /* .el-pagination {
            width: 200px;
            position: relative;
            left: 360px;
        } */
    }
    &-blank {
        width: 420px;
        float: right;
        margin: 0 20px 20px 20px;
        padding: 20px;
        background-color: rgba(195, 221, 205, 0.253);
        border: 1px solid rgb(182, 198, 188);
        border-radius: 4px;
        /*&__box {
            margin-bottom: 20px;
             &--title {
                display: block;
                border-left: 3px solid #F9BE64;
                margin-bottom: 10px;
                padding: 4px 10px;
            }
            .another {
                border-left: 3px solid #68AAAD;
            }
        }*/
    }
}
</style>
