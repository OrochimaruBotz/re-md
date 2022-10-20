function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6288804947282@s.whatsapp.net')}\nitem1.TEL;waid=6288804947282:6288804947282\nitem1.X-ABLabel:Busy.\nURL;My Web: https://github.com/OrochimaruBotz\nEMAIL;Email Owner: humanzboti@gmail.com\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=62888049472828:62888049472828\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
