<template>
  <section class="flex-col w-full">
    <div class="top">
      <slot name="top" />
    </div>
    <div class="bottom">
      <slot name="bottom" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex-col {
  display: flex;
  flex-direction: column;
}
.w-full {
  width: 100%;
}
.top {
  margin-bottom: 10px;
}
.bottom,
.top {
  overflow-y: auto;
  max-height: 50vh;
}
</style>
