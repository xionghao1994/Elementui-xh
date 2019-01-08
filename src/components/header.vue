<template>
 <div class="header">
    <div class="top">
     <div class="left">
       <span class="hideAside" @click="collapse">
        <i class="el-icon-menu"></i>
       </span>
     </div>
     <div class="right">
       <li class="fullpage" @click="fullScreen">
         <el-tooltip effect="dark" content="全屏" placement="bottom">
          <i class="el-icon-rank"></i>
         </el-tooltip>
       </li>
       <li>
        <el-dropdown>
            <span class="el-dropdown-link">
                中文<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
       </li>
       <li>超级管理员</li>
       <li>
        <el-dropdown>
            <span class="el-dropdown-link">
                前端攻城狮<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>我的主页</el-dropdown-item>
                <el-dropdown-item><li @click="getOut">退出</li></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
       </li>
       <li><span class="tu"><img src="../assets/us.jpg"></span></li>
     </div>
    </div>
    <div class="bottom">
      <tabNav></tabNav>
    </div>
 </div>
</template>
<script>
import tabNav from '../components/tabNav'
 export default{
     data(){
       return{
           isfullScreen:true
       }
     },
     methods:{
        // 挤压侧边栏
        collapse(){
            // 接受actions分发状态
          this.$store.dispatch('collapse')
        },
        // 全屏
        fullScreen () {
            if (this.isfullScreen) {
             var docElm = document.documentElement
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen()
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen()
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen()
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen()
            }
            this.isfullScreen = false
            } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
            this.isfullScreen = true
            }
        },
        // 退出
        getOut(){
            this.$router.push('/login')
        }
    },
    components:{
        tabNav
    }
 }
</script>
<style lang="less" scoped>
*{
    margin:0;
    padding:0;
    list-style:none;
}
 .header{
     background-color:#f2f2f2;
     height:80px;
    //  .bottom{
    //     padding-top:10px;
    //     padding-left:15px;
    //  } 
 }
 .top,.bottom{
     height:50%;
 }
 .top .hideAside i{
    font-size:25px;
    position:relative;
    top:13px;
    left:15px;
    &:hover{
        cursor:pointer;
    }
}
.top{
   box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
   .left{
    float:left;
    width:60px;
    height:100%;
   }
  .right{
    float:right;
    display:flex;
    width:500px;
    .fullpage i{
        font-size:24px;
        transform:rotate(45deg);
        &:hover{
            cursor:pointer;
        }
    }
    li{
        padding-top:13px;
        flex:1;
        text-align:center;
        position:relative;
        &:first-child{
            text-align:right;
        }
        &:nth-child(3){
            font-size:14px;
        }
        .tu{
          position:absolute;
          width:40px;
          height:40px;
          top:0px;
          right:40px;
          img{
              width:100%;
              height:100%;
          }
        }
        .el-dropdown:hover{
            cursor:pointer;
        }
    }
 }
}

</style>