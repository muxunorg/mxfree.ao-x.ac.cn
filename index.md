---
layout: home
title: 首页
hero:
  name: "慕讯公益加速器"
  text: "将免费进行到底"
  tagline: "支持系统: Windows XP-12"
  image:
    src: /img/logo.avif
    alt: logo
  actions:
    - theme: brand
      text: 立即下载
      link: ./download
    - theme: alt
      text: 捐助我们
      link: ./donate

features:
  - title: 支持各大平台加速
    details: STEAM、ORIGIN、UPLAY、EPIC
  - title: 支持各类设备加速
    details: PC、Switch、PS4、PS5、XBox
  - title: 帮助我们一起翻译 
    details: <a title="Crowdin" target="_blank" href="https://zh.crowdin.com/project/mxfree"><img src="https://badges.crowdin.net/mxfree/localized.svg"></a>
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>