const { comparePass } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const { User } = require("../models")

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) throw { name: "Email is required" }
      if (!password) throw { name: "Password is required" }

      const findUser = await User.findOne({ where: { email } })
      if (!findUser) throw { name: "Invalid email or password" }
      if (!comparePass(password, findUser.password))
        throw { name: "Invalid email or password" }

      res.status(200).json({
        message: `Success login with email ${findUser.email}`,
        access_token: signToken(findUser.id),
      })
    } catch (error) {
      next(error)
    }
  }

  static async getAllBlog(req, res, next) {
    try {
      const blog = await Blog.findOne({
        where: { published: true },
      })

      if (!blog) {
        throw { name: "No Data Found" }
      }

      res.status(200).json(blog)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller
