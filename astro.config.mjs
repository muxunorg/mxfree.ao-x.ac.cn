import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import mermaid from 'astro-mermaid';
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightDocSearch from '@astrojs/starlight-docsearch';

export default defineConfig({
	site: 'https://mxfree.ao-x.ac.cn',
	integrations: [
		mermaid(),
		starlight({
			title: '慕讯公益加速器', // 设置网站标题
			description: '免费加速器官方网站', // 设置网站描述
			logo: { // 在导航栏中设置一个 logo 图片
				light: './src/assets/logo.svg', // 导航栏中浅色模式 logo 图片
				dark: './src/assets/logo.svg',}, // 导航栏中深色模式 logo 图片
			tableOfContents: { // 配置每个页面右侧显示的目录
				minHeadingLevel: 2, // 从 <h2> 开始
				maxHeadingLevel: 4, }, // 到 <h4> 结束
			editLink: { // 启用 “编辑此页” 链接
				baseUrl: 'https://github.com/muxunorg/mxfree.ao-x.ac.cn/edit/dev/', // 设置 “编辑此页” 链接
			},
			locales: { // 设置多语言
				root: { // 简体中文文档在 `src/content/docs/` 中。
					label: '简体中文', // 设置网站支持简体中文作为语言
					lang: 'zh-CN', // 向浏览器告知页面语言
					dir: 'ltr', // 设置网站为从左到右
				},
			},
			social: [ // 社交媒体账户详情
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/muxunorg' }, // 添加 GitHub 社交媒体账户详情
			],
			// customCss: [ // 使用 CSS 文件来自定义 Starlight 网站的外观和风格
			// 		'./src/custom-styles.css', // 使用本地css
			// 		'@fontsource/roboto' // 使用模块css
			// ],
			expressiveCode: { // 代码块设置
				styleOverrides: { // 代码块样式
					borderRadius: '0.5rem' }, // 设置 0.5rem 的圆角
			},
			pagefind: true, // 开启网站搜索
			prerender: true, // 让网站为静态生成
			head: [ // 自定义标签到 Starlight 网站的 <head> 中
				{
					tag: 'link',
					attrs: {
						rel: "sitemap",
						href: '/sitemap-index.xml',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/js/clarity.js',
					},
				},
			],
			lastUpdated: false, // 控制页脚是否显示页面上次更新的时间
			pagination: false, // 定义页脚是否应包含上一页和下一页的链接
			favicon: '/favicon.svg', // 设置网站的默认 favicon 的路径
			titleDelimiter: '|', // 设置在页面的 <title> 标签里页面标题和网站标题之间的分隔符
			disable404Route: false, // 自定义 404 页面
			components: { // 提供组件的路径来覆盖 Starlight 的默认实现
				// SocialLinks: './src/components/MySocialLinks.astro',
			},
			plugins: [ // 使用自定义插件扩展 Starlight
				catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
					light: { flavor: "latte", accent: "sky" }
				}),
				starlightScrollToTop({
					tooltipText: '返回顶部',
					position: 'center',
				}),
				starlightDocSearch({
					appId: 'XZXFJQGA2B',
					apiKey: '738b5bdd09d11e17c27768d740590190',
					indexName: 'mxfree-ao-x-ac',
				}),
			],
			credits: false, // 启用网站页脚显示 “基于 Starlight 构建” 的链接。
			sidebar: [ // 配置网站的侧边栏导航项目
				{
					label: '首页',
					link: '/',
				},
				{
					label: '下载',
					link: '/dl/rc',
				},
				{
					label: '帮助文档',
					collapsed: true,
					items: [
						{
							label: "关于我们",
							collapsed: true,
							items: [
								{label: '慕讯团队',link: '/wiki/about',},
							],
						},
						{
							label: "基础问题",
							collapsed: true,
							items: [
								{label: '安装与卸载',link: '/wiki/install_and_uninstall',},
							],
						},
						{
							label: "进阶问题",
							collapsed: true,
							items: [
								{label: '软件问题',link: '/wiki/software',},
								{label: '硬件问题',link: '/wiki/hardware',},
							],
						},
					],
				},
				{
					label: '交流反馈',
					link: '/fb',
				},
				{
					label: '特别鸣谢',
					link: '/thanks',
				},
				{
					label: '协议',
					link: '/privacy/latest',
				},
			],
		}),
	],
});