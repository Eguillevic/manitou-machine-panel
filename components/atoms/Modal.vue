<template>
  <div v-show="modalProps.open" class="modal-overlay fixed w-full h-full top-0 left-0">
    <div
      class="modal-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
      :class="{'w-full': modalProps.isFullWidth, 'w-1/2': !modalProps.isFullWidth, 'h-full': modalProps.isFullHeight, 'h-auto': !modalProps.isFullHeight}">
      <button class="modal-close absolute top-20 right-20" @click="close">
        <BaseIcon
          color="grey"
          name="cross"
          class="rotate-45"
          size="32"
        />
      </button>
      <div class="modal-content">
        <LocaleSwitcher v-if="modalProps.template === 'LocaleSwitcher'"></LocaleSwitcher>
        <FormDataSheet v-else-if="modalProps.template === 'FormDataSheet'"></FormDataSheet>
        <template v-else-if="modalProps.content">
          <div v-html="modalProps.content"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {useSettingsStore} from "~/store/settings";
import LocaleSwitcher from "~/components/atoms/LocaleSwitcher.vue";
import FormDataSheet from "~/components/form/FormDataSheet.vue";

const settingsStore = useSettingsStore()
const modalProps = computed(() => settingsStore.modal)

const close = () => {
  settingsStore.closeModal()
}
</script>

<style lang="scss">
.modal {

}
</style>