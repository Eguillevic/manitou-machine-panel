<template>
  <div id="page-homepage">
    <nuxt-link v-if="logoLoaded" :to="localePath({ name: `index`})">
      <img v-if="logo.type" :src="`data:image/${logo.type};base64,${logo.text}`" alt="Manitou" class="w-1/3"/>
      <img v-else src="~/assets/images/Manitou.svg" alt="Manitou" class="w-1/3"/>
    </nuxt-link>
    <div class="mail-counter float-right flex items-center">
      <span>{{ $t('emails_to_be_sent', {total: emails.length}) }}</span>
      <BaseIcon
        :color="onlineIconColor"
        :name="onlineIcon"
        class="relative ml-12"
        size="32"
      />
    </div>
    <h1 class="text-32 font-900">{{ $t('welcome') }},</h1>

    <div class="wrapper bg-white flex items-center justify-center w-full my-40 p-40">
      <div class="flex flex-col px-20">
        <label class="text-black font-700 text-16">{{ $t('event_name') }}</label>
        <Combobox v-model="event">
          <ComboboxInput
            :placeholder="$t('event_name')"
            class="search-input mt-5 w-full flex text-14 p-15 pl-28 rounded-50 text-dark-grey font-300 border bg-light-grey border-med-grey"
            @change="selectEvent"
          />
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ComboboxOptions class="w-full">
              <ComboboxOption v-if="eventName && !events.find(item => item.name === eventName)" @click="createExhibition" class="cursor-pointer">
                Create "{{ eventName }}"
              </ComboboxOption>
              <ComboboxOption
                v-for="item in filteredEvents()"
                :key="item.id"
                :value="item"
                class="cursor-pointer"
              >
                <p class="options">{{ item.name }}</p>
              </ComboboxOption>
            </ComboboxOptions>
          </transition>
        </Combobox>
      </div>
      <div class="flex flex-col px-20">
        <label for="event-country" class="text-black font-700 text-16">{{ $t('event_country') }}</label>
        <input v-model="eventCountry" id="event-country" class="mt-5 w-full flex text-14 p-15 pl-28 rounded-50 text-dark-grey font-300 border bg-light-grey border-med-grey" type="text" :placeholder="$t('event_country')"/>
      </div>
    </div>

    <div class="wrapper bg-black text-white flex items-start justify-center w-full my-40 p-40">
      <div class="flex flex-col px-20">
        <label class="text-white font-700 text-16">{{ $t('select_machine') }}</label>
        <Combobox v-model="machine">
          <ComboboxInput :placeholder="$t('name_or_product_reference')" @change="machine = $event.target.value" class="search-input mt-5 w-full flex text-14 p-15 pl-28 rounded-50 text-dark-grey font-300 border border-light-grey"
          />
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ComboboxOptions class="w-full">
              <ComboboxOption
                v-for="item in filteredMachines()"
                :key="item.id"
                :value="item.id"
              >
                <nuxt-link :to="localePath({ name: `product-id`, params: { id: item.identifier } })" :aria-label="item.name">
                  <p class="options">{{ item.name }}</p>
                </nuxt-link>
              </ComboboxOption>
            </ComboboxOptions>
          </transition>
        </Combobox>
      </div>
      <div class="flex flex-col px-20">
        <label for="unit-switcher" class="text-white font-700 text-16">{{ $t('select_unit_of_mesure') }}</label>
        <label class="inline-flex items-center">
          Metric
          <input v-model="isMetric" id="unit-switcher" type="checkbox" class="sr-only peer">
          <div class="w-100 h-55 mx-16 bg-dark-grey peer-focus:outline-none peer-focus:ring-4 peer-focus:bg-primary dark:peer-focus:primary rounded-10 peer dark:bg-dark-grey peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-grey after:border after:rounded-10 after:h-5 after:w-5 after:transition-all dark:border-med-grey peer-checked:bg-primary"></div>
          Imperial
        </label>
      </div>
      <div class="flex flex-col px-20">
        <label for="language-select" class="text-white font-700 text-16">{{ $t('select_language') }}</label>
        <select v-model="lang" id="language-select" class="text-black mt-5 w-full flex text-14 p-15 pl-28 rounded-50 font-300 border border-light-grey">
          <option value="" selected disabled>{{ $t('select_language') }}</option>
          <option v-for="locale in locales" :key="locale.code" :value="locale">{{ $t(locale.name) }}</option>
        </select>
      </div>
    </div>
    <div class="wrapper flex items-center justify-between">
      <div class="flex items-center">
        <button
          class="bg-black text-white flex items-center px-28 py-16 mr-16"
        >
          <BaseIcon
            color="white"
            name="stat"
            class="relative mr-8"
            size="18"
          />
          <span class="uppercase">{{ $t('send_stats') }}</span>
        </button>
        <button
          class="bg-black text-white flex items-center px-28 py-16 mr-16"
          :disabled="!event"
        >
          <BaseIcon
            color="white"
            name="cross"
            class="relative mr-8 rotate-45"
            size="18"
          />
          <span class="uppercase">{{ $t('close_event') }}</span>
        </button>
      </div>
      <button
        class="bg-primary text-white flex items-center px-28 py-16"
        @click="confirmConfig"
      >
        <BaseIcon
          color="white"
          name="lock"
          class="relative mr-8"
          size="18"
        />
        <span class="uppercase">{{ $t('confirm_and_lock_settings') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useOnline } from '@vueuse/core'
  import { ref } from 'vue'
  import * as localforage from "localforage";
  import {useSettingsStore} from "~/store/settings";
  import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue'

  definePageMeta({
    title: 'Configuration de l\'évenement'
  })

  const { $storage, $api } = useNuxtApp()
  const localePath = useLocalePath()
  let logo = ref('')
  let logoLoaded = ref(false)
  const online = useOnline()
  const onlineIcon = computed(() => online.value ? 'wifi' : 'wifi-off')
  const onlineIconColor = computed(() => online.value ? 'success' : 'black')

  let emails = ref([])
  let eventName = ref("")
  let eventCountry = ref("")
  let machine = ref("")
  let lang = ref("")
  let isMetric = ref(false)

  const settingsStore = useSettingsStore()
  const i18n = useI18n()
  const locales = i18n.locales.value

  let machines = []

  // const event = computed(() => settingsStore.event)
  const event = ref(settingsStore.event)
  let events = await $api.event.getExhibitions()
  if (!Array.isArray(events)) {
    let arrayEvents = []
    for (const [key, value] of Object.entries(events)) {
      arrayEvents.push({
        id: parseInt(key),
        name: value
      })
    }
    events = arrayEvents
  }
  events.push({
    id: 999,
    name: 'test'
  })

  localforage.ready(async () => {
    /* vite meta.glob import not working with variable */
    // let logoImage = await $storage.images.getItem('logo_svg')
    // if (logoImage) logo = import.meta.glob(logoImage, { as: 'raw' })
    machines = await $storage.json.getItem('machines')

    let logoB64 = await $storage.images.getItem('logo')
    if (logoB64) logo = logoB64
    // console.log(logo)
    logoLoaded.value = true

    let emailKeys = await $storage.emails.keys()
    for (const key of emailKeys) {
      emails.value.push({
        key,
        value: await $storage.emails.getItem(key)
      })
    }
  })

  const selectEvent = ($event) => {
    console.log('selected')
    eventName.value = $event.target.value
  }

  function filteredEvents() {
    if (eventName.value.length < 3) {
      return [];
    }
    return events.filter((item) =>
      item.name.toLowerCase().includes(eventName.value.toLowerCase())
    );
  }

  function filteredMachines() {
    if (machine.value.length < 3) {
      return [];
    }
    return machines.filter((item) =>
      item.name.toLowerCase().includes(machine.value.toLowerCase())
    );
  }

  const createExhibition = async () => {
    if (eventName.value && !event.value.id) {
      const res = await $api.event.createExhibition({
        name: eventName.value
      })
      if (res.code === 200) {
        events = await $api.event.getExhibitions()
        await settingsStore.setEvent(events.find(item => item.name === eventName.value))
      }
    }
  }

  const confirmConfig = () => {

  }
  /* Not working nuxt3 module */
  // const cacheStorage = useLocalForage()
  // await cacheStorage.setItem('test', 'eguillevic@gingerminds.fr')
  //
  // const imagesStorage = useLocalForage('images')
  // await imagesStorage.setItem('photo', 'test.png')
</script>

<style lang="scss" scoped>
#page-homepage {
  padding: 10%;
}
</style>