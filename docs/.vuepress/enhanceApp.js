import  VueHighlightJS  from  'vue-highlight.js';
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default({
    Vue,
    options,
    router,
    siteData
})=>{
Vue.use(VueHighlightJS)
Vue.use(Element)
}