'use client'

import { useState, useEffect } from 'react';

function Profile() {
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState(null);
  const [responseImage, setResponseImage] = useState("")
  const handleGenerateText = () => {
    fetch('/api/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 发送一个示例消息到后端
      body: JSON.stringify({ message: userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data)
        setResponse(data.message); // 设置响应数据
      })
  }

  const handleGenerateImage = () => {
    fetch('/api/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 发送一个示例消息到后端
      body: JSON.stringify({ message: userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data)
        const { url } = data.data[0]
        console.log("url:", url)
        setResponseImage(url)
      })
  }

  return (
    <div>
      <h1>Please enter an animal name</h1><br />
      <input type="text" value={userInput}
        style={{ width: '600px', border: "1px solid black", margin: "20px", padding: "20px", fontSize: "20px" }}
        onChange={e => setUserInput(e.target.value)} />
      <br />
      <button onClick={handleGenerateText}><h2>Generate Name</h2></button>
      {
        response &&
        <div><br />
          {response.message.content}
        </div>
      }
      <br /><br />
      <button onClick={handleGenerateImage}><h2>Generate image</h2></button><br />
      {responseImage
        &&
        <img src={responseImage} />
      }
    </div>
  );
}

export default Profile