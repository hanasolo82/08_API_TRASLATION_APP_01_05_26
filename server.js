import express from 'express'
import OpenAI from 'openai'
import dotenv from "dotenv" // .env reading
dotenv.config()
const openai = new OpenAI({baseURL: process.env.OPENAI_BASE_URL})
const server = express()

const baseUrl = process.env.OPENAI_BASE_URL
const modelAi = process.env.OPENAI_MODEL


console.log("url:", process.env.OPENAI_BASE_URL)
console.log("MODEL:", process.env.OPENAI_MODEL)

server.use(express.json())

server.post('/api',  async (req, res) => {
try {
    const response = await openai.responses.create({
    model: modelAi,
    input: "responde si has rebido esto correctamente"
})

const openAiResponse =  response.output_text

console.log(openAiResponse)
res.json({
      message: openAiResponse
    })
} catch (error) {
     console.log(error)
    }

})

const PORT = 3000
server.listen(PORT, () => {
    console.log (`listen to the PORT: ${PORT}`)
})