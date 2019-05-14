```
//Vue.directive 自定义指令
let template = `
    <div v-jack="color">哈哈</div>
`;

Vue.directive('jack',function(el,binding,vnode){
    console.log(el);
    console.log(binding);
    console.log(binding.name); //jack
    console.log(binding.value); //red
    console.log(binding.expression); //color
    el.style='color:'+binding.value;
});

new Vue({
    data:{
        message:"hello",
        color:'red'
    }
    template:template
}).$mount('#app');
```



```
Vue.directive('jack',{
    bind:function(){ //被绑定
        console.log('1 - bind');
    },
    inserted:function(){//绑定到结点
        console.log('2 - inserted');
    },
    update:function(){//组件更新
        console.log('3 - update');
    },
    componentUpdated:function(){//组件更新完成
        console.log('4 - componentUpdated');
    },
    unbind:function(){//解绑
        console.log('5 - unbind');
    }
});

function destroy(){
    vm.$destroy(); //解绑
}
```