const Controller = require("../controller/Controller")

const router = require("express").Router()

router.post("/login", Controller.login)
router.post("/blogs", Controller.getAllBlog)
// router.post("/blogs", Controller.)

module.exports = router
