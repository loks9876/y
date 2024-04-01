let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `مرحبا معك بوت سوكونا اذا اردت شي اكتب (.مهام)`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/98b2519abcee837e683b8.mp4', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت|بووت|بوت)$/i;
handler.command = new RegExp;

export default handler;
