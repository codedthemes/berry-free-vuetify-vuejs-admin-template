<script setup lang="ts">
import { ref } from 'vue';
const value = ref(80);
const bufferValue = ref(20);
</script>

<template>
  <v-sheet rounded="md" color="lightprimary" class="pa-4 ExtraBox hide-menu">
    <div class="d-flex align-center">
      <v-btn variant="text" size="large" class="bg-surface" icon rounded="md" color="primary">
        <TableIcon />
      </v-btn>
      <div class="px-3">
        <h5 class="text-h5 text-primary mb-0 line-height-none">Get Extra Space</h5>
        <small class="text-disabled"> 28/23 GB</small>
      </div>
    </div>
    <div class="mt-5">
      <div class="d-flex align-center justify-space-between">
        <h5 class="text-h6 text-primary mb-0 line-height-none">Progress</h5>
        <small>{{ value }}%</small>
      </div>
      <v-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
        rounded="md"
        color="primary"
        height="10"
        class="mt-2"
      ></v-progress-linear>
    </div>
  </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    width: 157px;
    height: 157px;
    background: rgb(var(--v-theme-primary));
    border-radius: 50%;
    top: -105px;
    right: -96px;
    opacity: 0.4;
  }
}
.line-height-none {
  line-height: normal;
}
</style>
