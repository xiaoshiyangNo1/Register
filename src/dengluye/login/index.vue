<template>

    


 <div class="con-login">
<el-form :label-position="labelPosition" label-width="80px">
    <h1 class="title">登录1</h1>
  <el-form-item label="用户名">
    <el-input v-model="username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input @keydown.native.enter="login"  type = "password" v-model="password"></el-input>
  </el-form-item>
  <el-form-item>
   <el-button type="primary" @click="login">点击登录</el-button>
  </el-form-item>
</el-form>

 </div>
    
</template>

<script>
  
  export default {
    data() {
      return {
        labelPosition: 'right',
        username: '',
        password: '',
      };
    
    },
    methods:  {
      login() {
        console.log('执行登录操作');
        if(!this.username.trim() || !this.password.trim()) return  this.$message.error('错了哦，这是一条错误消息');
        this.$http.post("/users/login", {
          username: this.username,
          password: this.password

        })
        .then(result => {
         

            

      localStorage.setItem("token",result.data.data.token);
      localStorage.setItem("userInfo", JSON.stringify(result.data.data));
            
      this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });

          localStorage.setItem("token",result.data.data.token);
          
          // alert(result.data.succMsg)
          this.$router.push('/hove')
          
        })
     .catch(err => {
        this.$message.error('恭喜你呢'+err.response.data.errMsg)
        });

        

      }
     

    }
  };
</script>

<style lang="less" scoped>
.con-login {
    width: 500px;
    margin: 100px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 10px #ccc;
    .title {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 15px;
        text-align: center;
    }
    .el-form-item {
        .el-button {
             margin-left: 116px;
    }
        }
           

}

</style>