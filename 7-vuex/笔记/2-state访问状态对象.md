
将{{$store.state.count}}简写为{{count}}方式如下：
一:计算属性
```
computed:{
      count:function(){
          return $store.state.count;
      }
  },
```

二：mapState
```
import { mapState } from 'vuex'
...
computed:mapState({
      count:state => state.count
  }),
```

三：
```
computed:mapState(['count']),
```