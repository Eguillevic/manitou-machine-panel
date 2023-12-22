<template>
  <i v-if="icon" class="block icon" v-html="icon" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: '',
  },

  color: {
    type: String,
    required: false,
    default: 'primary',
  },

  size: {
    type: String,
    required: false,
    default: '20',
  },
})

// Auto-load icons
const icons = Object.fromEntries(
  Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(([key, value]) => {
    const filename = key.split('/').pop()!.split('.').shift()
    return [filename, value]
  })
)
const iconsize = ref('20')
const iconcolor = ref('var(--primary)')

onMounted(() => {
  iconsize.value = `${props.size}px`
  iconcolor.value = `var(--${props.color})`
})

// Lazily load the icon
const icon = props.name && (await icons?.[props.name]?.())
</script>

<style lang="scss" scoped>
.icon {
  width: v-bind(iconsize);
  height: v-bind(iconsize);
}
.icon:not(.custom) :deep(svg path),
.icon:not(.custom) :deep(svg circle) {
  fill: v-bind(iconcolor);
}
</style>
