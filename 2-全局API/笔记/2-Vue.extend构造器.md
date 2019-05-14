```
var authorExtend = Vue.extend({
    template:'<p><a :href="authorURL">{{authorName}}</a></p>',
    data:function(){
        return {
            authorName:'wyp',
            authorURL:'http://blog.devjackcat.com'
        }
    }
});

new authorExtend().$mount('#app');
```