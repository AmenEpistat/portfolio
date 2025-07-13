import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";


// const router = createRouter({
//   routes: [
//     {
//       path: "/WhyMe",
//       name: "whyme",
//       component: WhyMe,
//     },
//   ],
//   history: createWebHistory()
// });

const app = createApp(App);
// app.use(router);
app.mount("#app");
