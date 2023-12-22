<template>
  <div class="page-product-service px-80 py-40 mt-80">
    <slider slides-per-view="3" :items="[]"></slider>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

route.meta.title = t('services_title', {product: route.params.id})
route.meta.subtitle = t('at_your_service')
</script>