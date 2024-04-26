import { createProPlugin, mask } from '@formkit/pro'
import { generateClasses } from '@formkit/themes'
import { ru } from '@formkit/i18n'
import genesis from '@formkit/themes/tailwindcss/genesis'
import { genesisIcons } from '@formkit/icons'

const proPlugin = createProPlugin('fk-62b0de8f08', {
    mask
    // ... and any other Pro Inputs
  })

export default {
    icons: {
        ...genesisIcons,
    },
    plugins: [proPlugin],
    locales: { ru },
    locale: 'ru',
    config: {
        classes: generateClasses(genesis),
    }
}
