<template>
  <section class="flex-col w-full relative">
    <div class="top">
      <slot name="top" />
    </div>
    <div class="driver" />
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
.relative{
  position: relative;
}
.w-full {
  width: 100%;
}
.top {
  margin-bottom: 2px;
}
.driver {
  width: calc(100% - 20px);
  height: 2px;
  background: #f582f7;
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -1px;
}
.bottom,
.top {
  overflow-y: auto;
  max-height: 50vh;
  text-align: center;
}
</style>
