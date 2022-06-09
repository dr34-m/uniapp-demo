# 通用公众号/小程序/h5/app框架

## 1. 运维

### 1.1 构建

```shell
# H5
npm run build:h5

# 微信小程序
npm run build:mp-weixin
```

### 1.2 H5修改前缀

修改`/src/manifest.json`，例如修改前缀为`/h5`如下

```js
"h5" : {
		"title" : "标题",
		"router" : {
				"base" : "/h5/"
		}
}
```

### 1.3 配置文件

配置文件在`/src/config/index.js`

## 2. 开发

### 2.1 启动

```shell
npm install
npm run dev:h5
```

### 2.2 说明

#### 2.2.1 配置

通用配置请放在`/src/config/index.js`中，例如后端地址。

#### 2.2.2 数据中心

数据中心统一管理需要在全局使用的数据，可以临时存储（h5刷新页面、小程序/app退出等操作数据就会丢失）或者持久化存储。

在这里定义和存储的数据是全局动态响应的，这让您无需繁琐地写监听方法。

配置文件在`/src/store/index.js`，建议命名为`vuex_`开头，以便与页面数据区分避免冲突。

##### 2.2.2.1 定义

###### 2.2.2.1.1 临时存储

直接在`/src/store/index.js`中定义，如下边的`vuex_tmp`

```js
const store = new Vuex.Store({
	state: {
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : null,
		vuex_tmp: null
	},
	
	...
	
})
```

###### 2.2.2.1.2 持久化存储

在`/src/store/index.js`中定义，并写入`saveStateKeys`中，如下边的`vuex_token`，定义的时候格式为`vuex_token: lifeData.vuex_token ? lifeData.vuex_token : null`

```js
// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_token'];

...

const store = new Vuex.Store({
	state: {
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : null,
		vuex_tmp: null
	},
	
	...
	
})
```

##### 2.2.2.2 使用

###### 2.2.2.2.1 取值

* 页面`<template>`中取值`{{ vuex_token }}`
* js代码`<script>`中取值`this.vuex_token`
* 拦截器等通用组件中（须获取上下文vm）取值`vm.vuex_token`

###### 2.2.2.2.2 设值

可以设定值的类型包括基本数据类型，和可以进行序列化的对象等。

```js
// 字符串
this.$u.vuex('vuex_token', "xxxxx");
// 对象
this.$u.vuex('vuex_token', {
	id: 1,
	key: 'token',
	value: 'xxxxx'
});
```

#### 2.2.3 接口

##### 2.2.3.1 统一拦截器

接口拦截器在`/src/utils/request.js`中，可以根据需要自行修改；

对于请求：
* 凡是不以`/login`开头，且当前已有`token`的（数据中心`vuex_token`字段值非`null`），将自动在请求头`header.token`存入已有的`token`值；

对于响应：
* 响应值`response.statusCode`非`200`的，将拦截，弹框提示并抛出异常，可在接口`catch`中捕获；
* 响应数据存在`response.data.code`字段的，判断`code`值：
	* 值为`401`将拦截并抛出异常，可在接口`catch`中捕获，建议在拦截器中统一处理；
	* 值非`200`且非`401`将拦截，弹框提示并抛出异常，可在接口`catch`中捕获；
	* 值为`200`的，将返回`response.data`，可在接口`then`中获取；
* 响应数据不存在`response.data.code`字段的，将返回`response.data`，可在接口`then`中获取。

##### 2.2.3.2 api集中管理

提示：get请求第一个参数是配置，post请求第一个参数是请求值，第二个才是配置

在`/src/api/`目录下新建`api.js`文件，内容如下
```js
const http = uni.$u.http

// get请求
export const getMenu1 = () => http.get(`/ebapi/public_api/index`)

// get请求
export const getMenu2 = (id) => http.get(`/ebapi/public_api/index/${id}`)

// get请求
export const getMenu3 = (params) => http.get('/ebapi/public_api/index', {params})

// get请求（带header等配置）
export const getMenu4 = (params) => http.get('/ebapi/public_api/index', {
	params,
	header: {
		token: '1111'
	}
})

// post请求
export const postMenu = (data) => http.post('/ebapi/public_api/index', data)

// post请求（带header等）
export const postMenu = (data) => http.post('/ebapi/public_api/index', data, {
	header: {
		token: '1111'
	}
})
```

##### 2.2.3.3 api使用

```js
import {
	getMenu2
} from '@/api/api.js';

getMenu2(id).then(res => {
	// 经过拦截器的处理，进入到这里的请求都是成功请求，无需考虑请求失败的情况
	console.log('res',res)
}).catch(err=>{
	// 多数情况下，不需要写catch，因为拦截器已经进行了弹窗提示等操作
	// 但当页面需要对错误进行处理时（例如关闭加载动画等），就需要在catch中操作
	console.log('err',err)
})
```