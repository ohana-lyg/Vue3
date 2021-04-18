<!--
 * @Author: your name
 * @Date: 2021-04-16 21:39:28
 * @LastEditTime: 2021-04-18 22:58:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3\Vue3test\vue3-2\src\App.vue
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h2>欢迎光临红浪漫洗浴中心</h2>
      <div>请选择一位美女为你服务</div>
    </div>
    <div>
      <button
        v-for="(item, index) in /*data.*/girls"
        v-bind:key="index"
        @click="/*data.*/selectGirlFun(index)"
      >
        {{ index }} : {{ item }}
      </button>
    </div>
    <div>你选择了【{{ /*data.*/selectGirl }}】为你服务</div>
    <div><button @click="overAction">点餐完毕</button></div>
    <div>{{ overText }}</div>
  </div>
</template>

<script lang="ts">                  
import { 
  defineComponent,
  ref, 
  watch,
  reactive, 
  toRefs, // 引入toRefs()进行优化
  // onMounted, // 组件挂载完成后执行的函数
  // onBeforeMount, // 组件挂载到节点上之前执行的函数
  // onBeforeUpdate,// 组件更新之前执行的函数
  // onUpdated // 组件更新完成之后执行的函数
} from 'vue';

// 定义一个接口,用接口(interface)来作类型注解
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

// reactive也是一个函数(方法)，只不过里边接受的参数是一个 Object(对象)
export default defineComponent ({
  name: 'App',
    setup() { 
    console.log("1-开始创建组件------setup()");
  
    // 在显示的为 data 变量作一个类型注解 cosnt data: DataProps = ...
    const data: DataProps = reactive ({
      girls: ['西施','貂蝉','王昭君','杨玉环'],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    // onBeforeMount(() => {
    //   console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    // });

    // onMounted(() => {
    //   console.log("3-组件挂载到页面之后执行-----onMounted()");
    // });
    // onBeforeUpdate(() => {
    //   console.log("4-组件更新之前-----onBeforeUpdate()");
    // });

    // onUpdated(() => {
    //   console.log("5-组件更新之后-----onUpdated()");
    // });

    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = "点餐完成 | " + overText.value;
      document.title = overText.value;
    };

    watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });
    
    // 对data进行包装，把 data 变成refData,这样就可以使用扩展运算符的方式
    const refdata = toRefs(data);
    return {
      ...refdata,
      overText,
      overAction,
      //data,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
