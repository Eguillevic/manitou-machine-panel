<template>
    <section class="bottom-navbar w-full fixed bottom-0">
        <nav role="navigation" class="bg-black flex items-center justify-between">
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.route"
            class="w-1/4 px-30 py-15 text-20 text-regular text-white capitalize text-center border-dark-grey border-x-2 hover:border-b-primary hover:border-b-4"
            :class="routeName === link.route.name ? 'border-b-primary border-b-4' : ''">
            {{ link.title }}
          </nuxt-link>
          <button class="p-8" @click="unlockConfig">
            <BaseIcon
              color="dark-grey"
              name="lock"
              class="relative"
              size="24"
            />
          </button>
        </nav>
    </section>
</template>

<script setup lang="ts">
  const localePath = useLocalePath()
  const router = useRouter()
  const route = useRoute()
  const routeName = computed(() => route.name)
  const { t } = useI18n()

  const links = [
    {
      title: t('machine'),
      route: localePath({name: 'product-id', params: {id: route.params.id}})
    },
    {
      title: t('attachment'),
      route: localePath({name: 'product-id-attachment', params: {id: route.params.id}})
    },
    {
      title: t('innovation'),
      route: localePath({name: 'product-id-innovation', params: {id: route.params.id}})
    },
    {
      title: t('service'),
      route: localePath({name: 'product-id-service', params: {id: route.params.id}})
    },
  ]
  const unlockConfig = () => {
    router.push(localePath('index'))
  }
</script>

<style lang="scss" scoped>
.bottom-navbar {

}
</style>