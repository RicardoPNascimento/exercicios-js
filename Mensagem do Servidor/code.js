const Helper = require("./helper.js")

function code(message) {
    const user = Helper.getUsername()
    const notifications = Helper.getNotifications()
    return message.replaceAll('{{user_name}}', user).replaceAll('{{notifications}}', notifications)
}

module.exports = code