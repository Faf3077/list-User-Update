<template>
   <div class="card-users">
      <p>Картотека юзеров, {{ version }}</p>
      My GitLub:
      <a href="https://git.informunity.ru/study/List-User-Andrew" target="_blank">https://git.informunity.ru/study/List-User-Andrew</a>
   </div>
</template>

<script>
import { version } from '/package-lock.json'
export default {
   data() {
      return {
         version: version,
      }
   }
}
</script>

<style>
.card-users{
   text-align: center;
   margin-top: 100px;
}
</style>