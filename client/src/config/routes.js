import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Selection from "../pages/Selection";
import Play from "../pages/Play";

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/signup",
    component: Signup,
    isPrivate: false,
  },
  {
    path: "/selection",
    component: Selection,
    isPrivate: true,
  },
  {
    path: "/play/:session",
    component: Play,
    isPrivate: true,
  },
  {
    path: "/",
    component: Login,
    isPrivate: false,
  },
];

export default routes;
