<template>
    <div id="main">
        <!-- <div id="sidebar">
            <div class="panel">
                <div class="header">
                    <span>个人信息</span>
                </div>
                <div class="inner">
                    <div class="user_card">
                        <div>
                           <a href="{'/userInfo/'+userInfo.loginname}" class="user_avatar"><img src="userInfo.avatar_url" alt=""></a>
                           <span><a href="{'/userInfo/'+userInfo.loginname}">{{userInfo.loginname}}</a></span>
                           <div class="board">
                              <div class="floor">
                                  <span>积分: {{userInfo.score}}</span>
                              </div>
                           </div>
                           <span class="signature">xxxxxxxxxxxxxxxxx</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <side-bar :userInfo="userInfo"></side-bar>
        <div id="content">
            <div class="panel">
                <div class="header">
                    <router-link to="/">主页/</router-link>
                </div>
                <div class="inner">
                    <div class="user_avatar">
                        <img :src="userInfo.avatar_url" alt="" class="avatar_img">
                    </div>
                    <a href="">{{userInfo.loginname}}</a>
                    <div class="user_profile">
                        <span>{{userInfo.score}} 积分</span>
                        <a href="#">5个话题收藏</a>
                        <a href="#">github:@{{userInfo.githubUsername}}</a>
                        <p>注册时间：{{userInfo.create_at | formatTime}}</p>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="header">
                    <span>最近创建的话题</span>
                </div>
                <div class="inner">
                        <topic-list :topicList="filtersRecentTopicList">
                                <el-menu-item index="limitTopicNum+1"><a @click="limitTopicNum+=5">查看更多>></a></el-menu-item>
                            </topic-list>
                </div>
            </div>
            <div class="panel">
                <div class="header">
                    <span>最近回复的话题</span>
                </div>
                <div class="inner">
                        <topic-list :topicList="filtersRecentReplies">
                                <el-menu-item index="limitReplyNum+1"><a @click="limitReplyNum+=5">查看更多>></a></el-menu-item>
                        </topic-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopicList from './TopicList.vue'
import SideBar from './SideBar.vue'
export default{
  name: 'UserInfo',
  data: function () {
    return {
      userInfo: {},
      limitTopicNum: 5,
      limitReplyNum: 5
    }
  },
  components: {
    TopicList,
    SideBar
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getData()
    })
  },
  computed: {
    filtersRecentTopicList: function () {
      return this.userInfo.recent_topics.slice(0, this.limitTopicNum)
    },
    filtersRecentReplies: function () {
      return this.userInfo.recent_replies.slice(0, this.limitReplyNum)
    }
  },
  methods: {
    getData: function () {
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          if (res.data.success) {
            this.userInfo = res.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
    @import  '../style/base.scss';
    .user_profile span{
        display: block;
    }
    .user_profile a{
        display: block;
    }
</style>
