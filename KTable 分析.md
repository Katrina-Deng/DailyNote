# KTable组件

- KTable组件 接收数据，展示数据
  - 接收数据： 动态绑定data数据源
  - 展示数据：解析KtableCol的属性，获得表头和表体
- KTableCol衍生功能 定义列标题，列数据
  - prop定义数据的key值
  - label定义表标题

## KTable分析

- thead 

  - 表头应该有若干列，表头的th应该是个循环

  - ```js
     <th v-for="column in columns" :key="column.label">
              {{ column.label }}
            </th>
    ```

    

- tbody

  - 理应是若干tr, tr应该是一个数组
  - 理应是若干td, td的值应该是一个个的对象
  - 所以tr td理应是双层循环

## KTableCol

- 作用是提供一个默认插槽



## 普通Table

按照分析

## 自定义模板

自定义模板基本使用的是一个template标签包裹着我们想要展示模板数据, 要获得该template中的默认插槽的内容可以通过

`this.$slots.default[indexNumber].data.scopedSlots.defatult()`

scopedSlots属性里面都是函数,包括一个defatult函数,这个函数还可以传参. 通常把scope参数传进去就能获得该默认插槽的数据了. 

但是这个函数执行后获得的是一个虚拟vode数组不能再模板块直接渲染处理.

而且需要render函数渲染.

我们可以使用jsx方法, 把表格修改成jsx,再render函数中,直接把这个虚拟dom return. 可以把这个内容显示,而不是一个vnode的数组.

### 判断是普通渲染还是自定义模板

- columns

  - columns里面不一定有prop属性(即普通渲染)

  - ktable出现了默认的作用域操作,就按照作用域插槽里面用

  - scopedSlots的出现: 只要使用template`v-slot:default="scope"`在vnode->data->attrs属性里面就会出现scopedSlots 

    ```js
    <k-table-col label="操作">
    	<template v-slot:default="scope">
    	<button @click="handleEdit(scope.$index, 			scope.row)">操作</button>
    	<button @click="handleDel(scope.$index, 		scope.row)">删除</button>
    </template>
    </k-table-col>
    ```

    

- 执行default

  `this.$slots.default[indexNumber].data.scopedSlots.defatult()`

  获得虚拟dom数组, 虚拟dom数组在jsx中会直接渲染出来.

## 排序sortable

- 定义一个默认排序列
- 在表头判断是否存在sortable,如果存在则添加箭头.