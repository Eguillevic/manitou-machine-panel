<template>
  <div class="app">
    <top-header v-if="routeName.includes('product-id')" :class="modalProps.open ? 'blur-sm' : ''"/>
    <main class="content" :class="modalProps.open ? 'blur-sm' : ''">
      <slot />
    </main>
    <bottom-navbar v-if="routeName.includes('product-id')" :class="modalProps.open ? 'blur-sm' : ''"/>
    <modal></modal>
  </div>
</template>

<script setup lang="ts">
  import {useSettingsStore} from "~/store/settings";

  const route = useRoute()
  const routeName = computed(() => route.name)

  const settingsStore = useSettingsStore()
  const modalProps = computed(() => settingsStore.modal)
</script>

<style lang="scss" scoped>
.app {
  background-color: #F7F7F7;
  background-image: url("~/assets/images/Arc.svg");
  background-repeat: no-repeat;
  background-size: 20%;
  flex-grow: 1;
}
</style>