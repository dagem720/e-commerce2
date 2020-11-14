
<template>
  <v-footer
    dark
    padless
    class="primary"
  >
    <v-row style="height:200px">
        <v-col
        class="text-center"
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="border-right:1px solid white"
      >
       <strong>Contacts</strong>
      </v-col>
      <v-col
        class="text-center"
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        style="border-right:1px solid white"
      >
        <strong>Map</strong>
      </v-col>
      <v-col
        class="text-center"
       cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
      >
      <strong>Gallary</strong>
      </v-col>
      </v-row>
      <v-col
        class="text-center"
        cols="12"
        style="border-top:1px solid white"
      >
        {{ new Date().getFullYear() }} — <strong>E-Commerce</strong>
      </v-col>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>