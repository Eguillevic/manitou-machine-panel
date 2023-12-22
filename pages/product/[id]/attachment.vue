<template>
  <div class="page-product-attachment px-80 py-40 mt-80">
    <slider slides-per-view="4" items-per-slide="2" :items="[]"></slider>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

route.meta.title = t('attachments_title', {product: route.params.id})
route.meta.subtitle = t('compatible_attachments')
</script>