'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function CognitiveTest() {
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [testCompleted, setTestCompleted] = useState(false)
  const [testResults, setTestResults] = useState<any>(null)

  const testCategories = [
    {
      id: 'memory',
      title: '记忆力测试',
      description: '评估短期和长期记忆能力',
      icon: '🧠',
      duration: '5-10分钟',
      color: 'blue'
    },
    {
      id: 'attention',
      title: '注意力测试',
      description: '测量专注力和注意力持续时间',
      icon: '🎯',
      duration: '3-8分钟',
      color: 'green'
    },
    {
      id: 'logic',
      title: '逻辑推理',
      description: '评估逻辑思维和推理能力',
      icon: '🧩',
      duration: '10-15分钟',
      color: 'purple'
    },
    {
      id: 'speed',
      title: '反应速度',
      description: '测试认知处理速度',
      icon: '⚡',
      duration: '2-5分钟',
      color: 'yellow'
    },
    {
      id: 'creativity',
      title: '创造力测试',
      description: '评估创新思维和发散思维',
      icon: '🌟',
      duration: '8-12分钟',
      color: 'pink'
    },
    {
      id: 'emotional',
      title: '情商测试',
      description: '评估情绪智能和社交认知',
      icon: '❤️',
      duration: '6-10分钟',
      color: 'red'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
      green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30',
      purple: 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30',
      yellow: 'bg-yellow-500/20 border-yellow-500/50 hover:bg-yellow-500/30',
      pink: 'bg-pink-500/20 border-pink-500/50 hover:bg-pink-500/30',
      red: 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const simulateTestCompletion = () => {
    setTestCompleted(true)
    setTestResults({
      overall: 85,
      memory: 82,
      attention: 88,
      logic: 90,
      speed: 75,
      creativity: 87,
      emotional: 83
    })
  }

  if (testCompleted && testResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Navigation />
        
        <main className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">🎉 认知评估结果</h1>
              <p className="text-xl text-blue-400">启动引擎 - 您的认知档案已生成</p>
            </div>

            {/* 总体评分 */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">{testResults.overall}</div>
                <div className="text-xl text-blue-400 mb-4">综合认知指数</div>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full" style={{width: `${testResults.overall}%`}}></div>
                </div>
              </div>
            </div>

            {/* 详细分析按钮区域 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">生成详细分析</h3>
                  <p className="text-gray-300 mb-6">深度解读您的认知能力表现，提供个性化见解和建议</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors group-hover:scale-105 transform">
                    查看详细分析
                  </button>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group">
                <div className="text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">新辞评编分析报告</h3>
                  <p className="text-gray-300 mb-6">AI生成的专业认知评估报告，可保存和分享</p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors group-hover:scale-105 transform">
                    生成报告
                  </button>
                </div>
              </div>
            </div>

            {/* 能力雷达图预览 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">认知能力维度分析</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {name: '记忆力', score: testResults.memory, icon: '🧠'},
                  {name: '注意力', score: testResults.attention, icon: '🎯'},
                  {name: '逻辑推理', score: testResults.logic, icon: '🧩'},
                  {name: '反应速度', score: testResults.speed, icon: '⚡'},
                  {name: '创造力', score: testResults.creativity, icon: '🌟'},
                  {name: '情商', score: testResults.emotional, icon: '❤️'}
                ].map((ability, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{ability.icon}</div>
                    <div className="text-lg font-semibold text-white">{ability.score}</div>
                    <div className="text-sm text-gray-400">{ability.name}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: `${ability.score}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 下一步引导 */}
            <div className="text-center bg-gray-800/30 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">探索更多功能</h3>
              <p className="text-gray-300 mb-6">基于您的认知档案，继续您的智能之旅</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-collaboration">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    🤖 多AI协同页面
                  </button>
                </Link>
                <Link href="/community">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    🌐 加入认知社区
                  </button>
                </Link>
                <Link href="/profile">
                  <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    👤 查看个人档案
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 relative">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#3B82F6" strokeWidth="12" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#3B82F6" strokeWidth="8" />
                  <path d="M 160 160 Q 160 140 180 140 L 220 140 Q 240 140 240 160 L 240 200 Q 240 240 220 260 L 200 280 L 180 260 Q 160 240 160 200 Z" 
                        fill="none" stroke="#3B82F6" strokeWidth="6" />
                  <circle cx="200" cy="180" r="4" fill="#3B82F6" />
                  <circle cx="185" cy="195" r="3" fill="#3B82F6" />
                  <circle cx="215" cy="195" r="3" fill="#3B82F6" />
                  <circle cx="200" cy="210" r="3" fill="#3B82F6" />
                  <line x1="200" y1="180" x2="185" y2="195" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="200" y1="180" x2="215" y2="195" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="200" y1="180" x2="200" y2="210" stroke="#3B82F6" strokeWidth="2" />
                  <line x1="185" y1="195" x2="215" y2="195" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M 280 120 L 285 130 L 295 130 L 287 137 L 290 147 L 280 140 L 270 147 L 273 137 L 265 130 L 275 130 Z" 
                        fill="#3B82F6" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Gen-Cog Mirror™
            </h1>
            <p className="text-xl text-blue-400 mb-6">认知智能自测平台</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              通过科学的认知测试，全面评估您的认知能力，追踪成长曲线，发现认知潜力
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testCategories.map((test) => (
              <div
                key={test.id}
                className={`${getColorClasses(test.color)} backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setCurrentTest(test.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{test.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{test.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{test.description}</p>
                  <div className="text-xs text-gray-400">预计时长：{test.duration}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">开始您的认知之旅</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              选择任意测试开始，建立您的认知档案，探索大脑的无限潜能
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={simulateTestCompletion}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                开始完整测评
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                查看历史记录
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
