<template>
    <div class="savor">
        <div class="savor-tag">
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">朝代</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini" style="width:54px" v-for="i in dynastyList" :key="i">{{i}}</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini" @click="getMethods(0)">田园诗词</el-button>
                    <el-button type="warning" size="mini" @click="getMethods(1)">抒情诗词</el-button>
                    <el-button type="warning" size="mini">边塞诗词</el-button>
                    <el-button type="warning" size="mini">送别诗词</el-button>
                    <el-button type="warning" size="mini">闺怨诗词</el-button>
                    <el-button type="warning" size="mini">思乡诗词</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">作者</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini">林徽因</el-button>
                    <el-button type="primary" size="mini">徐志摩</el-button>
                    <el-button type="primary" size="mini">张爱玲</el-button>
                    <el-button type="primary" size="mini">陆小曼</el-button>
                </div>
            </div>
            <!-- <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div> -->
        </div>
        <div class="savor-content">
            <el-card class="savor-content__card">
                <div slot="header" class="clearfix">
                    <span style="font-size: 22px;">{{savorList.poetryType + '诗鉴赏方法'}}</span>
                    <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection" @click="mark(0)"/>
                    <el-button style="float: right; padding: 0" type="text" :icon="iconLikes" @click="mark(1)"/>
                </div>
                <div class="text item" style="dispaly: flex; flex-shrink: 0;">
                  <pre style="white-space: pre-wrap; line-height: 24px; font-family: Microsoft YaHei, 微软雅黑">{{savorList.content}}</pre>
                  <el-button style="float: right; padding: 0; margin: 20px;" type="text" @click="getType(savorList.poetryType)">查看例子</el-button>
                </div>
                <!-- <div class="text item" v-show="show" v-html="moreType"></div> -->
            </el-card>
            <!-- <el-card shadow="hover" v-show="show" v-for="(item, index) in moreType" :key="index">
              <div slot="header" class="clearfix">
                <router-link :to="{name: 'SavDetail', query:{poetryData: item}}"><el-link :underline="false">{{item.title}}</el-link></router-link>
              </div>
              <div class="text item" v-html="item.appreciate"></div>
            </el-card> -->
            <el-card class="savor-content__card" style="padding: 0;">
                <comment @doSend="doSend($event)"  @doChidSend="doChidSend(arguments)" :commentList="commentList" :commentNum="commentNum" :label="label" :avatar="avatar" :placeholder="placeholder" :minRows="minRows" :maxRows="maxRows"></comment>
            </el-card>
        </div>
    </div>
</template>

