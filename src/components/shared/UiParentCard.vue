<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
  <v-card variant="flat">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title>{{ props.title }}</v-card-title>
        <slot name="action"></slot>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>
