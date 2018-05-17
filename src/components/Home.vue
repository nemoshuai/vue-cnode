<template>
    <div class="topic_list">
    <div class="list_header">
       <el-menu mode="horizontal" background-color="#f6f6f6">
          <el-menu-item v-for="(item,index) in headerList" index="index" :key="index" class="head_tag" :class="{'cur_tag':curIndex==index}" @click="toggleTag(index)">
            <a :href="item.tagLink">{{item.title}}</a>
          </el-menu-item>
       </el-menu>
    </div>
    <topic-list :topicList="topicList"></topic-list>
    </div>
</template>

<script>
import TopicList from './TopicList.vue'
export default{
  name: 'Home',
  data: function () {
    return {
      topicList: [],
      headerList: [{
        title: '全部',
        tagLink: '#'
      },
      {
        title: '精华',
        tagLink: '#'
      },
      {
        title: '分享',
        tagLink: '#'
      },
      {
        title: '问答',
        tagLink: '#'
      },
      {
        title: '招聘',
        tagLink: '#'
      },
      {
        title: '客户端测试',
        tagLink: '#'
      }
      ],
      curIndex: 0
    }
  },
  components: {
    TopicList
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getData()
    })
  },
  methods: {
    getData: function () {
      console.log('get data')
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then(res => {
          if (res.data.success) {
            this.topicList = res.data.data
            console.log('success')
          } else {
            console.log('fail')
          }
        })
    },
    toggleTag: function (index) {
      this.curIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  $tagColor: #80bd01;
  .topic_list{
    padding: 10px 100px;
  }
  .head_tag{
    color: $tagColor;
  }
  .cur_tag{
    background-color: $tagColor !important;
    color: #ffffff;
  }
</style>
