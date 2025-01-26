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

# 가이드 참고하기

## 안내사항

> - 이 페이지는 유저들에게 더 좋은 사용 경험을 위해 만들어졌습니다
> - 이 기능은 향후 자주 발생하는 모든 문제를 지속적으로 업데이트할 예정입니다
> - 현재 시간은 2025년 1월 20일 월요일 20시 04분 16초입니다. 사용자는 사이드바를 사용하여 문제 해결을 위한 검색 및 이동을 수행할 수 있습니다
> - "현재 시간은 2025년 1월 20일 월요일 20시 05분 19초다. 위의 검색창을 사용하여 문제를 검색하고 확인할 수도 있습니다

## 부러워하는 정보팀

### 주요 구성원

<VPTeamMembers size="small" :members="index" />

### 비트 미궁

<VPTeamMembers size="small" :members="BitMaze" />

:::tip 提示
正在陆续添加中
:::
