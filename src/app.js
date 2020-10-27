const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const koaStatic = require('koa-static');
// 监听错误信息
onerror(app);

/**
 * 注册中间件
 **/
// 格式化请求参数
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
// 日志
app.use(logger());
// 静态资源
app.use(koaStatic(__dirname + '/public'));
// ejs 文件渲染
app.use(
  views(__dirname + '/views', {
    extension: 'ejs',
  })
);

app.on('error', (err, ctx) => {
  console.error('服务错误：', err, ctx);
});

module.exports = app;
