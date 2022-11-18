<template>
   <div class="input">
      <input type="search" placeholder="Введите пользователя..." v-model="query">
      <div class="block__search" v-for="User in filterUser" :key="User.id">
         <li class="search-item">
            {{ User.name }}
            <a v-bind:href="'http://' + User.website" target="_blank" @click="backupInput">{{ User.website }}</a>
         </li>
      </div>
   </div>
</template>
 
<script>
export default {
   data() {
      return {
         query: "",
      }
   },
   computed: {
      filterUser() {
         if (this.query.length >= 3) {
            return this.$store.state.users.filter(element => {
               return element.name.toLowerCase().includes(this.query.toLowerCase())
            })
         }
      }
   },
   methods: {
      backupInput(){
         this.query = '';
      }
   }
}
</script>
 
<style>
.input {
   text-align: center;
   margin: 30px 0 0;
}

input {
   background: #e5e5e5;
   border: none;
   border-radius: 8px;
   color: #5a5656;
   font-size: 14px;
   height: 30px;
   outline: none;
   padding: 0 10px;
   width: 250px;
}

.search-item {
   list-style: none;
   width: 250px;
   display: flex;
   justify-content: space-between;
   padding: 5px 15px;
   background: wheat;
   border-radius: 10px;
   margin-top: 10px;
}

.block__search {
   display: flex;
   justify-content: center;
}
</style>
 