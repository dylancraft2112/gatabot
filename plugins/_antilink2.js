let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0 
}    
await conn.sendButton(m.chat, `${ag}ππ πΏππππΎππ ππ ππππΌπΎπ ππππππ½ππΏπ ππ ππππ πππππ\n\nπΌ ππππ½ππΏπΏππ ππππ ππΌπ πΏππππΎπππΏ ππ ππππ πππππ\n\nππππΎππΏπ πΌ πππππππΌπππ ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${fg}πΏππ½π πΏπ πππ πΌπΏπππ ππΌππΌ πππΏππ πππππππΌπ πΌ ππππππππ(πΌπ)\n\nπ ππππ π½π πΌπΏπππ ππ π½π πΌπ½ππ ππ ππππππ ππππππΏπππ`}`, wm, ['πΏπππΌπΎππππΌπ', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`ππ/ππΌ ππππππππΌπππ(πΌ) πΏππ½π πΌπΎππππΌπ ππππΌ ππππΎπππ\n\nπππππ ππππ πΌπΎππππΌππ πππ πΎππππΌππΏ\n*#on restrict | #off restrict*`)
}
return !0
}
