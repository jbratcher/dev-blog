// set up
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use( VueRouter );

// views

import Admin from "./views/Admin";
import Home from './views/Home';
import Contact from "./views/Contact";

// Blog

import Blog from "./views/blog/Blog.vue";
import BlogSingle from "./views/blog/BlogSingle.vue";
import CreateBlogPost from "./views//blog/CreateBlogPost.vue";
import EditBlogItem from "./views/blog/EditBlogItem";

// Portfolio

import Portfolio from "./views/portfolio/Portfolio.vue";
import PortfolioSingle from "./views/portfolio/PortfolioSingle.vue";
import CreatePortfolioItem from "./views/portfolio/CreatePortfolioItem.vue";
import EditPortfolioItem from "./views/portfolio/EditPortfolioItem";

// Tutorial

import Tutorials from "./views/tutorial/Tutorials.vue";
import TutorialSingle from "./views/tutorial/TutorialSingle.vue";
import CreateTutorialItem from "./views/tutorial/CreateTutorialItem.vue";
import EditTutorialItem from "./views/tutorial/EditTutorialItem.vue";

// Router

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/blog/view/:post_slug?/:post_id?",
            name: "blog-single",
            component: BlogSingle,
            props: true,
        },
        {
            path: "/blog/create",
            name: "create-blog-post",
            component: CreateBlogPost
        },
        {
            path: '/blog/edit/view/:post_slug/:post_id',
            name: "edit-blog-item",
            component: EditBlogItem,
            props: true,
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio
        },
        {
            path: '/portfolio/view/:portfolio_item_slug?/:portfolio_item_id?',
            name: "portfolio-single",
            component: PortfolioSingle,
            props: true,
        },
        {
            path: "/portfolio/create",
            name: "create-portfolio-item",
            component: CreatePortfolioItem
        },
        {
            path: '/portfolio/edit/view/:portfolio_item_slug/:portfolio_item_id',
            name: "edit-portfolio-item",
            component: EditPortfolioItem,
            props: true,
        },
        {
            path: "/tutorials",
            name: "tutorials",
            component: Tutorials
        },
        {
            path: '/tutorials/view/:tutorial_slug?/:tutorial_id?',
            name: "tutorial-single",
            component: TutorialSingle,
            props: true,
        },
        {
            path: "/tutorial/create",
            name: "create-tutorial-item",
            component: CreateTutorialItem
        },
        {
            path: '/tutorials/edit/view/:tutorial_slug/:tutorial_id',
            name: "edit-tutorial-item",
            component: EditTutorialItem,
            props: true,
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        },
    ]
});

export default router;