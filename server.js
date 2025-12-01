const app = require('./src/app')
const PORT = process.env.DEV_APP_PORT || 3056
const server = app.listen(3055, () => {
    console.log(`Local server started at ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log(`Exit Server express`)
    })
})