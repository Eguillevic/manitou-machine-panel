// https://nuxt.com/docs/api/configuration/nuxt-config
import pages from './router/pages.json'
import en from './router/locales/en.json'
import fr from './router/locales/fr.json'
import * as localforage from "localforage";

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=320, initial-scale=1',
      title: 'Manitou Salon',
      meta: [{name: 'description', content: 'Notre application de présentation des machines, services et accessoires sur le salon'}],
      htmlAttrs: {
        lang: 'fr',
        style: 'font-size: 1rem'
      },
      link: [
        {rel: "icon", type: "image/png", href: "/favicon.ico"}
      ],
    },

    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '@/assets/styles/main.scss'
  ],

  loading: true,

  loadingIndicator: {
    name: 'circle',
    color: '#EB1212',
    background: 'white'
  },

  modules: [
    "@nuxtjs/tailwindcss",
    // https://github.com/nuxt-community/robots-module
    // '@nuxtjs/robots',
    // https://codybontecou.com/nuxt3-and-pinia.html
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/devtools',
    // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    '@pinia-plugin-persistedstate/nuxt',
    '@vite-pwa/nuxt',
    'nuxt3-localforage',
  ],

  devtools: {enabled: true},

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        name: 'english'
      },
      {
        code: 'fr',
        name: 'french'
      }
    ],

    customRoutes: 'config',
    pages,

    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        fr,
        en
      }
    }
  },

  localForage: {
    name: 'manitou',
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      localforage.WEBSQL,
      // memoryDriver._driver
    ],
    /*instances: [
      {
        name: 'manitou',
        storeName: 'images',
      },
      {
        name: 'manitou',
        storeName: 'cache',
      },
      {
        name: 'manitou',
        storeName: 'emails',
      }
    ]*/
  },

  nitro: {
    compressPublicAssets: true
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },

  pwa: {
    meta: {
      lang: 'fr',
      theme_color: '#EB1212'
    },
    manifest: {
      name: "Manitou Salon",
      lang: 'fr'
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL || 'http://localhost:3000',
      appBaseUrl: process.env.APP_BASE_URL || 'http://localhost:3000',
      storageUrl: process.env.STORAGE_URL || 'http://localhost:3000',
    }
  },

  ssr: false,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          //
        }
      }
    },
    optimizeDeps: {
      include: ['localforage'],
    },
  }
})