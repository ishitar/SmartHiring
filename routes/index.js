const router = require('express').Router();
const userRouter = require('./users')
router.use('/users',userRouter)
// router.use('/requests',)
// router.use('/approvals',)
// router.use('/metrics,')




module.exports= router