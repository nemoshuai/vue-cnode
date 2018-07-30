<template>
    <el-row class="navbar">
        <el-col :span="12">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="">
                </router-link>
        </el-col>
        <el-col :span="12">
                <el-menu mode="horizontal" background-color="#545c64" class="nav">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">新手入门</el-menu-item>
                        <el-menu-item index="3">API</el-menu-item>
                        <el-menu-item index="4">关于</el-menu-item>
                        <el-menu-item index="5">注册</el-menu-item>
                        <el-menu-item index="6">登录</el-menu-item>
                </el-menu>
            </el-col>
    </el-row>
</template>

<script>
export default{
  name: 'CommunityHeader'
}

</script>

<style scoped>
.navbar{
    width: 100%;
    height: 5.08em;
    background: #545c64;
    overflow:hidden;
}
img{
    width: 61px;
    height: 30px;
    position: relative;
    left: -200px;
    top:20px;
}

.nav{
    float: right;
}
</style>
