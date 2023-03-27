# Fullstack_Project
NodeJS+VueJS全栈开发项目-视频网站
## 基于nestjs搭建的服务器端

## 1.环境配置

最好使用最近最稳定的node版本，因为nest使用了ts语言，旧版本的node可能会不支持某些语言，
例如，低于10.15的node会报错。
```javascript
logSettings_1.logger.warn('You are using a NodeJS Version below 10.15.0, Please Upgrade!');
ReferenceError: logSettings_1 is not defined
```
如何升级node版本？
（1）mac os，Linux用户使用n模块升级，在命令行中输入：

```javascript
npm i -g n
n stable（或者其他您想要升级的版本）
node -v 查看版本更新成功
```

（2）Windows用户
无法支持升级使用的n模块，老老实实覆盖环境变量的node安装路径，具体查看，里面有详细的说明。
[https://blog.csdn.net/busybm/article/details/80545912](https://blog.csdn.net/busybm/article/details/80545912)

## 2.引入对应的资源

npm或者yarn安装nest，并且启动nest项目

我们使用npm，**以下四步是nestjs主要搭建服务器端:**

```javascript
 pnpm add -g @nestjs/cli
```
nest新建新项目
```javascript
nest new server
```
在项目中添加app，子目录为admin
```javascript
nest g app admin
```
watch模式监听admin的变化，如nodemon模块
```javascript
nest start -w admin
```
以下三步是MongoDB和typegoose主要搭建服务器端:
主要引入MongoDB模块，和基于typescript的mongoose模块
```javascript
nest g lib db 

pnpm add nestjs-typegoose @typegoose/typegoose
// Mongoose publishes its own types, so you do not need to install this package.
pnpm add mongoose
```

## 数据库
上文的nest g lib db ，**生成一个目录去管理数据库端，我们这边采用一个数据库对应admin后台和apps前台**
最后，可以在db的模块中，添加其他表
