# travelNote_Front
旅行日记-客户端

--public
用于存放公共属性资源—具体存放了网站图标元素；

--src
用于存放主要页面资源，包括页面入口main.jsx，组件，API等；

 *  --api
	用来向后端调用接口，包括加载游记、加载用户游记、删除用户游记、实现游记查询等；
	
 * --components
	页面组件，包括底部导航栏、游记展示卡片等；
	
 * --redux
	状态管理（暂未使用）
	
 * --router
	路由管理
	
 * --views
 	页面管理，包括用户登录注册页、游记展示首页、游记添加页、用户页，游记详情页等；
	
.eslintrc.cjs： ESLint 配置文件

vite.config.js: Vite 项目配置文件