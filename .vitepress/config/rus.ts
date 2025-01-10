import { defineConfig, type DefaultTheme, UserConfig } from 'vitepress';

// 定义语言变量，初始化为 'chi'，可根据实际情况修改，比如从环境变量获取等
// 修改此处，将 lang 声明为联合类型，使用ISO 639-2标准里对应的语言代码
const lang: 'chi' | 'zho' | 'eng' | 'jpn' | 'kor' | 'rus' = "rus";

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
    title: "Благотворительный акселератор Муксун",
    description: "Mousse Public Welfare Accelerator - официальный сайт, официальный сайт, Mousse Public Welfare Accelerator, используя открытый исходный код, можно сказать, полон безопасности, специально оптимизирован для задержки онлайн-игр, игра в один клик, вызванная проблемами с сетью, вызванными рядом проблем, таких как зависание игры, задержка, отключение, медленная загрузка и т. Д., Совершенно бесплатно без рутины, игровой опыт улучшен на 10000%, а постоянное бесплатное ускорение обеспечивает вам лучший опыт работы в игре, решает сетевые проблемы, такие как задержка, отключение, зависание и высокий пинг для геймеров, а также эффективно улучшает стабильность сети. Минимизируйте задержку.",
    head: [['meta', {
      property: 'og:locale',
      content: lang
    }], ['meta', {
      property: 'og:title',
      content: "Акселератор благотворительности MOSSE | Она будет проводиться бесплатно до конца"
    }], ['meta', {
      property: 'og:site_name',
      content: "Благотворительный акселератор Муксун"
    }], ['meta', {
      name: 'keywords',
      content: "Ускоритель общественного благосостояния Muxun, бесплатный ускоритель игр, бесплатный ускоритель, ускоритель, ускорение игр, ускоритель онлайн-игр, ускорение игр, League of Legends, Steam, Battle.net, Epic, Apex Legends, CSGO, PUBG, PlayerUnknown's Battlegrounds, Diablo, League of Legends, Valorant, GTA 5, вечная катастрофа, ускоритель киберспорта, преимущества ускорителя, код пароля ускорителя, бесплатный ускоритель, ускоритель общественного благосостояния"
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
        message: `Веб-страница основана на <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.${ietfLangTag}" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a> Лицензионное распространение`,
        copyright: `Все права защищены © 2019-${new Date().getFullYear()} Муксун`
      },
      docFooter: {
        prev: "Предыдущая страница",
        next: "Следующая страница"
      },
      outline: {
        label: "Изменить язык"
      },
      lastUpdated: {
        text: "Обновлено",
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      langMenuLabel: "Оформление",
      returnToTopLabel: "Вернуться к началу",
      sidebarMenuLabel: "Меню",
      darkModeSwitchLabel: "Оформление",
      lightModeSwitchTitle: "Переключить на светлую тему",
      darkModeSwitchTitle: "Переключить на тёмную тему",
      skipToContentLabel: "Перейти к содержимому"
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
    text: "Дом",
    link: `/${lang}/`
  }, {
    text: "Загружать",
    link: `/${lang}/download/`
  }, {
    text: "Пожертвовать",
    link: `/${lang}/donate/`
  }, {
    text: "Помощь & Доки",
    link: `/${lang}/wiki/`
  }, {
    text: '交流与反馈',
    link: 'https://pd.qq.com/g/ii843tu61i'
  }, {
    text: "переводить",
    items: [{
      text: "Китайский интерфейс",
      link: 'https://zh.crowdin.com/project/mxfree'
    }, {
      text: "Английский интерфейс",
      link: 'https://crowdin.com/project/mxfree'
    }]
  }];
}
function sidebarwiki(): DefaultTheme.SidebarItem[] {
  return [{
    text: "Краткое введение",
    collapsed: false,
    link: 'index'
  }, {
    text: "Принципиальные вопросы",
    collapsed: false,
    items: [{
      text: "Установка и демонтаж",
      link: 'Install and Uninstall'
    }]
  }, {
    text: "Больше вопросов",
    collapsed: false,
    items: [{
      text: "Проблемы с программным обеспечением",
      link: 'Software'
    }, {
      text: "Проблемы с оборудованием",
      link: 'Hardware'
    }]
  }, {
    text: "Чат и канал обратной связи",
    link: 'Chat with feedback'
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
    placeholder: "Поиск в документации",
    translations: {
      button: {
        buttonText: "Поиск",
        buttonAriaLabel: "Поиск"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Сбросить поиск",
          resetButtonAriaLabel: "Сбросить поиск",
          cancelButtonText: "Отменить поиск",
          cancelButtonAriaLabel: "Отменить поиск"
        },
        startScreen: {
          recentSearchesTitle: "История поиска",
          noRecentSearchesText: "Нет истории поиска",
          saveRecentSearchButtonTitle: "Сохранить в истории поиска",
          removeRecentSearchButtonTitle: "Удалить из истории поиска",
          favoriteSearchesTitle: "Избранное",
          removeFavoriteSearchButtonTitle: "Удалить из избранного"
        },
        errorScreen: {
          titleText: "Невозможно получить результаты",
          helpText: "Вам может потребоваться проверить подключение к Интернету"
        },
        footer: {
          selectText: "выбрать",
          navigateText: "перейти",
          closeText: "закрыть",
          searchByText: "поставщик поиска"
        },
        noResultsScreen: {
          noResultsText: "Нет результатов для",
          suggestedQueryText: "Вы можете попытаться узнать",
          reportMissingResultsText: "Считаете, что поиск даёт ложные результаты？",
          reportMissingResultsLinkText: "Нажмите на кнопку «Обратная связь»"
        }
      }
    }
  }
};