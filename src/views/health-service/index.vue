<template>
  <div class="flex-style-column layout">
    <div class="content-container">
      <img class="big-banner" src="../../assets/images/jiankangguanli.png" />
    </div>
    <div style="padding-top: 1.625rem;">
      <div class="layout-content content-container">
        <title-broadcast class="scroll-dom scroll-dom-0" :showIcon="false" :showBC="false" title="脑卒中预防与治疗">
        </title-broadcast>
        <div class="flex-style-base" style="align-items: flex-start;margin-left: 1.5625rem;">
          <div class="text-content" style="margin-right: 1.5rem;">
            <p style="margin-top: 0.5rem;">脑卒中危害巨大，但是可防可控可治那么，如何进行有效的预防和控制脑卒中，及早治疗。</p>
            <p style="margin-top: 0.5rem;">
              我们依托国家远程卒中中心、互联网医疗诊治技术国家工程研究中心和国家卫生健康委心脑血管病防治技术师承项目，开展脑卒中健康管理工程，服务于国家百万减残和健康中国。
            </p>
          </div>
        </div>

        <div style="height:2.5rem"></div>
        <title-broadcast class="scroll-dom scroll-dom-1" title="健康服务项目" :showIcon="false" :showBC="false">
        </title-broadcast>

        <div class="flex-style-base combo-layout">
          <div v-for="(item,index) in comboData" class="flex-style-column combo-item-layout"
            :style="{'margin-left': index %3 == 0 ? '0' : '1.45rem'}">
            <div class="img-layout">
              <img class="img" :src="comboList[index].src" />
              <div class="title">
                {{item.title}}
              </div>
            </div>
            <div @click="toDetail(index, item)" class="enter-text"> 点击进入详情</div>
          </div>
        </div>
        <div style="height: 3.125rem;"></div>
      </div>
    </div>
    <div style="height: 3.25rem;background-color: #F7FCFF;"></div>
    <ComboDialog ref="dialog"></ComboDialog>
  </div>
</template>

<script>
  import TitleBroadcast from '../comp/TitleBroadcast.vue'
  import ComboDialog from './ComboDialog'
  import data from './data.js'
  export default {
    components: {
      TitleBroadcast,
      ComboDialog
    },
    data() {
      return {
        active: 0,
        comboData: data,
        comboList: [{
            src: require('../../assets/images/combo1.png')
          },
          {
            src: require('../../assets/images/combo2.png')
          },
          {
            src: require('../../assets/images/combo3.png')
          },
          {
            src: require('../../assets/images/combo4.png')
          },
          {
            src: require('../../assets/images/combo5.png')
          },
          {
            src: require('../../assets/images/combo6.png')
          }
        ],
        titleList: [{
            title: '1 脑卒中预防与治疗'
          },
          {
            title: '2 健康服务项目'
          }
        ]
      }
    },
    mounted() {

      // this.comboData.forEach((item, index) => {
      //   let sss = item.content.map(it => {
      //     return {
      //       lm: it[0].content,
      //       ry: it[1].content,
      //       mx: it[2].content,
      //       pc: it[3].content,
      //       jz: it[4].content
      //     }
      //   })
      //   item.content = sss

      // })

      // console.log(JSON.stringify(this.comboData))
    },
    methods: {
      toDetail(index, item) {
        console.log(item, 'item')
        this.$refs.dialog.show(index, item)
      }
    }
  }
</script>

<style lang="scss">
  .layout {

    .el-table th,
    .el-table tr th {
      background-color: rgba(17, 123, 208, 0.18);
      font-size: 1rem;
      color: #333333;
      font-weight: bold;
    }


    .el-table--striped .el-table__body tr.el-table__row--striped td {
      background-color: rgba(212, 231, 246, 0.50);
      color: #333333 !important;
      font-size: 1rem !important;
    }
  }
</style>

<style lang="scss" scoped>
  .layout {

    .big-banner {
      width: 100%;
      height: 24.375rem;
    }

    .layout-content {
      background: #FFFFFF;
      box-shadow: 0 4px 12px 0 rgba(2, 80, 180, 0.16);
      border-radius: 2px;
      padding-top: 3rem;
    }

    .text-content {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: #333333;
      letter-spacing: 0;
      line-height: 2.25rem;
      text-indent: 2.5rem;

      p {
        line-height: 2.25rem;
      }
    }

    .pointer:hover {
      background-color: #F6F7F8;
      border-radius: 0.25rem;
    }

  }

  .combo-layout {
    margin-left: 1.5625rem;
    flex-wrap: wrap;

    .combo-item-layout {
      margin-top: 1rem;
      width: 23rem;
      height: 30.75rem;
      background-image: linear-gradient(138deg, #2E8EFF, #52BCC8);
      border-radius: 0.5rem;
      align-items: center;

      .img-layout {
        width: 20.625rem;
        height: 23.4rem;
        margin-top: 1rem;
        position: relative;

        .img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }

        .title {
          background-color: rgba(255, 255, 255, 0.6);
          height: 2.5rem;
          z-index: 10;
          position: relative;
          padding-left: 1rem;
          line-height: 2.5rem;
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }

      .enter-text {
        width: 17.1875rem;
        height: 3.125rem;
        border-radius: 1.5625rem;
        background-color: #FFFFFF;
        text-align: center;
        line-height: 3.125rem;
        font-size: 1.5rem;
        color: #117BD0;
        cursor: pointer;
        margin-top: 1.5rem;
        font-weight: 600;
      }

    }
  }
</style>
