<template>
    <div class="container">
        <div v-for="(noti,i) in myitems" :key="i">
            you bought <span class="primary--text" @click="loadProduct(noti.id)" style="cursor:pointer">{{noti.nProduct}}</span> on {{noti.datestring}}
        </div>
        
   
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            
            myitems()
            {
                return this.$store.getters.UserDetailmyitems
            },
               
        
              
            },
             methods: {
             loadProduct(id) {
                this.$router.push('../../product/'+ id)
              },
         },
        
    }
</script>

<style lang="scss" scoped>

</style>