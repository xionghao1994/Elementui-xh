<template>
<div class="container">
<!--标题 -->
 <div class="logo-name">
  <p v-if="$store.getters.logoShow">XU</p>
  <p v-else>vue-xuAdmin后台模板</p>
 </div>
 <!--/标题 -->
  <el-menu
      :default-active="onRoutes"
      :collapse="$store.getters.isCollapse"
      class="el-menu-vertical-demo"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#409EFF"
      unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                        <template slot="title">{{ subItem.title }}</template>
                        <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                            {{ threeItem.title }}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                        {{ subItem.title }}
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
        </template>
      </template>
  </el-menu>
</div>
</template>
<script>
import bus from './bus.js'
  export default {
    data() {
      return {
         items: [
                  {
                      icon: 'el-icon-tickets',
                      index: 'dashboard',
                      title: '系统首页'
                  },
                  {
                      icon: 'el-icon-menu',
                      index: 'table',
                      title: '基础表格',
                       subs: [
                          {
                              index: 'drag',
                              title: '拖拽列表',
                          },
                          {
                              index: 'dialog',
                              title: '拖拽弹框',
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-edit-outline',
                      index: 'tabs',
                      title: 'tab选项卡',
                       subs: [
                          {
                              index: 'drag',
                              title: '拖拽列表',
                          },
                          {
                              index: 'dialog',
                              title: '拖拽弹框',
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-upload',
                      index: '3',
                      title: '表单相关',
                      subs: [
                          {
                              index: 'form',
                              title: '基本表单'
                          },
                          {
                              index: 'upload',
                              title: '文件上传'
                          },
                          {
                              index: '3-2',
                              title: '三级菜单',
                              subs: [
                                  {
                                      index: 'editor',
                                      title: '富文本编辑器'
                                  },
                                  {
                                      index: 'markdown',
                                      title: 'markdown编辑器'
                                  }
                              ]
                          }  
                      ]
                  },
                  {
                      icon: 'el-icon-delete',
                      index: 'icon',
                      title: '自定义图标',
                       subs: [
                          {
                              index: 'drag',
                              title: '拖拽列表',
                          },
                          {
                              index: 'dialog',
                              title: '拖拽弹框',
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-service',
                      index: 'charts',
                      title: 'schart图表',
                       subs: [
                          {
                              index: 'drag',
                              title: '拖拽列表',
                          },
                          {
                              index: 'dialog',
                              title: '拖拽弹框',
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-edit',
                      index: '6',
                      title: '拖拽组件',
                      subs: [
                          {
                              index: 'drag',
                              title: '拖拽列表',
                          },
                          {
                              index: 'dialog',
                              title: '拖拽弹框',
                          }
                      ]
                  },
                  {
                      icon: 'el-icon-setting',
                      index: '7',
                      title: '错误处理',
                      subs: [
                          {
                              index: 'permission',
                              title: '权限测试'
                          },
                          {
                              index: '404',
                              title: '404页面'
                          }
                      ]
                  }
                ]
      }
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    }
  }
</script>
<style lang="less" scoped>
*{
  margin:0;
  padding:0;
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