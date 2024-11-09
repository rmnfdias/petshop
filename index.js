const express = require ('express')
const rotaCachorro = require ('./src/route/cachorro')
const rotaCliente = require ('./src/route/cliente')
const e = require('express')


const app = express()

app.use(express.json())

app.use(rotaCachorro)
app.use(rotaCliente)

const PORT = 3000

databse.databse
    .sync({force: false})
    .then((_) =>{
        console.info("Banco conectado com sucesso")
        app.listen(PORT,() =>{
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e)=>{
        console.error(`Não foi possivel conectar${e}`)
    })

