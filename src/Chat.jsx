import React, { useState } from 'react'
import { Configuration } from 'openai'
const { OpenAIApi } = require("openai");
const key_rbt = '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'
const configuration = new Configuration({
  apiKey:key_rbt
})
const openai = new OpenAIApi(configuration);
const Chat = () => {
  const [prompt, setPrompt] = useState("general")
  const [response, setresponse] = useState("")
  const [input, setinput] = useState("")
  const handleSubmit = async() => {
  console.log("final Prompt -> "+prompt)
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });
  console.log(response.data.choices[0].message);
  setresponse(response.data.choices[0].message.content)
}
  return (
    <div>
       <input style={{fontSize:"50px"}} placeholder='Enter the Question'onChange={(e) => {
        setPrompt(e.target.value)
        console.log(e.target.value)
       }}></input>
       <button onClick={handleSubmit}>Submit</button>
       <h1>{response}</h1>
    </div>
  )

  }

export default Chat