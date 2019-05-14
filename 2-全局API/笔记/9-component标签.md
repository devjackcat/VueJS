```

const componentA = {
    template:'<span>I am componentA</span>'
}
const componentB = {
    template:'<span>I am componentB</span>'
}
const componentC = {
    template:'<span>I am componentC</span>'
}

let vm = new Vue({
    data:{
        who:"componentA"
    },
    components:{ 
        componentA:componentA,
        componentB:componentB,
        componentC:componentC
    },
    methods:{
        showA:function(){
            this.who='componentA'
        },
        showB:function(){
            this.who='componentB'
        },
        showC:function(){
            this.who='componentC'
        }
    },
    template:`
        <div>
            <component v-bind:is="who"></component><br/>
            <button @click='showA'>showA</button><br/>
            <button @click='showB'>showB</button><br/>
            <button @click='showC'>showC</button><br/>
        </div>
        `
}).$mount('#app');

```