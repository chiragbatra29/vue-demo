import addBlog from './components/addblog.vue'
import showBlogs from './components/showblog.vue'
import SingleBlog from './components/singleblog.vue'

export default [
    {path: '/', component: showBlogs},
    {path: '/add', component: addBlog},
    {path: '/blog/:id', component: SingleBlog}
]
