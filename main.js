import { Telegraf, Markup } from "telegraf"

const token = '7450454886:AAGinDujXpN4AAhApBJgWZHeA4Q5FUn-xso'
const webAppUrl = 'https://snikie-app.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы открыть приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
})

bot.launch()