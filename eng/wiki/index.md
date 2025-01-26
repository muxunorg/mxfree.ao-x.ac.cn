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
  },
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

# Help Documentation

## Note

> - This page is created for better user experience
> - Follow this feature will update all HF problems
> - You can use sidebar to jump to find a problem
> - You can also view questions using the search box above

## Mute Teams

### Main members

<VPTeamMembers size="small" :members="index" />

### Bit Maze

<VPTeamMembers size="small" :members="BitMaze" />

:::tip 提示
正在陆续添加中
:::
