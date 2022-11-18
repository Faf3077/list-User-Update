<template>
   <div class="block__users">
      <ul class="users" v-bind:value="user.name" v-for="user of this.$store.state.users" :key="user.id">
         <div class="item__search">
            <li>{{ user.name }}</li>
            <button class="btn" @click="getKey(user.id)">
               <b v-if="getId == user.id">{{ btnTextHide }}</b>
               <b v-else>{{ btnTextShow }}</b>
            </button>
         </div>
         <div>
            <li class="info-block" v-if="getId == user.id">
               <div class="address wrap">
                  <p class="information">Address:</p>
                  {{ user.address.city }}<br>
                  {{ user.address.street }}<br>
                  {{ user.address.suite }}<br>
                  {{ user.address.zipcode }}
               </div>
               <div class="company wrap">
                  <p class="information">Company:</p>
                  {{ user.company.bs }}<br>
                  {{ user.company.catchPhrase }}<br>
                  {{ user.company.name }}
               </div>
               <div class="user-info wrap">
                  <p class="information">User info:</p>
                  {{ user.email }}<br>
                  {{ user.name }}<br>
                  {{ user.phone }}<br>
                  {{ user.username }}
               </div>
            </li>
         </div>
      </ul>
   </div>
</template>
 
<script>
import { mapActions } from 'vuex'
export default {
   data() {
      return {
         getId: 0,
         btnTextShow: "+",
         btnTextHide: "-",
      }
   },
   mounted() {
      this.GET_USERS_FROM_API()
   },
   methods: {
      ...mapActions([
         'GET_USERS_FROM_API'
      ]),
      getKey(index) {
         if(this.getId != index){
            this.getId = index
            
         }else if(this.getId = index){
            this.getId = 0
            
         }
      },
   }
}
</script>
 
<style>
ul {
   list-style: none;
}

.item__search {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.btn {
   width: 20px;
   height: 20px;
   border-radius: 10px;
   border: none;
}

.block__users {
   width: 550px;
   margin: 30px auto;
}

.info-block {
   display: flex;
   justify-content: space-between;
   padding: 10px 15px;
   background: wheat;
   border-radius: 10px;
   font-size: 15px;
}
.wrap {
   line-height: 25px;
}
.information {
   font-weight: bold;
   margin-bottom: 0;
}
</style>
 