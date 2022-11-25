// https://nuxt.com/docs/api/configuration/nuxt-config
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})
