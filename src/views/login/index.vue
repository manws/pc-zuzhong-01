<template>
  <div class="login-container" style="overflow: auto;">
    <div class="content-container flex-style-column" style="height: 100vh;">
      <img :src="logo" class="logo">

      <div class="layout flex-style-base" style="flex: 1;">
        <div style="position: relative;display: flex;">
          <img class="header-img" src="../../assets/images/header.png" />
          <div class="tips-content">
            通过脑卒中患者的一般资料、临床评估资料、临床辅助检查、随访资料等多模态数据进行综合分析，发展并逐渐完善脑卒中患者的防治方案，促进患者早日康复。</div>
        </div>
        <el-form ref="loginForm" :model="loginForm" class="login-form flex-style-column" autocomplete="on"
          label-position="right" label-width="0px">

          <div class="login-tip">体验登录</div>
          <div class="flex-style-base login-layout">
            <div class="flex-style-column login-item-layout">
              <div class="login-text" style="height: 100%;cursor: pointer;"
                :style="{color: isRegisterUser ? '#117BD0' : '#2C2C2C','font-weight': isRegisterUser ? 'bold' : 400}"
                @click="toRegister(true)">注册用户</div>
              <div v-if="isRegisterUser" class="item-indictor">
              </div>
            </div>
            <div class="flex-style-column login-item-layout">
              <div class="login-text" style="height: 100%;cursor: pointer;"
                :style="{color: isRegisterUser ? '#2C2C2C' : '#117BD0','font-weight': isRegisterUser ? 400 : 'bold'}"
                @click="toRegister(false)">非注册用户</div>
              <div v-if="!isRegisterUser" class="item-indictor">
              </div>
            </div>
          </div>

          <el-form-item prop="userCode" style="margin-top: 1.5rem;">
            <el-input ref="userCode" v-model="loginForm.userCode" placeholder="请输入用户名" name="userCode" type="text"
              tabindex="1" autocomplete="on" @focus="userCodeFocus = true" @blur="userCodeFocus = false">
              <svg-icon slot="prefix" icon-class="username" :color="userCodeFocus ? '#2B97EF' : '#808695'" />
            </el-input>
          </el-form-item>


          <el-form-item prop="userPwd">
            <el-input :key="passwordType" ref="userPwd" v-model="loginForm.userPwd" :type="passwordType"
              placeholder="请输入密码" name="userPwd" tabindex="2" autocomplete="new-password" @focus="userPwdFocus = true"
              @blur="userPwdFocus = false" @keyup.enter.native="handleLogin">
              <svg-icon slot="prefix" icon-class="password" :color="userPwdFocus ? '#2B97EF' : '#808695'" />
              <span slot="suffix" class="show-pwd" @click="showPwd">
                <svg-icon color="#666666" :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-input>
          </el-form-item>
          <div style="font-size: 0.875rem;color: #007AFF;line-height: 1.125rem;align-self: flex-end;cursor: pointer;">
            忘记密码？</div>
          <div @click="toLogin" class="login-btn">登录</div>
          <div class="flex-style-base" style="justify-content: center;margin-top: 1.6875rem;">
            <span style="font-size: 0.875rem;color: #333333;">尚未拥有账户？</span>
            <span style="cursor: pointer;color: #007AFF;font-size: 0.875rem;cursor: pointer;">注册</span>
          </div>
        </el-form>
      </div>
      <div style="align-self: center;color: white;height: 3.375rem;">北京脑血管病产业技术创新战略联盟 京ICP备06002033号-1 </div>
    </div>
  </div>
</template>

<script>
  import LangSelect from '@/components/LangSelect'
  import {
    title
  } from '@/settings'

  export default {
    name: 'Login',
    components: {
      LangSelect
    },
    data() {
      return {
        title,
        logo: require('@/assets/images/logo-white.png'),
        userCodeFocus: false,
        userPwdFocus: false,
        loginForm: {
          userCode: '',
          userPwd: ''
        },
        passwordType: 'password',
        loading: false,
        redirect: undefined,
        otherQuery: {},
        isRegisterUser: true
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
    created() {
      console.log(this.$route.query, '123456789')
      if (this.$route.query && this.$route.query.flag == 1) {
        this.isRegisterUser = false
      }
    },
    mounted() {
      localStorage.clear()
      if (this.loginForm.userCode === '') {
        this.$refs.userCode.focus()
      } else if (this.loginForm.userPwd === '') {
        this.$refs.userPwd.focus()
      }
    },
    methods: {
      toRegister(isUser) {
        this.isRegisterUser = isUser
      },
      toLogin() {
        this.$router.push({
          name: 'popular-science'
        })
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.userPwd.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm)
              .then(() => {
                this.$router.push({
                  path: this.redirect || '/project',
                  query: this.otherQuery
                })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log('error submit!!')
            return false
          }
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



<style lang="scss" scoped>
  .login-container {
    overflow: hidden;
    height: 100%;
    min-width: 75rem;
    background-image: url('../../assets/images/login-bg.png');
    background-size: cover;
    background-position: center;

    .logo {
      height: 5.75rem;
      margin-top: 2.1875rem;
      object-fit: cover;
      align-self: flex-start;
    }

    .layout {
      align-self: center;

      .header-img {
        width: 34.375rem;
        height: 31.25rem;

      }

      .login-form {
        width: 30rem;
        height: 31.25rem;
        background-color: white;
        border-radius: 0 0.375rem 0.375rem 0;
        padding: 0 3.75rem;
        padding-top: 2rem;


        .login-tip {
          font-size: 2.625rem;
          color: #2C2C2C;
          line-height: 3.75rem;
          font-weight: 600;
          text-align: center;
        }

        .login-text {
          font-size: 24px;
          color: #117BD0;
          line-height: 32px;
        }
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
    }

    .tips-content {
      position: absolute;
      font-size: 1.25rem;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: justify;
      line-height: 36px;
      font-weight: 500;
      margin: 1.5rem;
      bottom: 0;
    }

    .login-layout {
      margin-top: 2.25rem;
      border-bottom: solid 0.0625rem #BEBEBE;
      height: 3.125rem;

      .login-item-layout {
        width: 0;
        flex: 1;
        align-items: center;
        position: relative;
        height: 100%;
      }

      .item-indictor {
        background-color: #117BD0;
        height: 0.25rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.0625rem;
      }
    }
  }

  .login-btn {
    cursor: pointer;
    background: #117BD0;
    border-radius: 0.1875rem;
    font-size: 1rem;
    color: #FFFFFF;
    height: 3.125rem;
    line-height: 3.125rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1.5rem;
  }
</style>