<script>
import Comment from 'hbl-comment'
export default {
  components: {
    Comment
  },
  data () {
    return {
      dynastyList: [
        '先秦',
        '汉朝',
        '魏晋',
        '南北',
        '隋朝',
        '唐朝',
        '宋朝',
        '元朝',
        '明朝',
        '清朝',
        '近代',
        '现代'
      ],
      iconCollection: 'iconfont iconcollection',
      markCollection: false, // 默认不收藏
      iconLikes: 'iconfont iconlikes',
      markLikes: false, // 默认不点赞
      label: '作者',
      placeholder: '说点什么吧',
      minRows: 2,
      maxRows: 4,
      commentNum: 2,
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      commentList: [
        {
          id: 999,
          commentUser: {
            id: 999,
            nickName: ' 某知名语文老师',
            avatar: 'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50'
          },
          content: '希望这篇文章能够帮到大家[害羞][害羞][害羞]<br/>',
          createDate: '2020-4-23 17:36:02',
          childrenList: [
            {
              id: 998,
              commentUser: {
                id: 998,
                nickName: '雾非雾',
                avatar: require('@/components/img/icon/avtar.png')
              },
              targetUser: {
                id: 999,
                nickName: '某知名语文老师',
                avatar: 'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50'
              },
              content: '真的就很棒！很Nice!',
              createDate: '2020-4-23 17:45:26'
            }
          ]
        }
      ],
      commentUserList: [
        {
          id: 999,
          nickName: '某知名语文老师',
          avatar: 'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50'
        },
        {
          id: 998,
          nickName: '雾非雾',
          avatar: require('@/components/img/icon/avtar.png')
        },
        {
          id: 1,
          nickName: '林徽因',
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        }
      ],
      savorList: {},
      show: false,
      moreType: {}
    }
  },
  mounted () {
    this.getMethods(0)
    this.saveComm()
    // this.getType()
  },
  methods: {
    // 格式化时间方法
    getFormatDate () {
      var date = new Date()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentDate = date.getFullYear() + '-' + month + '-' + strDate +
            ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      return currentDate
    },
    mark (index) {
      if (index === 0) {
        this.markCollection = !this.markCollection // 每点击一次就取反
        if (this.markCollection) {
          this.iconCollection = 'iconfont iconcollection-fill'
        } else this.iconCollection = 'iconfont iconcollection'
      } else {
        this.markLikes = !this.markLikes // 每点击一次就取反
        if (this.markLikes) {
          this.iconLikes = 'iconfont iconlikes-fill'
        } else this.iconLikes = 'iconfont iconlikes'
      }
    },
    // 一级评论
    doSend (newCont) {
      this.commentList.push({
        id: '1',
        commentUser: {
          id: '1',
          nickName: '林徽因',
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        },
        content: newCont,
        createDate: this.getFormatDate()
      })
      this.commentNum++
      console.log('初始发送按钮点击事件：' + newCont)
    },
    // 二级评论
    doChidSend (args) {
      const arr = [] // 被评论用户信息
      for (let i = 0; i < this.commentUserList.length; i++) {
        if (this.commentUserList[i].id === args[1]) {
          arr[0] = this.commentUserList[i].id
          arr[1] = this.commentUserList[i].nickName
          arr[2] = this.commentUserList[i].avatar
        }
      }
      this.commentList[0].childrenList.push({
        id: '1',
        commentUser: {
          id: '1',
          nickName: '林徽因',
          avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        },
        targetUser: {
          id: arr[0],
          nickName: arr[1],
          avatar: arr[2]
        },
        content: args[0],
        createDate: this.getFormatDate()
      })
      this.commentNum++
      console.log('评论区发送按钮点击事件：')
      console.log('评论内容content=' + args[0])
      console.log('被评论用户targetUserId=' + args[1])
      console.log('父级评论id=' + args[2])
    },
    getMethods (val) {
      this.$axios.get('appreciate/methodList')
        .then(res => {
          console.log(res)
          this.savorList = res.data[val]
          this.dealWith()
          // console.log(this.savorList.content.repalce(/\n/g, '<br/>'))
        })
        .catch(err => {
          console.log(err)
        })
    },
    dealWith () {
      console.log(this.savorList.content)
      let list = this.savorList
      let str = list.content.repalce(/。/g, '<br>')
      console.log(str)
    },
    saveComm () {
      if (localStorage.getItem('Authorization') !== null) {
        console.log('用户已登录')
        this.$axios.post('comment/save', {
          pid: 0,
          replyUid: null,
          // userId: '',
          content: '这是第一条评论',
          entityId: 11,
          type: 1
        },
        {
          headers: {
            Authorization: localStorage.getItem('Authorization'),
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    getType (val) {
      this.$router.push({path: '/savDetail', query: {item: val}})
      /* let url = 'appreciate/poetryList/' + val
      this.$axios.get(url)
        .then(res => {
          console.log(res)
          this.moreType = res.data
          // console.log(this.savorList.content.repalce(/\n/g, '<br/>'))
        })
        .catch(err => {
          console.log(err)
        })
      this.show = true */
    }
  }
}
</script>

<style lang="scss">
.savor {
    margin-top: 71px!important;
    padding-top: 20px;
    width: 1000px;
    margin: 0px auto;
    padding-bottom: 30px;
    &-content {
        padding: 0 20px;
        &__card {
            width: 660px;
            margin: 0 20px 40px 20px;
            .text {
            font-size: 16px;
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
            .hbl-comm,
            .comm,
            .hbl-child {
                padding: 10px 0 !important;
            }
        }
    }
    &-tag {
      position: fixed;
      left: 66%;
      width: 200px;
      // float: right;
      margin: 0 20px;
      padding: 20px;
      background-color: rgba(195, 221, 205, 0.253);
      border: 1px solid rgb(182, 198, 188);
      border-radius: 4px;
      &__box {
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
          &--btu {
              display: flex;
              flex-wrap: wrap;
              .el-button {
                  margin: 6px;
              }
          }
      }
    }
}
</style>
