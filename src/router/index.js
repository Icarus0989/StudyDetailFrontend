import { createRouter, createWebHistory } from "vue-router";
import StudyDetails from "../components/StudyDetails.vue";

const routes = [
  {
    path: "/",
    name: "StudyDetails",
    component: StudyDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
