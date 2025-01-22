import { defineConfig, type DefaultTheme, UserConfig } from 'vitepress';

// 定义语言变量，初始化为 'chi'，可根据实际情况修改，比如从环境变量获取等
// 修改此处，将 lang 声明为联合类型，使用ISO 639-2标准里对应的语言代码
const lang: 'chi' | 'zho' | 'eng' | 'jpn' | 'kor' | 'rus' = "eng";

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
    title: "Muxun Public Benefit Accelerator",
    description: "Mute Charity Accelerator - official websites, official websites, Mute Charity Accelerator, using open sources, which can be described as a security rushing, dedicated to network game delay optimization, one-click game carton, delays, breakdown, slow loading due to network problems, completely free of charge, game experience rises by 10000%, permanent free acceleration, better game operation experience for you and effective network stability for players to solve network problems such as delays, dropouts, cards, high-ping, etc.",
    head: [['meta', {
      property: 'og:locale',
      content: lang
    }], ['meta', {
      property: 'og:title',
      content: "Muxun Public Benefit Accelerator | will go free to show"
    }], ['meta', {
      property: 'og:site_name',
      content: "Muxun Public Benefit Accelerator"
    }], ['meta', {
      name: 'keywords',
      content: "Enemy the pro accelerator, free game accelerator, free accelerator, accelerator, game accelerator, web accelerator, game accelerator, game accelerator, Hero Alliance, Steam,War Network,Epic,Apex Hero,CSGO,PUBG for life, dark destruction of gods, Heroes, Valorant, GTA 5, eternal hijacking, electric accelerator, accelerator welfare, accelerator code, free accelerator, public benefit accelerator"
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
        message: `The web page is based on <a ref="https://creativeecommons.org/licenses/by-nc-sa/4.0/deed.${ietfLangTag}`,
        copyright: `Copyright ©️ 2019-${new Date().getFullYear()} Ambient`
      },
      docFooter: {
        prev: "Previous",
        next: "Next"
      },
      outline: {
        label: "Page navigation"
      },
      lastUpdated: {
        text: "Last updated on",
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      langMenuLabel: "Multilingual",
      returnToTopLabel: "Back to top",
      sidebarMenuLabel: "menu",
      darkModeSwitchLabel: "topic",
      lightModeSwitchTitle: "Switch to light mode",
      darkModeSwitchTitle: "Switch to dark mode",
      skipToContentLabel: "Go to content"
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
    text: "Home",
    link: `/${lang}/`
  }, {
    text: "Download",
    link: `/${lang}/download/`
  }, {
    text: "Donate",
    link: `/${lang}/donate/`
  }, {
    text: "Help Documentation",
    link: `/${lang}/wiki/`
  }, {
    text: "Communication & Feedback",
    link: 'https://pd.qq.com/g/ii843tu61i'
  }, {
    text: "Translate",
    items: [{
      text: "Chinese Interface",
      link: 'https://zh.crowdin.com/project/mxfree'
    }, {
      text: "English Interface",
      link: 'https://crowdin.com/project/mxfree'
    }]
  }];
}
function sidebarwiki(): DefaultTheme.SidebarItem[] {
  return [{
    text: "Introduction",
    collapsed: false,
    link: 'index'
  }, {
    text: "Basic issues",
    collapsed: false,
    items: [{
      text: "Install and uninstall",
      link: 'Install and Uninstall'
    }]
  }, {
    text: "More Questions",
    collapsed: false,
    items: [{
      text: "Software issues",
      link: 'Software'
    }, {
      text: "Hardware Issues",
      link: 'Hardware'
    }]
  }, {
    text: "Chat & Feedback Channel",
    link: "Chat with feed"
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
    placeholder: "Search documentation",
    translations: {
      button: {
        buttonText: "Search documentation",
        buttonAriaLabel: "Search documentation"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Clear query condition",
          resetButtonAriaLabel: "Clear query condition",
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "Cancel"
        },
        startScreen: {
          recentSearchesTitle: "Search History",
          noRecentSearchesText: "No search history",
          saveRecentSearchButtonTitle: "Save to Search History",
          removeRecentSearchButtonTitle: "Remove from search history",
          favoriteSearchesTitle: "Favorite",
          removeFavoriteSearchButtonTitle: "Remove from favorites"
        },
        errorScreen: {
          titleText: "Unable to fetch results",
          helpText: "You may need to check your internet connection"
        },
        footer: {
          selectText: "Select",
          navigateText: "Toggle",
          closeText: "Close",
          searchByText: "Search Providers"
        },
        noResultsScreen: {
          noResultsText: "Could not find relevant results",
          suggestedQueryText: "You can try to query",
          reportMissingResultsText: "Do you think the query should have results?",
          reportMissingResultsLinkText: "Click Feedback"
        }
      }
    }
  }
};