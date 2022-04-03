import {createRouter, createWebHistory} from "vue-router";
const rulesHub = () => import('../components/page-wrap/rules/RulesHub.vue')
const blogHub = () => import('../components/page-wrap/blog/BlogHub.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/blog',
            name: 'blog',
            component: blogHub
        },
        {
            path: '/rules',
            name: 'rules',
            component: rulesHub
        }
    ]
})

export {router}