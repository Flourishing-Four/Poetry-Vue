<template>
  <div class="user">
    <div class="user-main">
        <el-card class="user-main__header">
          <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <el-button style="float: right; padding: 4px 10px" type="text" @click="uploadOpen">上传我的作品</el-button>
          <el-button style="float: right; padding: 4px 10px" type="text" @click="editOpen">编辑我的资料</el-button>
          <div class="user-main__header--user">
            <span class="userName">林徽因</span>
            <span class="userSign">君莫舞，君不见，玉环飞燕皆尘土</span>
          </div>
        </el-card>
        <el-card class="user-main__body">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="我的作品" name="works"><works v-show="activeName === 'works'" /></el-tab-pane>
            <el-tab-pane label="收获的赞" name="likes"><likes v-show="activeName === 'likes'" /></el-tab-pane>
            <el-tab-pane label="我的收藏" name="collect"><collect v-show="activeName === 'collect'" /></el-tab-pane>
          </el-tabs>
        </el-card>
        <edit ref="edit"></edit>
        <upload ref="upload"></upload>
    </div>
  </div>
</template>

<script>
import Works from './works'
import Likes from './likes'
import Collect from './collect'
import Edit from './edit'
import Upload from './upload'
export default {
  components: {
    Works,
    Likes,
    Collect,
    Edit,
    Upload
  },
  data () {
    return {
      activeName: 'works'
    }
  },
  mounted () {
  },
  methods: {
    editOpen () {
      this.$refs.edit.showDialog()
    },
    uploadOpen () {
      this.$refs.upload.showDialog()
    }
  }
}
</script>

<style lang="scss">
.user {
  &-main {
    padding: 10px 160px;
    .el-button {
        font-size: 14px;
    }
    &__header {
      &--user {
        width: 500px;
        .userName {
            display: block;
            padding: 30px 10px 10px 10px;
            font-size: 24px;
        }
        .userSign {
            font-size: 18px;
            color: rgb(165, 165, 165);
        }
      }
      .el-avatar {
        float: left;
        border: 1px solid #68AAAD;
        margin: 0 20px 20px 0;
      }
      .el-card__body {
        padding: 20px 40px;
      }
    }
    &__body {
      margin-top: 20px;
      .el-card__body {
        padding: 0;
      }
      .el-tabs__content {
        padding: 0 20px 20px 20px;
      }
    }
  }
}
</style>
