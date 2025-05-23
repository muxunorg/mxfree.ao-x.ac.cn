import { defineConfig, type DefaultTheme, UserConfig } from 'vitepress';

// 定义语言变量，初始化为 'chi'，可根据实际情况修改，比如从环境变量获取等
// 修改此处，将 lang 声明为联合类型，使用ISO 639-2标准里对应的语言代码
const lang: 'chi' | 'zho' | 'eng' | 'jpn' | 'kor' | 'rus' = "jpn";

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
    title: "",
    description: "ミューズメント・加速器-公式ウェブサイト、ミューズメント・スピードアップローダー、オープンソースソフトウェアを採用し、複数のネットワーク・遅延・ネットワークの問題により発生するゲームカード、遅延、遅延、アドバンテージ、ロードといった非常に幅広い問題に対応しています。ゲームが10000%へ行け、永久に無料です。",
    head: [['meta', {
      property: 'og:locale',
      content: lang
    }], ['meta', {
      property: 'og:title',
      content: "ミューズリーブースター | 同期に無料の"
    }], ['meta', {
      property: 'og:site_name',
      content: "Muxun チャリティー アクセラレーター"
    }], ['meta', {
      name: 'keywords',
      content: "ミューは公益加速器、無料の加速器、無料加速器、加速器、ゲーム加速、ゲーム加速、ゲームUPE、ヒーロー同盟、Steam、バトルグラウンド、Epic、Apex英雄、CSGO、PUBG、ジェ能力、ハッキングなどの組み合わせ、略式とG、COSA 5,Boorant、G、略式加速器、略奪"
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
        message: `Web ページ <a href="https://creativecommons.org/licenses/by-sc-sa/4.0/deed.${ietfLangTag}" target="_blank"><strong>CC BY-NC-SA 4.0</strong></a> によるライセンスがあります`,
        copyright: `著作権 ©️ 2019 -${new Date().getFullYear()} ホラス`
      },
      docFooter: {
        prev: "前のページ",
        next: "次へ"
      },
      outline: {
        label: "ページナビゲーション"
      },
      lastUpdated: {
        text: "更新しました",
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      langMenuLabel: "多言語対応",
      returnToTopLabel: "トップに戻る",
      sidebarMenuLabel: "メニュー",
      darkModeSwitchLabel: "テーマ",
      lightModeSwitchTitle: "ライトモードに切り替え",
      darkModeSwitchTitle: "ダークモードに切り替える",
      skipToContentLabel: "コンテンツにスキップ"
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
    text: "ホーム",
    link: `/${lang}/`
  }, {
    text: "ダウンロード",
    link: `/${lang}/download/`
  }, {
    text: "寄付する",
    link: `/${lang}/donate/`
  }, {
    text: "ドキュメント",
    link: `/${lang}/wiki/`
  }, {
    text: "コミュニケーションとフィードバック",
    link: 'https://pd.qq.com/g/ii843tu61i'
  }, {
    text: "翻訳",
    items: [{
      text: "中国語の UI",
      link: 'https://zh.crowdin.com/project/mxfree'
    }, {
      text: "英語で表示する",
      link: 'https://crowdin.com/project/mxfree'
    }]
  }];
}
function sidebarwiki(): DefaultTheme.SidebarItem[] {
  return [{
    text: "はじめに",
    collapsed: false,
    link: 'index'
  }, {
    text: "基本的な問題",
    collapsed: false,
    items: [{
      text: "インストールとアンインストール",
      link: 'Install and Uninstall'
    }]
  }, {
    text: "質問をふやす",
    collapsed: false,
    items: [{
      text: "ソフトウェアの問題",
      link: 'Software'
    }, {
      text: "ハードウェア問題",
      link: 'Hardware'
    }]
  }, {
    text: "チャットとフィードバックチャンネル",
    link: "at with feedback"
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
    placeholder: "ドキュメントを検索",
    translations: {
      button: {
        buttonText: "ドキュメントを検索",
        buttonAriaLabel: "ドキュメントを検索"
      },
      modal: {
        searchBox: {
          resetButtonTitle: "検索キーワードを削除",
          resetButtonAriaLabel: "検索キーワードを削除",
          cancelButtonText: "キャンセル",
          cancelButtonAriaLabel: "キャンセル"
        },
        startScreen: {
          recentSearchesTitle: "検索履歴",
          noRecentSearchesText: "検索結果なし",
          saveRecentSearchButtonTitle: "検索履歴に保存",
          removeRecentSearchButtonTitle: "検索履歴から削除",
          favoriteSearchesTitle: "お気に入り",
          removeFavoriteSearchButtonTitle: "お気に入りから削除"
        },
        errorScreen: {
          titleText: "結果を取得できません",
          helpText: "ネットワーク接続を確認する必要があるかもしれません"
        },
        footer: {
          selectText: "選択",
          navigateText: "切り替え",
          closeText: "閉じる",
          searchByText: "検索プロバイダ"
        },
        noResultsScreen: {
          noResultsText: "該当結果が見つかりませんでした。",
          suggestedQueryText: "問い合わせを使えるぞ。",
          reportMissingResultsText: "問い合わせがヒットするかしら？",
          reportMissingResultsLinkText: "クリック応答"
        }
      }
    }
  }
};