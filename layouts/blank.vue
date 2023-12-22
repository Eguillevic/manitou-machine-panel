<template>
  <div class="bg-secondary h-screen w-screen text-white overflow-x-hidden flex flex-col items-stretch justify-start">
    <div class="flex-1 flex flex-col items-stretch justify-center p-20 mb-[116px]">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  top: 0;
  left: 0;
}
</style>
