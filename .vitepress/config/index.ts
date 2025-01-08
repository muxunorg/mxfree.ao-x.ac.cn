import { defineConfig } from 'vitepress';
import{ shared } from './shared.js'; // 导入标准配置
// 改为默认导入，这里变量名可自行定义，方便后续使用即可，比如用 chiConfig 表示导入的简体中文配置对象
import chiConfig from './chi';  // 导入简体中文配置
import zhoConfig from './zho';  // 导入繁体中文配置
import engConfig from './eng';  // 导入英语配置
import jpnConfig from './jpn';  // 导入日语配置
import korConfig from './kor';  // 导入韩语配置
import rusConfig from './rus';  // 导入俄语配置

export default defineConfig({
    ...shared,
    locales: {
        root: { lang: 'chi', label: '简体中文', link: '/chi/',...chiConfig.chi },
        zho: { lang: 'zho', label: '繁體中文', link: '/zho/',...zhoConfig.zho },
        eng: { lang: 'eng', label: 'English', link: '/eng/',...engConfig.eng },
        jpn: { lang: 'jpn', label: '日本語', link: '/jpn/',...jpnConfig.jpn },
        kor: { lang: 'kor', label: '한국어', link: '/kor/',...korConfig.kor },
        rus: { lang: 'rus', label: 'Русский', link: '/rus/',...rusConfig.rus }
    }
})