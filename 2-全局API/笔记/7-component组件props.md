```
let vm = new Vue({
    data:{
        place:"中国四川"
    },
    components:{ //局部组建
        aa:{
            template:'<span>熊猫来自 {{ where }}</span>',
            props:['where']
        },
        bb:{
            template:'<span>熊猫来自 {{ fromWhere }}</span>',
            props:['fromWhere']
        },
        cc:{
            template:'<span>熊猫来自 {{ fromWhere }}</span>',
            props:['fromWhere']
        }
    },
    template:`
        <div>
            <aa where='四川'></aa><br/>
            <bb from-where='四川'></bb><br/>
            <cc v-bind:from-where='place'></cc><br/>
        </div>
        `
}).$mount('#app');

```