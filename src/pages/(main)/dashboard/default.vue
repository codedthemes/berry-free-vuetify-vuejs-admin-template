<script setup lang="ts">
// imported components
import TotalEarning from '@/components/dashboard/default/TotalEarning.vue';
import TotalOrder from '@/components/dashboard/default/TotalOrder.vue';
import TotalIncome from '@/components/dashboard/default/TotalIncome.vue';
import TotalGrowth from '@/components/dashboard/default/TotalGrowth.vue';
import PopularStocks from '@/components/dashboard/default/PopularStocks.vue';
</script>

<template>
  <v-row>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Earning -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalEarning />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Order -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalOrder />
    </v-col>
    <!-- -------------------------------------------------------------------- -->
    <!-- Total Income -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" md="4">
      <TotalIncome />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Total Growth -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="8">
      <TotalGrowth />
    </v-col>

    <!-- -------------------------------------------------------------------- -->
    <!-- Popular Stocks -->
    <!-- -------------------------------------------------------------------- -->
    <v-col cols="12" lg="4">
      <PopularStocks />
    </v-col>
  </v-row>
</template>
