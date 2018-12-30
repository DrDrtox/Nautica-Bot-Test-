const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});



client.on('message', message => {
    var prefix = "-"
        if(message.content.startsWith (prefix  + 'members')) {
            if(!message.channel.guild) return;
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
                .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL) 
      
          .setDescription(`**:battery: حالة اعضاء السيرفر**
      **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
      **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
      **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
      **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
      
              message.channel.send()
      
      message.channel.sendEmbed(embed)
      }
      });
/////////////////////////////////////////////////////////////////////////////////////

      client.on("message", (message) => {
        if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    let yumz = new Discord.RichEmbed()
                .setTimestamp()
                .setTitle("Direct Message To The Bot")
                .addField(`Sent By:`, `<@${message.author.id}>`)
                .setColor("RANDOM")
                .setThumbnail(message.author.displayAvatarURL)
                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                .setFooter(`DM Bot Messages | DM Logs`)
            client.users.get("200644160179535872").send(yumz)
        }
});

/////////////////////////////////////////////////////////////////////////////////////////

client.on("message", (message) => {
    if (message.content.startsWith("-ctext")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
    
    }
    });

/////////////////////////////////////////////////////////////////////////////////////////

client.on("message", msg => {
    if(msg.content === '-' + "id") {
        const embed = new Discord.RichEmbed();
    embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
            .addField("🆔| الاي دي :", `${msg.author.id}`, true)
            .setColor("RANDOM")
            .setFooter(msg.author.username , msg.author.avatarURL)
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
            .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
            .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
            .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
            .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
        msg.channel.send({embed: embed})
    }
  });

/////////////////////////////////////////////////////////////////////////////////////////

const bannedwords = [
    "كس امك",
    "كسمك",
    "كل زق",
    "كلزق",
    "يا خرا",
    "كس اختك"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنج الشتايم تمامنا هنا  ").then(msg => {msg.delete(5000)});;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

/////////////////////////////////////////////////////////////////////////////////////////

client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith(`<@${client.user.id}>`)) {
        ebnklb.channel.send('تفضل يا قلبي ,')
        ebnklb.channel.send('اذا تبي اي شي ابعثلي على الخاص وانا راح ابعث لاونر البوت')

    }
});

/////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='-servercount')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('🌷| Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});

/////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    var prefix = "-";
          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('Channel Hided Successfully ! ✅  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "-";
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });

/////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});

/////////////////////////////////////////////////////////////////////////////////////////

var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

//////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (message.content.startsWith("&avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (message.content.startsWith("-banlist")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} **الاشخاص المتنده من السيرفر هم **`))
  .catch(console.error);
}
});

/////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if(message.content.startsWith(prefix + "invites")) {
     message.guild.fetchInvites().then(invs => {
       let user = message.mentions.users.first() || message.author
       let personalInvites = invs.filter(i => i.inviter.id === user.id);
       let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
  message.channel.send(`${user} has ${inviteCount} invites.`);
  });
   }
  });

/////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
    var prefix ="-"; 
  if (message.content.startsWith(prefix + 'mypr')) {
           if(!message.channel.guild) return;
           var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
           var zPeRms = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('🛠 Permissions')
           .addField('Your Permissions:',perms)
                    message.channel.send({embed:zPeRms});
  
      }
  });

///////////////////////////////////////////////////////////////////////////



client.login(process.env.BOT_TOKEN); 
