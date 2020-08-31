<template>
  <section class="flex w-full relative justify-between">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="driver" />
    <div class="right">
      <slot name="right" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.relative {
  position: relative;
}
.w-full {
  width: 100%;
}
.driver {
  width: 2px;
  height: 100%;
  background: #f582f7;
  position: absolute;
  top: 10%;
  height: 80%;
  left: 50%;
  margin-left: -1px;
}

.right,
.left {
  overflow-x: auto;
  width: calc(50% - 3px);
  text-align: center;
}
</style>
