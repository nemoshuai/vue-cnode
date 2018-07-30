<template>
        <el-menu>
                <el-menu-item v-for="(item,index) in topicList" :key="index" index="index" class="list_item">
                  <div class="cell">
                    <router-link :to="{name:'userInfo',params:{name:item.author.loginname}}" class="user_avatar pull_left">
                        <img :src="item.author.avatar_url" alt="" class="avatar_img">
                    </router-link>
                    <span class="reply_visit_count pull_left" v-if="replyFlag">{{item.reply_count}}/{{item.visit_count}}</span>
                    <div class="topic_title_wrapper">
                        <span class="tag" :class="{'put_top':item.top}" v-if="item.tab">{{getTab(item)}}</span>
                        <router-link :to="{name:'article',params:{topic_id:item.id,author:item.author.loginname}}" class="cell_title">
                            <span>{{item.title}}</span>
                        </router-link>
                   </div>
                  </div>
                </el-menu-item>
                <slot></slot>
            </el-menu>
</template>

<script>
export default{
  name: 'TopicList',
  props: ['topicList', 'replyFlag'],
  methods: {
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
  .list_item{
    margin-bottom: 5px;
  }
  .is-active{
    border-bottom: 0 !important;
  }
  .pull_left{
    float: left;
  }
  .reply_visit_count{
    width: 70px;
    text-align: center;
  }
 .topic_title_wrapper{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 }
</style>
