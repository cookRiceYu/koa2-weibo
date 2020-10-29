const router = require('koa-router')();


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'yuzhe'
  })
})

module.exports = router;