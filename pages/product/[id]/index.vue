<template>
  <div class="page-product mt-40">

  </div>
</template>

<script setup lang="ts">
import {useMachineStore} from "~/store/machine";

const { $api } = useNuxtApp()
const route = useRoute()
const { t } = useI18n()

route.meta.title = t('machine_title', {product: route.params.id})

const machineStore = useMachineStore()
if (!Object.keys(machineStore.details).length) {
  const machine = await $api.machine.getMachineDetails(route.params.id, {country: 'FR', unit: 'all', locale: 'fr-FR'})
  machineStore.setMachine(machine)
}
</script>