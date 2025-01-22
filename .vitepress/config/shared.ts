import { defineConfig } from 'vitepress'
import { search as chiSearch } from './chi'
import { search as zhoSearch } from './zho'
import { search as engSearch } from './eng'
import { search as jpnSearch } from './jpn'
import { search as korSearch } from './kor'
import { search as rusSearch } from './rus'


export const shared = defineConfig({
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
                        case 'zho':
                            return '複製程式碼'
                        case 'eng':
                            return 'Copy code'
                        case 'jpn':
                            return 'コードのコピー'
                        case 'kor':
                            return '코드 복사'
                        case 'rus':
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
            provider: 'algolia',
            options: {
                //algolia配置
                appId: 'XZXFJQGA2B',
                apiKey: '738b5bdd09d11e17c27768d740590190',
                indexName: 'mxfree-ao-x-ac',
                locales: {
                    ...chiSearch,
                    ...zhoSearch,
                    ...engSearch,
                    ...jpnSearch,
                    ...korSearch,
                    ...rusSearch
                }
            }
        },
        //广告
        //carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' },
    },
})
