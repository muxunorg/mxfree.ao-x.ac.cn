<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const index = [
  {
    avatar: '/img/Never again-avatar.jpg',
    name: 'Never again',
    title: '主要成員',
    links: [
      //{ icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/341626328' }
    ]
  },
  {
    avatar: 'https://github.com/ao-x.png',
    name: '夢文博',
    title: '主要成員',
    links: [
      { icon: 'github', link: 'https://github.com/ao-x' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/12825362' }
    ]
  }
]

const BitMaze = [
  {
    avatar: '/img/Never again-avatar.jpg',
    name: 'Never again',
    title: '主要成員',
    links: [
      //{ icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/341626328' }
    ]
  },
  {
    avatar: 'https://github.com/ao-x.png',
    name: '夢文博',
    title: '主要成員',
    links: [
      { icon: 'github', link: 'https://github.com/ao-x' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/12825362' }
    ]
  },
  {
    avatar: 'https://github.com/popocheam.png',
    name: 'PopQ',
    title: '團隊成員',
    links: [
      { icon: 'github', link: 'https://github.com/popocheam' },
      //{ icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  /*{
    avatar: 'https://github.com/kiaking.png',
    name: 'Kia King Ishii',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' }
    ]
  }*/
]
</script>

# 幫助文件

## 說明

> - 此頁面是為了各位用戶更好的使用體驗而創建
> - 後續此功能將會陸續更新所有高頻遇到的問題
> - 您可以使用側邊欄跳轉查找解決的遇到的問題
> - 您也可以使用上方的搜索框進行問題搜索查看

## 慕訊團隊

### 主要成員

<VPTeamMembers size="small" :members="index" />

### 比特迷宮

<VPTeamMembers size="small" :members="BitMaze" />

:::tip 提示
正在陸續添加中
:::
