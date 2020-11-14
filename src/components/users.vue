<template>
    <div class="container">
            <v-simple-table
    fixed-header
    height="600px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            User Name
          </th>
          <th class="text-left">
            User Type
          </th>
          <th class="text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item.email"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.type }}</td>
          <td >
              <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
                class="black--text"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              @click="Disabled"
              >
                <v-list-item-title>Disable</v-list-item-title>
              </v-list-item>
              <v-list-item
              @click="Disabled"
              >
                <v-list-item-title>Change user type</v-list-item-title>
              </v-list-item>
              <v-list-item
              @click="Disabled"
              >
                <v-list-item-title>Prompt to Admin</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
</template>

<script>
import admin from '../functions/index.js'
  export default {
      methods:{
          Disabled()
          {
        admin.getQuote()
             
          }
      },
      computed:{
          users()
          {
              return this.$store.getters.users
          }
      },
      created()
      {
          this.$store.dispatch('users')
      },
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>