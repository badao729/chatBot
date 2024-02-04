import OpenAI from 'openai'  //导入了 openai 库

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); 
//创建 OpenAI 实例

export default async function handler(req, res) {
    //定义API router处理函数 handler,async为异步操作

    const { message } = req.body
    //请求解构出 message 变量

    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system",
            content: 'Please generate 4 names with first and last name for a pet based on the input' + message
        }],
        model: "gpt-3.5-turbo",
    })
    //openai.chat.completions.create({...}): 向 OpenAI API 发起请求，请求聊天模型生成文本。
    //messages: 是传递给 API 的消息数组，角色被设定为 "system"，内容是之前从请求体中提取的 message。

    const result = completion.choices[0]
    //从 OpenAI API 的响应中获取第一个结果。
    res.status(200).json({ message: result })
}
//这行代码设置 HTTP 响应的状态码为 200（表示成功），并发送一个包含生成的文本的 JSON 对象作为响应
//req 和 res 分别是请求和响应对象
