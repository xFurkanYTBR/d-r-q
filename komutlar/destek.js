const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("DESTEK KOMUTLARI:",`
d!talep:         ^Bir talep odası açılarak şikayetlerinizi belirtebilirsiniz.^
d!canlıdestek:   ^Canlıdestek talebi yollarsınız.^
d!yapımcı:       ^Botun yapımcısını gösterir.^

* örn: d!talep

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'destek'
};