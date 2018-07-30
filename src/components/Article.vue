<template>
    <div id="main">
        <div id="content">
            <div class="panel panel-left">
                <div class="header">
                    <span class="tag" :class="{'put_top':article.top}">{{getTab(article)}}</span>
                    <span class="title">{{article.title}}</span>
                    <div class="stamp">
                        <span>发布于 {{article.create_at | formatTime}}</span>
                        <span>作者 {{author.loginname}}</span>
                        <span>{{article.visit_count}} 次浏览</span>
                        <span>来自 {{article.tab=='share'?'分享':'问答'}}</span>
                    </div>
                </div>
                <div class="inner">
                    <div v-html="article.content"></div>
                </div>
            </div>
            <div class="panel panel-left">
              <div class="header">
                <span>{{article.reply_count}} 回复</span>
              </div>
              <div class="inner">
                  <el-menu v-for="(item, index) in article.replies" index="index" :key="index">
                    <div class="cell">
                        <router-link :to="{name:'userInfo',params:{name:item.author.loginname}}" class="user_avatar pull_left">
                            <img :src="item.author.avatar_url" alt="" class="avatar_img">
                        </router-link>
                        <span>{{item.author.loginname}}</span>
                        <a class="attach">{{index}} 楼•{{item.create_at | formatTime}}</a>
                        <span class="is_author" v-if="article.author.loginname==item.author.loginname">作者</span>
                        <p v-html="item.content" class="reply_style"></p>
                    </div>
                  </el-menu>
              </div>
            </div>
        </div>
        <side-bar :userInfo="author"></side-bar>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
export default{
  name: 'Article',
  data: function () {
    return {
      article: {},
      author: {}
    }
  },
  components: {
    SideBar
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getArticleData()
    })
  },
  methods: {
    getArticleData: function () {
      this.$http({
        url: `https://cnodejs.org/api/v1/topic/${this.$route.params.topic_id}`,
        method: 'get'
      })
        .then(res => {
          if (res.data.success) {
            this.article = res.data.data
            this.getAuthorData()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAuthorData: function () {
      this.$http.get('https://cnodejs.org/api/v1/user/' + this.article.author.loginname)
        .then(res => {
          this.author = res.data.data
        })
    },
    getTab: function (item) {
      if (item.top) {
        return '置顶'
      }
      switch (item.tab) {
        case 'share':return '分享'
        case 'ask':return '问答'
        default: return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import  '../style/base.scss';
    .header .title{
        font-size: 22px;
        font-weight: 700;
        color: #333;
    }
    .stamp span{
        color:#838383;
        font-size: 12px;
    }
    .stamp span::before{
        content: "•";
    }
    .is_author{
      @extend .put_top;
      @extend .tag;
    }
    .cell{
      border-bottom: solid 1px #f6f6f6;
    }
    .cell .attach{
      color: #08c !important;
    }
    .reply_style /deep/ p{
      word-wrap: break-word;
    }
    .reply_style /deep/ img{
      max-width: 33.33em;
      max-height: 33.33em;
    }
    .reply_style /deep/ code{
      display: inline-block;
      width: 100%;
      word-wrap: break-word;
      overflow: hidden;
    }
</style>
