<template>
  <div class="flex-style-column chronic-disease-layout">
    <div class="flex-style-base" style="margin-top: 4.5rem;align-items: stretch;">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="用户登录">
          <span style="color: #00559D;" slot="label">用户登录</span>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.userPwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>

      <div class="flex-style-column register-layout">
        <div class="register-tips">还不是脑卒中用户？</div>
        <div class="register-content">
          现在免费注册成为脑卒中用户，便能立刻享受便宜又放心的购物乐趣。</div>
        <div class="register-now" @click="handleClick">立即注册</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          userName: '',
          userPwd: ''
        },
        redirect: undefined,
        otherQuery: {}
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          const query = route.query
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true
      }
    },
    methods: {
      handleClick() {
        this.$router.push({
          name: 'login',
          query: {
            flag: 1
          }
        })
      },
      login() {
        if (!this.form.userName) {
          this.$message.error('请输入用户名');
          return
        } else if (!this.form.userName) {
          this.$message.error('请输入密码');
          return
        }
        localStorage.setItem('xw-logined', 'true')
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        })

      },
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      }
    }
  }
</script>

<style lang="scss">
  .chronic-disease-layout {
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin-top: -1.625rem;
    height: calc(100vh - 11rem);

    .el-form-item__label {
      font-size: 1.25rem;
      text-align: justify;
      text-align-last: justify;
      text-justify: distribute-all-lines;
    }

    .el-button {
      font-size: 1.25rem;
    }
  }
</style>

<style scoped lang="scss">
  .text-size {
    font-size: 1.25rem;
  }

  .register-layout {
    width: 25rem;
    background-color: #EBEBEB;
    border-radius: 0.25rem;
    padding: 2rem;
    align-items: center;
    margin-left: 2rem;

    .register-tips {
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.5rem;
      line-height: 2rem;
    }

    .register-content {
      text-align: center;
      font-size: 1.2rem;
      margin-top: 1rem;
      line-height: 1.5rem;
    }

    .register-now {
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
      text-align: center;
      width: 7.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      background-color: #2687D4;
      margin-top: 2rem;
      cursor: pointer;
      border-radius: 0.25rem;
    }
  }
</style>
