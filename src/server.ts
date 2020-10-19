import express from 'express'
import { getRepository } from 'typeorm'

import './database/connection'

const app = express()

app.use(express.json())


app.post('/restaurant', (req, res) => {
    
    const { 
        name,
        address,
        week_opens_at,
        week_closes_at,
        weekend_opens_at,
        weekend_closes_at
    } = req.body
    
    res.json({
        message: "Funcionando!"
    })
})


app.listen(3333)