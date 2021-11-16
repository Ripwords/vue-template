import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Icons(),
    Components({
      dirs: ['src/components'],
      resolvers: [
        IconsResolver({
          prefix: 'i'
        })
      ]
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts'
    }),
    VitePWA({
      base: '/',
      srcDir: 'src',
      manifest: {}
    })
  ]
})
