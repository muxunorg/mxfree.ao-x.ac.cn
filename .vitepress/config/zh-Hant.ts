import { defineConfig, type DefaultTheme, UserConfig } from 'vitepress';

// 定义语言变量，初始化为 'zh-Hant'，可根据实际情况修改，比如从环境变量获取等
// 修改此处，将 lang 声明为联合类型
const lang: 'zh-Hans' | 'zh-Hant' | 'en' | 'ja' | 'ko' | 'ru' = "zh-Hant";

// 根据语言获取要导出的配置对象的函数
function getConfigObjectToExport(): {
  zhHans: UserConfig<DefaultTheme.Config>;
  zhHant: UserConfig<DefaultTheme.Config>;
  en: UserConfig<DefaultTheme.Config>;
  ja: UserConfig<DefaultTheme.Config>;
  ko: UserConfig<DefaultTheme.Config>;
  ru: UserConfig<DefaultTheme.Config>;
  defaultConfig: UserConfig<DefaultTheme.Config>;
} {
  let configName = 'zhHans';
  if (lang === 'zh-Hans') {
    configName = 'zhHans';
  } else if (lang === 'zh-Hant') {
    configName = 'zhHant';
  } else if (lang === 'en') {
    configName = 'en';
  } else if (lang === 'ja') {
    configName = 'ja';
  } else if (lang === 'ko') {
    configName = 'ko';
  } else if (lang === 'ru') {
    configName = 'ru';
  }
  const configVariable: UserConfig<DefaultTheme.Config> = defineConfig({
    title: "慕讯公益加速器",
    description: "慕讯公益加速器，采用开源，可以说是安全性拉满，专门针对网络游戏延迟优化，一键因网络问题造成的游戏卡顿、延迟、掉线、加载缓慢等一系列问题，完全免费无套路，游戏体验提升10000%，永久免费加速，为你提供更好的游戏操作体验，为游戏玩家解决延迟、掉线、卡机，高ping等网络问题，有效提升网络稳定性，极致降低延迟。",
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
        message: `网页基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.${lang}" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a> 许可发布`,
        copyright: `版权所有 © 2019-${new Date().getFullYear()} 慕讯`
      },
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '浅/深色模式',
      lightModeSwitchTitle: '浅色模式',
      darkModeSwitchTitle: '深色模式',
      langMenuLabel: '语言切换',
      outline: {
        label: '页面导航'
      }
    }
  });
  const result = ({} as { [key in ('zhHans' | 'zhHant' | 'en' | 'ja' | 'ko' | 'ru' | 'defaultConfig')]: UserConfig<DefaultTheme.Config> });

  // 根据确定好的配置对象名称填充结果对象
  if (configName === 'zhHans') {
    result.zhHans = configVariable;
  } else if (configName === 'zhHant') {
    result.zhHant = configVariable;
  } else if (configName === 'en') {
    result.en = configVariable;
  } else if (configName === 'ja') {
    result.ja = configVariable;
  } else if (configName === 'ko') {
    result.ko = configVariable;
  } else if (configName === 'ru') {
    result.ru = configVariable;
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
                },
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  root: {
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