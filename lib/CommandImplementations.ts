import { Message } from 'discord.js';

export async function replyWithMention(msg: Message, reply: string): Promise<void> {
    if (msg.mentions.users.size > 0)   {
        const usersMentioned = [...msg.mentions.users.keys()].map((id) => `<@${id}>`).join(' ');
        await msg.reply(`${usersMentioned} ${reply}`);
    } else {
        await msg.channel.send(reply);
    }
}

export async function handleGPT(msg: Message, args: string): Promise<void> {
    console.log(args);
}
