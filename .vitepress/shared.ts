import { defineConfig } from 'vitepress'
//import { search as zh_TWSearch } from './zh_Hant'
//import { search as en_USSearch } from './en_US'
//import { search as ja_JPSearch } from './ja_JP'
//import { search as ko_KRSearch } from './ko_KR'
//import { search as ru_RUSearch } from './ru_RU'

export const shared = defineConfig({
    title: '慕讯公益加速器',
    rewrites: {
        'zh-Hans/:rest*': ':rest*'
    },

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    // markdown配置
    markdown: {
        // 行号显示
        lineNumbers: true,
        // 数学公式
        math: true,
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
                        case 'zh_Hant':
                            return '複製程式碼'
                        case 'en_US':
                            return 'Copy code'
                        case 'ja_JP':
                            return 'コードのコピー'
                        case 'ko_KR':
                            return '코드 복사'
                        case 'ru_RU':
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
        hostname: 'https://vitepress.dev',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/avif', href: '/img/logo.avif' }],
        ['link', { rel: 'icon', type: 'image/jxl', href: '/img/logo.avif' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/img/logo.avif' }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/img/logo.avif' }],
        ['meta', { name: 'baidu-site-verification', content: 'codeva-fZt7LzgPow' }],
        ['meta', { name: 'sogou_site_verification', content: 'JhD338Vd3M' }],
        ['meta', { name: 'shenma-site-verification', content: 'e67891e92910d08c054edb6124b844b6_1730563596' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://mxfree.ao-x.ac.cn/' }],
        ['meta', { property: 'og:locale', content: 'zh-hans' }],
        ['meta', { property: 'og:title', content: '慕讯公益加速器 | 将免费进行到底' }],
        ['meta', { property: 'og:site_name', content: '慕讯公益加速器' }],
        ['meta', { property: 'og:image', content: 'https://mxfree.ao-x.ac.cn/vitepress-og.jpg' }],
        ['meta', { name: 'keywords', content: '慕讯公益加速器,免费游戏加速器,免费加速器,加速器,游戏加速,网游加速器,游戏加速,英雄联盟,Steam,战网,Epic,Apex英雄,CSGO,PUBG,绝地求生,暗黑破坏神,英雄联盟,Valorant,GTA 5,永劫无间,电竞加速器,加速器福利,加速器口令码,免费加速器,公益加速器' }],
        ['script', {type : 'text/javascript', src: '/js/bd1.js', async: '' }],
    ],

    themeConfig: {
        /*
        logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],*/
        //搜索
        /*search: {
            provider: 'algolia',
            options: {
                appId: '8J64VVRP8K',
                apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
                indexName: 'vitepress',
                locales: {
                    ...en_USSearch,
                    ...ptSearch,
                    ...ruSearch,
                    ...esSearch,
                    ...koSearch,
                    ...faSearch
                }
            }
        },*/
        //广告
        //carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' },
    },
})