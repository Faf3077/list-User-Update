<template>
  <div id="app">
    <div class="page">
      <div class="nav">
        <router-link class="link" to="/UserList" active-class="active">Users</router-link>
        <router-link class="link" to="/SearchUsers" active-class="active">Search</router-link>
        <router-link class="link" to="/UsersCardFile" active-class="active">Info</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.page {
  width: 600px;
  height: 620px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 20px;
}

.nav {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 15px 0;
  border-radius: 20px;
  height: 30px;
}
.nav {
  background: linear-gradient(270deg, #c98ddf, #dfc045, #75b8cc);
  background-size: 600% 600%;
  -webkit-animation: animation 30s ease infinite;
  animation: animation 30s ease infinite;
}

@-webkit-keyframes animation {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes animation {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

.link {
  text-decoration: none;
  font-size: 18px;
  color: black;
}

.active {
  background-color: wheat;
  border-radius: 15px;
  padding: 15px 30px;
}
</style>
