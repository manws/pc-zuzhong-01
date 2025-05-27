<template>
  <div class="container" style="overflow: auto;">
    <div class="flex-style-column content-container layout">
      <img class="tips" src="../../assets/images/home-tips.png" />
      <img class="logo" src="../../assets/images/logo2.png" />
      <div class="flex-style-base enter" @click="enter">
        <img class="small-hand" src="../../assets/images/small-hand.svg" />
        <span>进入官网</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      enter() {
        this.$router.push({
          name: 'health-service'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    overflow: hidden;
    height: 100vh;
    min-width: 75rem;
    min-height: 37.5rem;
    background-image: url('../../assets/images/home.jpg');
    background-size: cover;
    background-position: center;

    .layout {
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    .logo {
      width: 75rem;
      height: 11.375rem;
      margin-top: 3.125rem;
    }

    .tips {
      width: 75rem;

    }

    .small-hand {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    .enter {
      background: #00D496;
      border-radius: 0.375rem;
      width: 16.25rem;
      height: 4.375rem;
      font-size: 2.5rem;
      color: #FFFFFF;
      text-align: justify;
      font-weight: 600;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      cursor: pointer;
      margin-top: 2.5rem;
    }

    .enter:hover {
      opacity: 0.8;
    }
  }
</style>
