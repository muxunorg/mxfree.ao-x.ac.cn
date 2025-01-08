import { defineConfig, type DefaultTheme, UserConfig } from 'vitepress';

// 定义语言变量，初始化为 'chi'，可根据实际情况修改，比如从环境变量获取等
// 修改此处，将 lang 声明为联合类型，使用ISO 639-2标准里对应的语言代码
const lang: 'chi' | 'zho' | 'eng' | 'jpn' | 'kor' | 'rus' = "zho";

// 根据语言获取要导出的配置对象的函数
function getConfigObjectToExport(): {
  chi: UserConfig<DefaultTheme.Config>;
  zho: UserConfig<DefaultTheme.Config>;
  eng: UserConfig<DefaultTheme.Config>;
  jpn: UserConfig<DefaultTheme.Config>;
  kor: UserConfig<DefaultTheme.Config>;
  rus: UserConfig<DefaultTheme.Config>;
  defaultConfig: UserConfig<DefaultTheme.Config>;
} {
  let configName = 'chi';
  if (lang === 'chi') {
    configName = 'chi';
  } else if (lang === 'zho') {
    configName = 'zho';
  } else if (lang === 'eng') {
    configName = 'eng';
  } else if (lang === 'jpn') {
    configName = 'jpn';
  } else if (lang === 'kor') {
    configName = 'kor';
  } else if (lang === 'rus') {
    configName = 'rus';
  }

  // 创建一个映射对象，将 lang 映射到对应的 IETF 语言标签。
  const ietfLanguageTagMapping: { [key in typeof lang]: string } = {
    chi: 'zh-Hans',
    // 简体中文
    zho: 'zh-Hant',
    // 繁体中文
    eng: 'en',
    // 英文
    jpn: 'ja',
    // 日文
    kor: 'ko',
    // 韩文
    rus: 'ru' // 俄文
  };

  // 获取当前语言的IETF语言标签
  const ietfLangTag = ietfLanguageTagMapping[lang];
  const configVariable: UserConfig<DefaultTheme.Config> = defineConfig({
    title: "慕訊公益加速器",
    description: "慕訊公益加速器-官方網站，官方網站，慕訊公益加速器，採用開源，可以說是安全性拉滿，專門針對網路遊戲延遲優化，一鍵因網路問題造成的遊戲卡頓、延遲、掉線、載入緩慢等一系列問題，完全免費無套路，遊戲體驗提升10000%，永久免費加速，為你提供更好的遊戲操作體驗，為遊戲玩家解決延遲、掉線、卡機，高ping等網路問題，有效提升網路穩定性， 極致降低延遲。",
    head: [['meta', {
      property: 'og:locale',
      content: lang
    }], ['meta', {
      property: 'og:title',
      content: "慕訊公益加速器 | 將免費進行到底"
    }], ['meta', {
      property: 'og:site_name',
      content: "慕訊公益加速器"
    }], ['meta', {
      name: 'keywords',
      content: "慕訊公益加速器,免費遊戲加速器,免費加速器,加速器,遊戲加速,網遊加速器,遊戲加速,英雄聯盟,Steam,戰網,Epic,Apex英雄,CSGO,PUBG,絕地求生,暗黑破壞神,英雄聯盟, Valorant,GTA 5,永劫無間,電競加速器,加速器福利,加速器口令碼,免費加速器,公益加速器"
    }]],
    themeConfig: {
      nav: nav(),
      sidebar: {
        [`/${lang}/wiki/`]: {
          base: `/${lang}/wiki/`,
          items: sidebarwiki()
        }
        //'/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
      },
      footer: {
        message: `網頁基於 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.${ietfLangTag}" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a>許可發佈`,
        copyright: `版權所有 © 2019-${new Date().getFullYear()} 慕訊`
      },
      docFooter: {
        prev: "上一頁",
        next: "下一頁"
      },
      outline: {
        label: "頁面導航"
      },
      lastUpdated: {
        text: "最後更新於",
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      langMenuLabel: "多語言",
      returnToTopLabel: "回到頂部",
      sidebarMenuLabel: "功能表",
      darkModeSwitchLabel: "主題",
      lightModeSwitchTitle: "切換到淺色模式",
      darkModeSwitchTitle: "切換到深色模式",
      skipToContentLabel: "跳轉到內容"
    }
  });
  const result = ({} as { [key in ('chi' | 'zho' | 'eng' | 'jpn' | 'kor' | 'rus' | 'defaultConfig')]: UserConfig<DefaultTheme.Config> });

  // 根据确定好的配置对象名称填充结果对象
  if (configName === 'chi') {
    result.chi = configVariable;
  } else if (configName === 'zho') {
    result.zho = configVariable;
  } else if (configName === 'eng') {
    result.eng = configVariable;
  } else if (configName === 'jpn') {
    result.jpn = configVariable;
  } else if (configName === 'kor') {
    result.kor = configVariable;
  } else if (configName === 'rus') {
    result.rus = configVariable;
  } else {
    result.defaultConfig = configVariable;
  }
  return result;
}

// 导出通过函数获取的配置对象（这里使用默认导出）
export default getConfigObjectToExport();
function nav(): DefaultTheme.NavItem[] {
  return [{
    text: "首頁",
    link: `/${lang}/`
  }, {
    text: "下載",
    link: `/${lang}/download/`
  }, {
    text: '捐助',
    link: `/${lang}/donate/`
  }, {
    text: "幫助文件",
    link: `/${lang}/wiki/`
  }, {
    text: "反饋問題",
    link: 'https://pd.qq.com/g/ii843tu61i'
  }, {
    text: "翻譯",
    items: [{
      text: "簡體中文介面",
      link: 'https://zh.crowdin.com/project/mxfree'
    }, {
      text: "英文介面",
      link: 'https://crowdin.com/project/mxfree'
    }]
  }];
}
function sidebarwiki(): DefaultTheme.SidebarItem[] {
  return [{
    text: "簡介",
    collapsed: false,
    link: 'index'
  }, {
    text: "基礎問題",
    collapsed: false,
    items: [{
      text: "安裝與卸載",
      link: 'Install and Uninstall'
    }]
  }, {
    text: "更多問題",
    collapsed: false,
    items: [{
      text: "軟體問題",
      link: 'Software'
    }, {
      text: "硬體問題",
      link: 'Hardware'
    }]
  }, {
    text: "聊天與反饋頻道",
    link: 'https://pd.qq.com/g/ii843tu61i'
  }];
}
/*
function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '参考',
            items: [
                [
                    text: '站点配置',
                    link: 'site-conf'
                ],
                {
                    text: 'frontmatter 配置',
                    link: 'frontmatter-conf'
                ],
                {
                    text: '运行时 API',
                    link: 'runtime-api'
                },
                {
                    text: 'CLI',
                    link: 'cli'
                },
                {
                    text: '默认主题',
                    base: '/zh/reference/default-theme-',
                    items: [
                        {
                            text: '概览',
                            link: 'config'
                        },
                        {
                            text: '导航栏',
                            link: 'nav'
                        },
                        {
                            text: '侧边栏',
                            link: 'sidebar'
                        },
                        {
                            text: '主页',
                            link: 'home-page'
                        },
                        {
                            text: '页脚',
                            link: 'footer'
                        },
                        {
                            text: '布局',
                            link: 'layout'
                        },
                        {
                            text: '徽章',
                            link: 'badge'
                        },
                        {
                            text: '团队页',
                            link: 'team-page'
                        },
                        {
                            text: '上下页链接',
                            link: 'prev-next-links'
                        },
                        {
                            text: '编辑链接',
                            link: 'edit-link'
                        },
                        {
                            text: '最后更新时间戳',
                            link: 'last-updated'
                        },
                        {
                            text: '搜索',
                            link: 'search'
                        },
                        {
                            text: 'Carbon Ads',
                            link: 'carbon-ads'
                        }
                    ]
                }
            ]
        }
    ]
}*/

// 创建一个映射对象，将 lang 映射到对应的 Algolia 根键名。
const algoliaKeyMapping: { [key in typeof lang]: string } = {
  chi: 'root',
  zho: 'zho',
  eng: 'en',
  jpn: 'ja',
  kor: 'ko',
  rus: 'ru'
};

// 获取当前语言的Algolia根键名
const algoliaRootKey = algoliaKeyMapping[lang];

// 直接导出带有动态键名的搜索配置
export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  [algoliaRootKey]: {
    placeholder: "搜索文件",
    translations: {
      button: {
        buttonText: "搜索文件",
        buttonAriaLabel: "搜索文件"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查詢條件",
          resetButtonAriaLabel: "清除查詢條件",
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: "搜索歷史",
          noRecentSearchesText: "沒有搜索歷史",
          saveRecentSearchButtonTitle: "保存至搜索歷史",
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: "從收藏中移除"
        },
        errorScreen: {
          titleText: "無法獲取結果",
          helpText: "你可能需要檢查你的網路連接"
        },
        footer: {
          selectText: "選擇",
          navigateText: "切換",
          closeText: "關閉",
          searchByText: "搜尋提供者"
        },
        noResultsScreen: {
          noResultsText: "無法找到相關結果",
          suggestedQueryText: "你可以嘗試查詢",
          reportMissingResultsText: "你認為該查詢應該有結果？",
          reportMissingResultsLinkText: "點擊反饋"
        }
      }
    }
  }
};