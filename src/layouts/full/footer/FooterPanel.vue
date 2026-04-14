<script setup lang="ts"></script>
<template>
  <v-footer class="px-0 footer mt-2">
    <v-row justify="center" align="center" gap="0">
      <v-col cols="12" sm="6">
        <p class="text-body-medium mb-0 text-sm-left text-center">
          Berry ♥ crafted by Team
          <a href="https://codedthemes.com/" class="text-primary footer-link" target="_blank">Codedthemes</a>
        </p>
      </v-col>
      <v-col class="text-sm-right text-center" cols="12" sm="6">
        <a
          class="mx-2 text-body-medium text-darkText text-decoration-none"
          target="_blank"
          href="https://www.figma.com/community/file/1468460364009262125/berry-free-dashboard-ui-kit"
        >
          Free Figma UI kit
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss">
.v-footer {
  position: unset;
}
footer {
  a {
    &:hover {
      color: rgb(var(--v-theme-primary)) !important;
    }
  }
}
.footer-link {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
