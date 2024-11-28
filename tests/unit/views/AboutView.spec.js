import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";

describe('AboutView', () => { 
    test('Probando la existencia del componente o vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutViewVue',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })

    test('Genera un snapshot de la vista AboutView', async ()=>{
        const router = createRouter({
            history:createWebHistory(),
            routes:[{
                path: '/about',
                name: 'about',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()
        const wrapper=mount(AboutView,{
            global:{
                plugins:[router]
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})