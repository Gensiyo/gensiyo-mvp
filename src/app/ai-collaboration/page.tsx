'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function AICollaboration() {
  const [selectedAI, setSelectedAI] = useState<string | null>(null)
  const [userInput, setUserInput] = useState('')
  const [conversation, setConversation] = useState<any[]>([])
  const [isMultiMode, setIsMultiMode] = useState(false)

  const aiModels = [
    {
      id: 'claude',
      name: 'Claude',
      description: 'Anthropic的AI助手，擅长深度分析和创造性思维',
      icon: '🧠',
      color: 'blue',
      specialty: '深度分析 • 创造思维 • 逻辑推理'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'OpenAI的语言模型，擅长对话和知识问答',
      icon: '💬',
      color: 'green',
      specialty: '对话交流 • 知识问答 • 文本生成'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      description: 'Google的多模态AI，擅长多元化信息处理',
      icon: '⭐',
      color: 'purple',
      specialty: '多模态处理 • 信息整合 • 实时分析'
    }
  ]

  const collaborationModes = [
    {
      id: 'debate',
      title: 'AI辩论模式',
      description: '让多个AI从不同角度分析同一问题',
      icon: '⚔️'
    },
    {
      id: 'brainstorm',
      title: 'AI头脑风暴',
      description: '集思广益，获得多元化的创意方案',
      icon: '💡'
    },
    {
      id: 'expert',
      title: 'AI专家会诊',
      description: '针对专业问题获得多方面专家意见',
      icon: '👥'
    },
    {
      id: 'creative',
      title: 'AI创意协作',
      description: '创意写作、设计思维的多AI协同',
      icon: '🎨'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
      green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30',
      purple: 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const simulateAIResponse = (aiId: string, input: string) => {
    const responses = {
      claude: `作为Claude，我认为这个问题需要从认知科学的角度来分析。基于您的认知档案，我建议采用系统性思维方法...`,
      chatgpt: `从ChatGPT的角度，我觉得这个话题很有趣！让我们从实用性和可操作性的角度来探讨...`,
      gemini: `Gemini在此！我可以整合多种信息源来回答。结合当前趋势和数据分析...`
    }
    return responses[aiId as keyof typeof responses] || '正在思考中...'
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    const newMessage = {
      type: 'user',
      content: userInput,
      timestamp: new Date()
    }

    if (isMultiMode) {
      // 多AI模式
      const aiResponses = aiModels.map(ai => ({
        type: 'ai',
        aiId: ai.id,
        aiName: ai.name,
        content: simulateAIResponse(ai.id, userInput),
        timestamp: new Date()
      }))
      setConversation([...conversation, newMessage, ...aiResponses])
    } else if (selectedAI) {
      // 单AI模式
      const aiResponse = {
        type: 'ai',
        aiId: selectedAI,
        aiName: aiModels.find(ai => ai.id === selectedAI)?.name,
        content: simulateAIResponse(selectedAI, userInput),
        timestamp: new Date()
      }
      setConversation([...conversation, newMessage, aiResponse])
    }

    setUserInput('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🤖 多AI逗知提示会</h1>
            <p className="text-xl text-blue-400 mb-6">Claude, ChatGPT, Gemini 协同智能对话</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              基于您的认知档案，多个AI模型将为您提供个性化的深度洞察和建议
            </p>
          </div>

          {/* AI模型选择 */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">选择AI协作伙伴</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {aiModels.map((ai) => (
                <div
                  key={ai.id}
                  className={`${getColorClasses(ai.color)} backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    selectedAI === ai.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedAI(ai.id)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{ai.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{ai.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{ai.description}</p>
                    <div className="text-xs text-blue-400">{ai.specialty}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 协作模式 */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsMultiMode(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      !isMultiMode ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    单AI对话
                  </button>
                  <button
                    onClick={() => setIsMultiMode(true)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isMultiMode ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    多AI协同
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 协作模式展示 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {collaborationModes.map((mode) => (
              <div
                key={mode.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{mode.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-1">{mode.title}</h4>
                  <p className="text-xs text-gray-400">{mode.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 对话界面 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {conversation.length === 0 ? (
                <div className="text-center text-gray-400 py-16">
                  <div className="text-4xl mb-4">💭</div>
                  <p>选择AI伙伴，开始您的智能对话之旅</p>
                  <p className="text-sm mt-2">基于您的认知档案，AI将提供个性化建议</p>
                </div>
              ) : (
                conversation.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-100'
                      }`}
                    >
                      {message.type === 'ai' && (
                        <div className="text-xs text-blue-400 mb-1">{message.aiName}</div>
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* 输入框 */}
            <div className="flex space-x-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  isMultiMode 
                    ? "向所有AI提问..." 
                    : selectedAI 
                      ? `向 ${aiModels.find(ai => ai.id === selectedAI)?.name} 提问...`
                      : "请先选择一个AI伙伴"
                }
                disabled={!selectedAI && !isMultiMode}
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!userInput.trim() || (!selectedAI && !isMultiMode)}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                发送
              </button>
            </div>
          </div>

          {/* 下一步导航 */}
          <div className="text-center bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">继续您的认知之旅</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🌐 分享到认知社区
                </button>
              </Link>
              <Link href="/lab">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🔬 探索创新实验室
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
