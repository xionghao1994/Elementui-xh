<template>
<div class="container">
<!--标题 -->
 <div class="logo-name">
  <p v-if="$store.getters.logoShow">XU</p>
  <p v-else>vue-xuAdmin后台模板</p>
 </div>
 <!--/标题 -->
  <el-menu
      default-active="2"
      :collapse="$store.getters.isCollapse"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#ffffff">
      <!--导航1-->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!--导航2 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <!--导航3 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <!--导航4 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>导航四</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
       <!--导航5-->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>导航五</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
       <!--导航6-->
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-upload"></i>
          <span>导航六</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
       <!--导航7-->
       <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>导航七</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
       </el-submenu>
       <!--导航8-->
       <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>导航八</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
       </el-submenu>
       <!--导航9-->
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>导航九</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu> 
  </el-menu>
</div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleOpen(key, keyPath) {
      
      },
      handleClose(key, keyPath) {
          
      }
    }
  }
</script>
<style lang="less" scoped>
*{
  margin:0;
  padding:0;
  font-size:18px;
}
.el-menu-item-group /deep/ .el-menu-item-group__title{
    padding: 0px 0px 7px 20px;
    position:absolute;
}
.container{
    width:auto !important;
    background-color: #03152a;
    height:100%;
    display:flex;
    flex-direction:column;
    border-right:none;
    .logo-name{
        color: rgba(255, 255, 255, 0.8);
         p{
            height:50px;
            color: #5e6d82;
            background-color: rgb(3, 21, 42);
            font-size:18px;
            text-align:center;
            line-height:50px;
        }
    }
    
}

 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width:200px;
    height:100%;
  }
 .el-menu-item {
        &:hover {
          color: #ffffff !important;
          background-color: #375573 !important;
          width:100%;
        }
  }
.el-submenu{
  padding:5px 0px;
}
// 清除侧边栏右边线
.el-menu{
  border-right:none;
}
</style>