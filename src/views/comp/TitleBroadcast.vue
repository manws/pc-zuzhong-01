<template>
  <div class="flex-style-base" style="margin-right: 1.5625rem;">
    <div class="flag"></div>
    <div class="title">{{title}}</div>
    <div class="line"></div>
    <img v-if="showIcon" style="height: 0.75rem;" src="../../assets/images/broadcast.svg"></i>
    <span v-if="showBC" class="broadcast">播报</span>
  </div>
</template>

<script>
  export default {
    name: 'TitleBroadcast',
    props: {
      title: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      showBC: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .flag {
    width: 0.5rem;
    height: 1rem;
    background-color: #117BD0;
    margin-left: 0.1875rem;
    margin-right: 0.875rem;
  }

  .title {
    font-size: 1.75rem;
    color: #333333;
    font-weight: bold;
  }

  .line {
    background-color: #BEBEBE;
    margin: 0 0.5rem;
    width: 0;
    height: 0.5px;
    flex-grow: 1;
  }

  .broadcast {
    font-size: 0.75rem;
    color: #999999;
    margin-left: 0.5rem;
  }
</style>
