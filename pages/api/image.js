import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { pet } = req.body
    try {

      const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: "generate a real pet picture based on the input",
        n: 1,
        size: "1024x1024",
      });
      // console.log(image_url)
      res.send(response)
    }
    catch (e) {
      console.log(e)
    }
  }
  res.send(null)
}

// if(req.method === "POST") { ... }
// if - JavaScript的条件语句关键字。用于执行基于条件的代码块。
// ( 和 ) - 括号包围if语句的条件表达式。
// req.method - 访问req对象的method属性，它表示HTTP请求的类型（如GET, POST等）。
// === - 严格等于运算符，用于比较左右两边的值及其类型是否完全相同。
// "POST" - 字符串字面量，表示HTTP的POST请求方法。
// { ... } - 大括号定义了if语句的代码块。

// const { pet } = req.body
// const - 声明一个新的常量。
// { pet } - 对象解构赋值，从req.body对象中提取pet属性。
// = - 赋值运算符。
// req.body - 访问req对象的body属性，它包含HTTP请求的主体数据。

// try { ... } catch(e) { ... }
// try - 关键字，开始一个异常处理块。
// { ... } - 定义try块的范围。
// catch(e) - 定义一个错误处理块，e是捕获到的异常对象。
// { ... } - 定义catch块的范围。

// await openai.images.generate({ ... })
// await - 异步操作的关键字，用于等待Promise的解决。
// openai.images.generate - 调用openai对象的images.generate方法。
// { ... } - 包含方法参数的对象字面量。
// model, prompt, n, size - 属性名，指定生成图片所需的模型、提示、数量和尺寸。

// res.send(response)
// res.send - 调用res对象的send方法，发送HTTP响应。
// response - send方法的参数，包含API调用的响应。

// catch(e) { console.log(e) }
// console.log(e) - 打印异常对象e到控制台。
// res.send(null)
// res.send(null) - 在条件不满足时（非POST请求），发送null作为HTTP响应。
