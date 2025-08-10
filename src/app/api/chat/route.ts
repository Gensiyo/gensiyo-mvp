import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(request: NextRequest) {
  try {
    const { message, model = 'claude' } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // 根据选择的模型生成不同的系统提示
    const systemPrompts = {
      claude: "你是Claude，一个逻辑分析专家。请从结构化和理性的角度分析问题，提供清晰的思考框架。",
      gpt: "你是ChatGPT的模拟版本，一个创意思维伙伴。请从创新和实用的角度思考问题，提供富有创意的解决方案。",
      gemini: "你是Gemini的模拟版本，一个多模态整合专家。请从多维度和综合性的角度分析问题。",
      all: "你是GENSIYO AI协同中枢，整合了多个AI模型的能力。请提供多角度的分析和建议。"
    }

    const systemPrompt = systemPrompts[model as keyof typeof systemPrompts] || systemPrompts.claude

    const response = await anthropic.messages.create({
      model: 'claude-3-sonnet-20240229',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    })

    const content = response.content[0]
    if (content.type === 'text') {
      return NextResponse.json({ 
        response: content.text,
        model: model,
        timestamp: new Date().toISOString()
      })
    }

    return NextResponse.json({ error: 'Invalid response format' }, { status: 500 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ 
      error: 'Failed to get AI response',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
