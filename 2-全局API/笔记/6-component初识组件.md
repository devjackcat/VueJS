```

//全局组件
Vue.component('cp',{
    template:"<h1>全局组件</h1>"
});

let vm = new Vue({
    data:{
        message:"hello",
        color:'red'
    },
    components:{ //局部组建
        aa:{
            template:'<h2>局部组件</h2>'
        }
    },
    template:`
        <div>
            <cp></cp>
            <aa></aa>
        </div>
        `
}).$mount('#app');


```