const {token} = require("./config.json")
const axios = require("axios")

let clearFriends = async () => {
    const requestSent = await axios.get(`https://discordapp.com/api/users/@me/relationships`, {
        headers: {Authorization: token}
    })
    for (let friend of requestSent.data.values()) {
        await axios.delete(`https://discordapp.com/api/users/@me/relationships/${friend.user.id}`, {
            headers: {Authorization: token}
        })
        console.log(`[!] Amizade removida de ${friend.user.username} (${friend.user.id})`)
    }
}

clearFriends()
