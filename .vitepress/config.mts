import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  sitemap: {
    hostname: 'https://mxfree.ao-x.ac.cn/',
  },
  locales: {
    root: {
      title: "慕讯公益加速器",
      label: '简体中文',
      lang: 'zh-hans',
      description: "慕讯公益加速器，采用开源，可以说是安全性拉满，专门针对网络游戏延迟优化，一键因网络问题造成的游戏卡顿、延迟、掉线、加载缓慢等一系列问题，完全免费无套路，游戏体验提升10000%，永久免费加速，为你提供更好的游戏操作体验，为游戏玩家解决延迟、掉线、卡机，高ping等网络问题，有效提升网络稳定性，极致降低延迟。",
      head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-fZt7LzgPow' }],
        ['meta', { name: 'sogou_site_verification', content: 'JhD338Vd3M' }],
        ['meta', { name: 'shenma-site-verification', content: 'e67891e92910d08c054edb6124b844b6_1730563596' }],
        ['meta', { name: 'keywords', content: '慕讯公益加速器,免费游戏加速器,免费加速器,加速器,游戏加速,网游加速器,游戏加速,英雄联盟,Steam,战网,Epic,Apex英雄,CSGO,PUBG,绝地求生,暗黑破坏神,英雄联盟,Valorant,GTA 5,永劫无间,电竞加速器,加速器福利,加速器口令码,免费加速器,公益加速器' }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: '首页', link: './' },
          { text: '下载', link: './download' },
          { text: '捐助', link: './donate' },
          { text: '帮助',
            items: [
              { text: '常见问题', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: '反馈问题', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: '翻译', link: 'https://zh.crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel:'浅/深色模式',
        lightModeSwitchTitle: '浅色模式',
        darkModeSwitchTitle: '深色模式',
        langMenuLabel: '语言切换',
        outline: {
          label: '页面导航'
        },
        footer: {
          message: '网页基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a> 许可发布',
          copyright: `版权所有 © 2019-${new Date().getFullYear()} 慕讯`
        },
      },
    },
    zh_TW: {
      title: "慕訊公益加速器",
      label: '繁體中文',
      lang: 'zh-hant',
      link: '/zh_TW',
      description: "慕訊公益加速器，採用開源，可以說是安全性拉滿，專門針對網路遊戲延遲優化，一鍵因網路問題造成的遊戲卡頓、延遲、斷線、加載緩慢等一系列問題，完全免費無套路 ，遊戲體驗提升10000%，永久免費加速，提供你更好的遊戲操作體驗，為遊戲玩家解決延遲、斷線、卡機，高ping等網路問題，有效提升網路穩定性，極致降低延遲。",
      head: [
        ['meta', { name: 'keywords', content: '慕訊公益加速器,免費遊戲加速器,免費加速器,加速器,遊戲加速,網遊加速器,遊戲加速,英雄聯盟,Steam,戰網,Epic,Apex英雄,CSGO,PUBG,絕地求生,暗黑破壞神,英雄聯盟, Valorant,GTA 5,永劫無間,電競加速器,加速器福利,加速器口令碼,免費加速器,公益加速器' }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: '首頁', link: './' },
          { text: '下載', link: './download' },
          { text: '捐款', link: './donate' },
          { text: '幫助',
            items: [
              { text: '常見問題', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: '回饋問題', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: '翻譯', link: 'https://zh.crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: '回到頂部',
        darkModeSwitchLabel:'淺/深色模式',
        lightModeSwitchTitle: '淺色模式',
        darkModeSwitchTitle: '深色模式',
        langMenuLabel: '語言切換',
        outline: {
          label: '頁面導航'
        },
        footer: {
          message: '網頁基於 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant" target="_blank">CC BY-NC-SA 4.0</a> 授權發布',
          copyright: `版權所有 © 2019-${new Date().getFullYear()} 慕訊`
        },
      },
    },
    en_US: {
      title: "Muxun Charity Accelerator",
      label: 'English',
      lang: 'en',
      link: '/en_US',
      description: "Muxun Public Welfare Accelerator is open source and can be said to be fully secure. It is specifically designed to optimize online game delays. It can solve a series of problems such as game freezes, delays, disconnections, slow loading, etc. caused by network problems with one click. It is completely free and has no tricks. The gaming experience is improved by 10000%. It is permanently free to accelerate, providing you with a better gaming operation experience. It can solve network problems such as delays, disconnections, freezes, high ping, etc. for game players, effectively improve network stability, and minimize delays.",
      head: [
        ['meta', { name: 'keywords', content: 'Muxun Charity Accelerator, Free Game Accelerator, Free Accelerator, Accelerator, Game Accelerator, Online Game Accelerator, Game Accelerator, League of Legends, Steam, Battle.net, Epic, Apex Legends, CSGO, PUBG, PlayerUnknown Battlegrounds, Diablo, League of Legends, Valorant, GTA 5, Naraka: Bladepoint, E-sports Accelerator, Accelerator Welfare, Accelerator Password Code, Free Accelerator, Charity Accelerator' }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: 'Home', link: './' },
          { text: 'Download', link: './download' },
          { text: 'Donate', link: './donate' },
          { text: 'Help',
            items: [
              { text: 'FAQ', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: 'Feedback Question', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: 'Translate', link: 'https://crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: 'Back to top',
        darkModeSwitchLabel:'Slight/Dark Mode',
        lightModeSwitchTitle: 'Light mode',
        darkModeSwitchTitle: 'Dark mode',
        langMenuLabel: 'Language switch',
        outline: {
          label: 'Page Navigation'
        },
        footer: {
          message: 'Web page based on <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en" target="_blank">CC BY-NC-SA 4.0</a> Licensing',
          copyright: `Copyright © 2019-${new Date().getFullYear()} Amphus`
        },
      },
    },
    ja_JP: {
      title: "ミューズの公益加速器",
      label: '日本語',
      lang: 'ja',
      link: '/ja_JP',
      description: "ミューズメント・スピードアップ装置は、オープンソースのミニゲームのレイテンシの改良、ハードウェアウォレット、ラグ、遅延、ロード、遅延などの多くの問題からゲームのスコアを11000まで上げ、ゲームの改善のための無料加速を有効にすることで、ゲームの遅延、ギア、ギア除去、pingといったネットワークの問題の安定性とネットワークの問題を得ることができます。",
      head: [
        ['meta', { name: 'keywords', content: 'ミューは公益加速器、無料の加速器、無料加速器、加速器、ゲーム加速、ゲーム加速、ゲームUPE、ヒーロー同盟、Steam、バトルグラウンド、Epic、Apex英雄、CSGO、PUBG、ジェ能力、ハッキングなどの組み合わせ、略式とG、COSA 5,Boorant、G、略式加速器、略奪' }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: 'ホーム', link: './' },
          { text: 'ダウンロード', link: './download' },
          { text: '寄付する', link: './donate' },
          { text: 'ヘルプ',
            items: [
              { text: 'よくある質問', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: 'バグの報告', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: '翻訳', link: 'https://crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: 'トップに戻る',
        darkModeSwitchLabel:'ライト/ダークモード',
        lightModeSwitchTitle: 'ライト',
        darkModeSwitchTitle: 'ダークモード',
        langMenuLabel: '言語',
        outline: {
          label: 'ページナビゲーション'
        },
        footer: {
          message: 'Webページは <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ja" target="_blank">CC BY-NC-SA 4.0</a> ライセンスです',
          copyright: `Copyright © 2019-${new Date().getFullYear()} ミューダ`
        },
      },
    },
    ko_KR: {
      title: "무쉰 공익 가속기",
      label: '한국어',
      lang: 'ko',
      link: '/ko_KR',
      description: "Muxun Public Welfare Accelerator는 오픈 소스이며 보안이 풍부하다고 할 수 있습니다. 특히 온라인 게임 지연에 최적화되어 네트워크 문제로 인한 게임 정지, 지연, 연결 끊김 및 느린 로딩 등의 문제를 해결할 수 있습니다. 한 번의 클릭으로 완전히 무료이며 게임 경험이 10,000% 향상되고 영구 무료 가속을 통해 지연, 연결 끊김, 정지 및 높은 핑과 같은 네트워크 문제를 해결하여 더 나은 게임 운영 경험을 제공합니다. 게이머를 위한 네트워크 안정성을 효과적으로 개선하고 지연 시간을 대폭 줄여줍니다",
      head: [
        ['meta', { name: 'keywords', content: "Muxun 공공 복지 가속기, 무료 게임 가속기, 무료 가속기, 가속기, 게임 가속기, 온라인 게임 가속기, 게임 가속기, League of Legends, Steam, Battle.net, Epic, Apex Legends, CSGO, PUBG, PlayerUnknown's Battlegrounds, Diablo, League of 레전드, 발로란트, GTA 5, 영원한 재난, e스포츠 액셀러레이터, 액셀러레이터 혜택, 액셀러레이터 비밀번호 코드, 무료 액셀러레이터, 공익 액셀러레이터" }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: '처음', link: './' },
          { text: '다운로드', link: './download' },
          { text: '기부', link: './donate' },
          { text: '돕다',
            items: [
              { text: '일반적인 문제', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: '피드백 질문', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: '번역하다', link: 'https://crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: '맨 위로',
        darkModeSwitchLabel:'밝음/어두움 모드',
        lightModeSwitchTitle: '조명 모드',
        darkModeSwitchTitle: '다크 모드',
        langMenuLabel: '언어 스위치',
        outline: {
          label: '웹페이지 탐색'
        },
        footer: {
          message: '이 페이지는 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" target="_blank">CC BY-NC-SA 4.0</a> 라이센스에 따라 게시되었습니다',
          copyright: `저작권 © 2019-${new Date().getFullYear()} MuXun`
        },
      },
    },
    ru_RU: {
      title: "Благотворительный акселератор Муксун",
      label: 'Русский',
      lang: 'ru',
      link: '/ru_RU',
      description: "Muxun Public Welfare Accelerator имеет открытый исходный код и, можно сказать, полностью безопасен. Он специально оптимизирован для задержек в онлайн-играх. Он может решить ряд проблем, таких как зависания игры, задержки, отключения и медленная загрузка, вызванные проблемами с сетью. Один клик Это совершенно бесплатно и без каких-либо хитростей, качество игры улучшено на 10 000%, а постоянное бесплатное ускорение обеспечивает лучшее качество работы игры, решая такие проблемы с сетью, как задержки, отключения, зависания и высокий пинг. геймеров, эффективно улучшая стабильность сети и значительно сокращая задержки.",
      head: [
        ['meta', { name: 'keywords', content: "Ускоритель общественного благосостояния Muxun, бесплатный ускоритель игр, бесплатный ускоритель, ускоритель, ускорение игр, ускоритель онлайн-игр, ускорение игр, League of Legends, Steam, Battle.net, Epic, Apex Legends, CSGO, PUBG, PlayerUnknown's Battlegrounds, Diablo, League of Legends, Valorant, GTA 5, вечная катастрофа, ускоритель киберспорта, преимущества ускорителя, код пароля ускорителя, бесплатный ускоритель, ускоритель общественного благосостояния" }],
        ['link', { rel: 'icon', href: '/img/logo.avif' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
      ],
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/img/logo.avif',
        nav: [
          { text: 'титульная страница', link: './' },
          { text: 'скачать', link: './download' },
          { text: 'Пожертвовать', link: './donate' },
          { text: 'помощь',
            items: [
              { text: 'Общая проблема', link: 'https://txc.qq.com/products/647098/faqs-more' },
              { text: 'Вопрос обратной связи', link: 'https://txc.qq.com/products/647098' },
            ]
          },
          { text: 'переводить', link: 'https://crowdin.com/project/mxfree' },
        ],
        returnToTopLabel: 'Вернуться наверх',
        darkModeSwitchLabel:'Светлый/Темный режим',
        lightModeSwitchTitle: 'световой режим',
        darkModeSwitchTitle: 'темный режим',
        langMenuLabel: 'переключатель языка',
        outline: {
          label: 'Навигация по веб-странице'
        },
        footer: {
          message: 'Страница публикуется под лицензией <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ru" target="_blank">CC BY-NC-SA 4.0</a>',
          copyright: `Copyright © 2019-${new Date().getFullYear()} МуСюнь`
        },
      },
    },
  },
})