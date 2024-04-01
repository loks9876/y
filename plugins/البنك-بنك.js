let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعده بيناتي`
    conn.reply(m.chat, `
*_______🌑𓊆البنك𓊇🖤_______*
*╎▣「📌الاسم」:* _@${who.split('@')[0]}_
*╎▣「💎الماس」:* _${user.diamond}_
*╎▣「👨🏻‍💼الرتبة」:* _${user.role}_
*╎▣「🍷الجرعات」:* : _${user.potion}_
*╎▣「🪙حديد」:* _${user.iron}_
*╎▣「💵المال」:* _${user.money}_
*╎▣خبرة🎊」*: _الإجمالي」
${user.exp}_
*└●━──𓊆⍣⃝☾︎☀︎︎𝑺𝒖𝒌𝒖𝒏𝒂-𝑩𝒐𝒕☀︎︎☽︎𓊇──━●*
`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'البنك', 'diamond', 'balance'] 

export default handler
