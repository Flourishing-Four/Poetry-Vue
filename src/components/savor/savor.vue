<template>
    <div class="savor">
        <div class="savor-tag">
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">朝代</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title">朝代</span>
                <div class="savor-tag__box--btu">
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                    <el-button type="primary" size="mini">主要按钮</el-button>
                </div>
            </div>
            <div class="savor-tag__box">
                <span class="savor-tag__box--title another">类别</span>
                <div class="savor-tag__box--btu">
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                    <el-button type="warning" size="mini">主要按钮</el-button>
                </div>
            </div>
        </div>
        <div class="savor-content">
            <el-card class="savor-content__card">
                <div slot="header" class="clearfix">
                    <span>鉴赏方法（好像有疑问）</span>
                    <el-button style="float: right; padding: 0; margin-left: 10px" type="text" :icon="iconCollection" @click="mark(0)"/>
                    <el-button style="float: right; padding: 0" type="text" :icon="iconLikes" @click="mark(1)"/>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'这里要放一篇教授赏析的通用方法 ，比如田园诗从景物入手' + o }}
                </div>
            </el-card>
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
      ]
    }
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
        this.markCollection = !this.markCollection
        if (this.markCollection) {
          this.iconCollection = 'iconfont iconcollection-fill'
        } else this.iconCollection = 'iconfont iconcollection'
      } else {
        this.markLikes = !this.markLikes
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
    }
  }
}
</script>

<style lang="scss">
.savor {
    width: 1000px;
    margin: 10px auto;
    &-content {
        padding: 0 20px;
        &__card {
            width: 660px;
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
            .hbl-comm,
            .comm,
            .hbl-child {
                padding: 10px 0 !important;
            }
        }
    }
    &-tag {
        width: 200px;
        float: right;
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
