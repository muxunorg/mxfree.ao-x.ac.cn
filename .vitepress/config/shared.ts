import { defineConfig } from 'vitepress'
import { search as zhHansSearch } from './zh-Hans'
import { search as zhHantSearch } from './zh-Hant'
import { search as enSearch } from './en'
import { search as jaSearch } from './ja'
import { search as koSearch } from './ko'
import { search as ruSearch } from './ru'


export const shared = defineConfig({
    title: '慕讯公益加速器',

    rewrites: {
        '/:rest*': 'zh-Hans/:rest*',
    },

    // markdown配置
    markdown: {
        // 行号显示
        lineNumbers: true,
        // 数学公式
        math: false,
        // 使用 `!!code` 防止转换
        codeTransformers: [
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ],
        config(md) {
            // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
            // 复制代码国际化
            const fence = md.renderer.rules.fence!
            md.renderer.rules.fence = function (tokens, idx, options, env, self) {
                const { localeIndex = 'root' } = env
                const codeCopyButtonTitle = (() => {
                    switch (localeIndex) {
                        case 'zhHant':
                            return '複製程式碼'
                        case 'en':
                            return 'Copy code'
                        case 'ja':
                            return 'コードのコピー'
                        case 'ko':
                            return '코드 복사'
                        case 'ru':
                            return 'Скопировать код'
                        default:
                            return '复制代码'
                    }
                })()
                return fence(tokens, idx, options, env, self).replace(
                    '<button title="Copy Code" class="copy"></button>',
                    `<button title="${codeCopyButtonTitle}" class="copy"></button>`
                )
            }
            // 组件插入h1标题下
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options);
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
                return htmlResult;
            }
        },
        // 开启图片懒加载
        image: {
            lazyLoading: true
        },
    },
    //站点地图
    sitemap: {
        hostname: 'https://mxfree.ao-x.ac.cn',
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/avif', href: '/img/logo.avif' }],
        ['link', { rel: 'icon', type: 'image/jxl', href: '/img/logo.jxl' }],
        ['link', { rel: 'icon', type: 'image/jpeg', href: '/img/logo.jpg' }],
        ['meta', { name: 'baidu-site-verification', content: 'codeva-fZt7LzgPow' }],
        ['meta', { name: 'sogou_site_verification', content: 'JhD338Vd3M' }],
        ['meta', { name: 'shenma-site-verification', content: 'e67891e92910d08c054edb6124b844b6_1730563596' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://mxfree.ao-x.ac.cn/' }],
        ['meta', { property: 'og:image', content: 'https://mxfree.ao-x.ac.cn/vitepress-og.jpg' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
    ],

    themeConfig: {
        logo: '/img/logo.avif',

        //搜索
        search: {
            provider: 'local',// local/algolia
            options: {
                //algolia配置
                /*
                appId: '**********',
                apiKey: '*******************',
                indexName: '**********',*/
                locales: {
                    ...zhHansSearch,
                    ...zhHantSearch,
                    ...enSearch,
                    ...jaSearch,
                    ...koSearch,
                    ...ruSearch
                }
            }
        },
        //广告
        //carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' },
    },
})