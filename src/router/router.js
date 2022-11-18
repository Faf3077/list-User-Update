import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "../components/UserList"
import SearchUsers from "../components/SearchUsers"
import UsersCardFile from "../components/UsersCardFile"

Vue.use(VueRouter);

const routes = [
   {
      path: '/UserList',
      component: UserList
   },
   {
      path: '/SearchUsers',
      component: SearchUsers
   },
   {
      path: '/UsersCardFile',
      component: UsersCardFile
   }
]

const router = new VueRouter({
   routes
})


export default router;
