const Sequelize = require("sequelize")

const db = new Sequelize("restaurantdb", "postgres", "qwerty",{
    host: "localhost",
    dialect : "postgres",
    logging : false
})


db.sync(
    {force:true}
)

module.exports = db