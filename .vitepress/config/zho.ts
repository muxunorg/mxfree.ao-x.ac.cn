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
    title: "慕讯公益加速器",
    description: "慕讯公益加速器-官方网站，官方网站，慕讯公益加速器，采用开源，可以说是安全性拉满，专门针对网络游戏延迟优化，一键因网络问题造成的游戏卡顿、延迟、掉线、加载缓慢等一系列问题，完全免费无套路，游戏体验提升10000%，永久免费加速，为你提供更好的游戏操作体验，为游戏玩家解决延迟、掉线、卡机，高ping等网络问题，有效提升网络稳定性，极致降低延迟。",
    head: [['meta', {
      property: 'og:locale',
      content: lang
    }], ['meta', {
      property: 'og:title',
      content: '慕讯公益加速器 | 将免费进行到底'
    }], ['meta', {
      property: 'og:site_name',
      content: '慕讯公益加速器'
    }], ['meta', {
      name: 'keywords',
      content: '慕讯公益加速器,免费游戏加速器,免费加速器,加速器,游戏加速,网游加速器,游戏加速,英雄联盟,Steam,战网,Epic,Apex英雄,CSGO,PUBG,绝地求生,暗黑破坏神,英雄联盟,Valorant,GTA 5,永劫无间,电竞加速器,加速器福利,加速器口令码,免费加速器,公益加速器'
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
        message: `网页基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.${ietfLangTag}" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a> 许可发布`,
        copyright: `版权所有 © 2019-${new Date().getFullYear()} 慕讯`
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      outline: {
        label: '页面导航'
      },
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      skipToContentLabel: '跳转到内容'
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
    text: '首页',
    link: `/${lang}/`
  }, {
    text: '下载',
    link: `/${lang}/download/`
  }, {
    text: '捐助',
    link: `/${lang}/donate/`
  }, {
    text: '帮助文档',
    link: `/${lang}/wiki/`
  }, {
    text: '反馈问题',
    link: 'https://pd.qq.com/g/ii843tu61i'
  }, {
    text: '翻译',
    items: [{
      text: '中文界面',
      link: 'https://zh.crowdin.com/project/mxfree'
    }, {
      text: '英文界面',
      link: 'https://crowdin.com/project/mxfree'
    }]
  }];
}
function sidebarwiki(): DefaultTheme.SidebarItem[] {
  return [{
    text: '简介',
    collapsed: false,
    link: 'index'
  }, {
    text: '基础问题',
    collapsed: false,
    items: [{
      text: '安装与卸载',
      link: 'Install and Uninstall'
    }]
  }, {
    text: '更多问题',
    collapsed: false,
    items: [{
      text: '软件问题',
      link: 'Software'
    }, {
      text: '硬件问题',
      link: 'Hardware'
    }]
  }, {
    text: '聊天与反馈频道',
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
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
};