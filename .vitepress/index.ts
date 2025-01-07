import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh_Hans } from './zh_Hans'
import { zh_Hant } from './zh_Hant'
import { en } from './en'
import { ja } from './ja'
import { ko } from './ko'
import { ru } from './ru'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: '简体中文', ...zh_Hans },
        zh: { label: '繁體中文', ...zh_Hant },
        pt: { label: 'English', ...en },
        ru: { label: '日本語', ...ja },
        es: { label: '한국어', ...ko },
        ko: { label: 'Русский', ...ru }
    }
})