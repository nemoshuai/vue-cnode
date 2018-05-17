<template>
        <div id="sidebar">
                <div class="panel">
                    <div class="header">
                        <span>个人信息</span>
                    </div>
                    <div class="inner">
                        <div class="user_card">
                            <div>
                               <router-link :to="{name:'userInfo',params:{name:'+userInfo.loginname+'}}" class="user_avatar">
                                   <img :src="userInfo.avatar_url" alt="" class="avatar_img">
                                </router-link>
                               <span><router-link :to="{name:'userInfo',params:{name:'+userInfo.loginname+'}}">{{userInfo.loginname}}</router-link></span>
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
            </div>
</template>

<script>
export default{
  name: 'SideBar',
  props: ['userInfo']
}
</script>

<style scoped>
    @import  '../style/base.scss';
    #sidebar{
        width: 290px;
        float: right;
    }
</style>
