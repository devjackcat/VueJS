```

const addConsole = {
    updated:function(){
        console.log('我是混入，改变后的值:'+this.count);
    }
}

Vue.mixin({
    updated:function(){
        console.log('我是全局updated');
    }
});

const componentA = {
    data:function(){
        return {
            count:0
        }
    },
    methods:{
        add:function(){
            this.count++;
        }
    },
    template:`
        <div>
            <p>{{count}}</p>
            <button @click="add">加</button>
        </div>
    `,
    updated:function(){
        console.log('我是原生updated');
    },
    mixins:[addConsole]
}

new Vue({
    el:'#app',
    components:{componentA},
    template:'<componentA></componentA>'
});
```