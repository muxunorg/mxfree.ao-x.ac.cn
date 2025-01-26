<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const index = [
  {
    avatar: '/img/Never again-avatar.jpg',
    name: 'Never again',
    title: '主要成员',
    links: [
      //{ icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/341626328' }
    ]
  },
  {
    avatar: 'https://github.com/ao-x.png',
    name: '梦文博',
    title: '主要成员',
    links: [
      { icon: 'github', link: 'https://github.com/ao-x' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/12825362' }
    ]
  }
]

const BitMaze = [
  {
    avatar: 'https://github.com/popocheam.png',
    name: 'PopQ',
    title: '团队成员',
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

# Помощь & Доки

## 说明

> - 此页面是为了各位用户更好的使用体验而创建
> - 后续此功能将会陆续更新所有高频遇到的问题
> - 您可以使用侧边栏跳转查找解决的遇到的问题
> - 您也可以使用上方的搜索框进行问题搜索查看

## 慕讯团队

### 主要成员

<VPTeamMembers size="small" :members="index" />

### 比特迷宫

<VPTeamMembers size="small" :members="BitMaze" />

:::tip 提示
正在陆续添加中
:::
