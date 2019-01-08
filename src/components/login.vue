<template>
 <div class="login">
   <h3 class="loginTitle">vue-xuadmin权限管理后台模板</h3>
   <div class="loginBox">
       <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item>
          <span class="ico"><i class="fa el-icon-message"></i></span><el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="ico"><i class="fa el-icon-view"></i></span><el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
       </el-form>
   </div>
 </div>
</template>
<script>
export default{
    data(){
        return{
            loginForm:{
                username: 'vue-xuadmin',
                password: '123456'
            }
        }
    },
    methods:{
        submitForm(){
            let that = this
            if(this.loginForm.username ==='' || this.loginForm.password ===''){
                this.$message({
                showClose: true,
                message: '账号或密码不能为空',
                type: 'error'
                })
                return false
            }else{
                  // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
                 this.$router.push('/index')
            }
        }
    }
}
</script>
<style lang="less">
.login{
    width:100%;
    height:100%;
    background:#2d3a4b; //主体背景色
    .loginTitle{
        padding-top:230px;
        font-size:35px;
        color:#fff;
        text-align:center;
        margin-top:0px;
    }
    .loginBox{
        width:330px;
        height:600px;
        margin:25px auto;
        .el-form-item__content{
            margin-left: 0px !important;
        .subBtn{
            width:100%;
        }
    }
    input{
        padding-left:50px;
    }
    .el-form-item__content .ico{
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      width: 40px;
      height: 39px;
      text-align: center;
      border-right: 1px solid #ccc;
    }
  }
  .fa{
     color:#2d3a4b;
  }

} 
</style>