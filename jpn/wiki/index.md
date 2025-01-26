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
  }，
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

# ドキュメント

## 説明

> - ユーザーが体験した方がより良いページです
> - 今後の機能では、全ての高周波数で問題を報告します。
> - 出会いをサイドバーで探すための質問しかもサイドバーを使用する
> - 検索フィールドで検索することもできます．

## ミューダ

### 主要メンバー

<VPTeamMembers size="small" :members="index" />

### ビット迷路

<VPTeamMembers size="small" :members="BitMaze" />

:::tip 提示
正在陆续添加中
:::
