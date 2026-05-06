import express from 'express'
import OpenAI from 'openai'
import dotenv from "dotenv" // .env reading
import cors from "cors"

dotenv.config()
const openai = new OpenAI({baseURL: process.env.OPENAI_BASE_URL})
const server = express()

const baseUrl = process.env.OPENAI_BASE_URL
const modelAi = process.env.OPENAI_MODEL


console.log("url:", process.env.OPENAI_BASE_URL)
console.log("MODEL:", process.env.OPENAI_MODEL)

server.use(cors({ origin: true })) // without this the app doesnt work

server.use(express.json())


server.post('/api',  async (req, res) => {

    const {areaValue, languages} = req.body
    console.log(req.body)
    try {
        const response = await openai.responses.create({
        model: modelAi,
        input: `Translate this text to ${language}
                Return ONLY the translation: ${areaValue}`
    })

    const openAiResponse =  response.output_text

    
    res.json({message : openAiResponse})
    } catch (error) {
     console.log(error)
     res.status(501).json({ error: "Not implemented" });
    }

})

const PORT = 3000
server.listen(PORT, () => {
    console.log (`listen to the PORT: ${PORT}`)
})