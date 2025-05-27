<template>
  <div style="background-color: #2687D4;">
    <div class="flex-style-base link-layout content-container">
        <span>友情链接：</span>
        <span class="link-text">国家远程卒中中心</span>
        <div class="divier-line"></div>
        <span class="link-text">北京仁桥心脑血管防治研究所</span>
        <div class="divier-line"></div>
        <span class="link-text">国家互联网医疗工程中心</span>
    </div>
    <div class="line"></div>
    <div class="flex-style-base" style="min-height: 12.5rem;background-color: #2687D4;">
      <div class="content-container flex-style-column" style="align-items: center;">
        <div class="flex-style-base" style="justify-content: space-between;width: 100%;">
          <span><span class="text-san">地址</span> ：北京市西城区长椿街45号宣武医院</span>
          <span>北京脑血管病创新战略联盟版权所有  京ICP备06002033号-1</span>
        </div>

        <div class="flex-style-base" style="justify-content: space-between;width: 100%;">
          <span><span class="text-san">邮编</span>：100053</span>
          <span>Copyright 2022 National Medical Research Center for Cerebrovenous Diseases All Rights Reserved.</span>
        </div>

        <div class="flex-style-base" style="justify-content: space-between;width: 100%;">
          <span><span class="text-san">服务热线</span>：83922345</span>
          <span>京公网安备：110102003523号 京卫网审字【2008】第37号 </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .link-text {
    cursor: pointer;
  }

  .link-text:hover {
    color: #DEDEDE;
  }

  .divier-line {
    width: 1px;
    height:12px;
    margin: 0 16px;
    background-color:rgba(255,255,255,0.2);
  }

  .link-layout {
    background-color: #2687D4;
    height: 3.75rem;
    align-items:center;
  }

  .line {
    height: 0.0625rem;
    background-color: white;
  }

  span {
    display: block;
    color: white;
    line-height: 2.5rem;
    font-size: 1.125rem;
  }

  .text-san {
    display: inline-block;
    width: 80px;
    text-align: justify;
    text-align-last: justify;
    text-justify: distribute-all-lines;
    /*这行必加，兼容ie浏览器*/
  }
</style>
