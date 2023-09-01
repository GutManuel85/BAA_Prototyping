import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUpView from "@/views/SignUpView";
import LogInView from "@/views/LogInView";
import MyAccountView from "@/views/dashboard/MyAccountView";
import CoursesView from "@/views/CoursesView";
import CourseView from "@/views/CourseView";
import Playground1 from "@/views/Playgrounds/Playground1";
import Playground2 from "@/views/Playgrounds/Playground2";
import Playground3 from "@/views/Playgrounds/Playground3";
import Playground4 from "@/views/Playgrounds/Playground4";
import Playground5 from "@/views/Playgrounds/Playground5";
import Playground6 from "@/views/Playgrounds/Playground6";
import Playground7 from "@/views/Playgrounds/Playground7";
import Playground8 from "@/views/Playgrounds/Playground8";
import Playground9 from "@/views/Playgrounds/Playground9";
import Playground10 from "@/views/Playgrounds/Playground10";
import Playground11 from "@/views/Playgrounds/Playground11";
import Playground12 from "@/views/Playgrounds/Playground12";
import Playground13 from "@/views/Playgrounds/Playground13";
import Playground14 from "@/views/Playgrounds/Playground14";
import KanbanBoard from "@/views/Playgrounds/KanbanBoard";
import Playground15 from "@/views/Playgrounds/Playground15";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpView,
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogInView,
    },
    {
        path: '/dashboard/my-account',
        name: 'MyAccount',
        component: MyAccountView,
    },
    {
        path: '/courses',
        name: 'Courses',
        component: CoursesView,
    },
    {
        path: '/courses/:slug', //dynamic
        name: 'Course',
        component: CourseView,
    },


    //************Playgrounds*************
    {
        path: '/playground1',
        name: 'Playground1',
        component: Playground1,
    },
    {
        path: '/playground2',
        name: 'Playground2',
        component: Playground2,
    },
    {
        path: '/playground3',
        name: 'Playground3',
        component: Playground3,
    },
    {
        path: '/playground4',
        name: 'Playground4',
        component: Playground4,
    },
    {
        path: '/playground5',
        name: 'Playground5',
        component: Playground5,
    },
    {
        path: '/playground6',
        name: 'Playground6',
        component: Playground6,
    },
    {
        path: '/playground7',
        name: 'Playground7',
        component: Playground7,
    },
    {
        path: '/playground8',
        name: 'Playground8',
        component: Playground8,
    },
    {
        path: '/playground9',
        name: 'Playground9',
        component: Playground9,
    },
    {
        path: '/playground10',
        name: 'Playground10',
        component: Playground10,
    },
    {
        path: '/playground11',
        name: 'Playground11',
        component: Playground11,
    },
    {
        path: '/playground12',
        name: 'Playground12',
        component: Playground12,
    },
    {
        path: '/playground13',
        name: 'Playground13',
        component: Playground13,
    },
    {
        path: '/playground14',
        name: 'Playground14',
        component: Playground14,
    },
    {
        path: '/playground15',
        name: 'Playground15',
        component: Playground15,
    },
    {
        path: '/kanbanboard',
        name: 'KanbanBoard',
        component: KanbanBoard,
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
