import { defineConfig } from 'vitepress';
import{ shared } from './shared.js';
// 改为默认导入，这里变量名可自行定义，方便后续使用即可，比如用 zhHansConfig 表示导入的简体中文配置对象
import zhHansConfig from './zh-Hans';
import zhHantConfig from './zh-Hant';
import enConfig from './en';
import jaConfig from './ja';
import koConfig from './ko';
import ruConfig from './ru';

export default defineConfig({
    ...shared,
    locales: {
        root: { lang: 'zh-Hans', label: '简体中文', link: '/zh-Hans/',...zhHansConfig.zhHans },
        zh_TW: { lang: 'zh-Hant', label: '繁體中文', link: '/zh-Hant/',...zhHantConfig.zhHant },
        en: { lang: 'en', label: 'English', link: '/en/',...enConfig.en },
        ja: { lang: 'ja', label: '日本語', link: '/ja/',...jaConfig.ja },
        ko: { lang: 'ko', label: '한국어', link: '/ko/',...koConfig.ko },
        ru: { lang: 'ru', label: 'Русский', link: '/ru/',...ruConfig.ru }
    }
})