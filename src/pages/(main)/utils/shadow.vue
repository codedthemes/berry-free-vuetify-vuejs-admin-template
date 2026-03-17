<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Shadow Page' });
const breadcrumbs = ref([
  {
    title: 'Utilities',
    disabled: false,
    href: '#'
  },
  {
    title: 'Shadow',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Basic Shadow">
        <v-row justify="center" gap="24">
          <v-col v-for="n in 6" :key="n" cols="12" sm="4" md="2">
            <v-card
              height="100"
              class="mb-4 d-flex justify-center align-center border-thin rounded-lg transition-swing bg-primary"
              :elevation="n - 1"
            >
              <div class="text-h6">{{ n - 1 }}</div>
            </v-card>
            <div class="text-center text-subtitle-2 text-medium-emphasis">Elevation {{ n - 1 }}</div>
          </v-col>
        </v-row>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
