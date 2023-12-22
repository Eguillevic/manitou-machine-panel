<template>
  <header
    id="top-header"
    class="px-80 py-40">
    <button
      v-if="routeName !== 'product-id'"
      class="flex items-center"
      @click="backToMachine">
      <BaseIcon
        color="black"
        name="arrow-drop"
        class="relative mr-8 rotate-90"
        size="14"
      />
      <span class="font-700 text-14">{{ $t('back_to_machine') }}</span>
    </button>
    <div class="float-left">
      <h1 class="font-manitou text-40 font-900">Machine {{ product }}</h1>
      <p v-if="subtitle && routeName !== 'product-id'" class="text-40 font-300">{{ subtitle }}</p>
    </div>
    <div class="header-config float-right flex-col">
      <div class="wrapper flex items-center">
        <button
          id="locale-switcher"
          class="bg-black text-white flex items-center px-28 py-16 mr-16"
          @click="openLocaleModal"
        >
          <BaseIcon
            color="white"
            name="sphere"
            class="relative mr-8"
            size="18"
          />
          <span class="capitalize">{{ $t(currentLocale.name) }}</span>
        </button>
        <button
          id="form-datasheet"
          class="bg-primary text-white flex items-center px-28 py-16"
          @click="openFormModal">
          <BaseIcon
            color="white"
            name="mail"
            class="relative mr-8"
            size="18"
          />
          <span class="uppercase">{{ $t('receive_the_datasheet') }}</span>
        </button>
      </div>
      <div class="wrapper flex items-center justify-end py-16">
        <label class="text-14">{{ $t('unit') }} :</label>
        <button
          v-for="unit in units"
          :key="unit.code"
          class="ml-16"
          :class="unit.code === currentUnit ? 'text-black font-900' : 'text-grey font-regular'"
          @click="switchUnit(unit.code)">
          {{ unit.label }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useSettingsStore} from "~/store/settings";

const i18n = useI18n()
const currentLocale = i18n.locales.value.find(locale => locale.code === i18n.locale.value)
const localePath = useLocalePath()
const router = useRouter()
const route = useRoute()
const routeName = computed(() => route.name)
const subtitle = computed(() => route.meta?.subtitle)
const product = route.params.id

const settingsStore = useSettingsStore()

const units = settingsStore.units
const currentUnit = computed(() => settingsStore.unit)

const openLocaleModal = () => {
  settingsStore.setModalProps({
    open: true,
    title: null,
    template: 'LocaleSwitcher',
    content: null,
    hasImage: false,
    isFullWidth: true,
    isFullHeight: false,
  })
}
const openFormModal = () => {
  settingsStore.setModalProps({
    open: true,
    title: null,
    template: 'FormDataSheet',
    content: null,
    hasImage: false,
    isFullWidth: true,
    isFullHeight: true,
  })
}
const backToMachine = () => {
  router.push({name: 'product-id', params: {id: product}})
}

const switchUnit = (code) => {
  settingsStore.changeUnit(code)
}
</script>