'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function Resonance() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [resonanceMode, setResonanceMode] = useState('discovery')

  const resonanceTypes = [
    {
      id: 'cognitive-alignment',
      title: '认知频率匹配',
      description: '基于认知档案自动匹配思维模式相近的用户',
      icon: '🔮',
      color: 'purple',
      algorithm: '认知驱动算法',
      features: ['思维模式分析', '价值观匹配', '学习风格对齐', '互补性发现']
    },
    {
      id: 'cross-domain',
      title: '跨领域合作',
      description: '不同学科背景的专家基于共同兴趣进行协作',
      icon: '🌐',
      color: 'blue',
      algorithm: '领域桥接算法',
      features: ['学科交叉点识别', '知识互补分析', '创新潜力评估', '合作机会推荐']
    },
    {
      id: 'sensitive-topics',
      title: '敏感话题实验室',
      description: '在安全环境中探讨复杂或敏感的社会议题',
      icon: '🔬',
      color: 'orange',
      algorithm: '安全讨论协议',
      features: ['匿名身份保护', '理性讨论引导', '多视角平衡', 'AI调解支持']
    },
    {
      id: 'governance-solutions',
      title: '治理方案共创',
      description: '多AI赋能下的集体智慧生成治理解决方案',
      icon: '⚖️',
      color: 'green',
      algorithm: '治理智能算法',
      features: ['问题分解分析', '利益相关者映射', '方案可行性评估', '共识建立机制']
    }
  ]

  const platformAdvantages = [
    {
      title: '逃避注意力经济陷阱',
      description: '不以点击率和停留时间为导向，专注于认知匹配的质量',
      icon: '🚫',
      details: [
        '无算法推荐信息茧房',
        '不追求用户时长指标', 
        '避免情绪化内容传播',
        '专注深度思考与交流'
      ]
    },
    {
      title: '认知驱动的匹配机制',
      description: '基于认知档案和思维模式进行用户匹配，而非表面标签',
      icon: '🧠',
      details: [
        '深度认知能力分析',
        '思维方式兼容性评估',
        '价值观频率共振检测',
        '互补性潜力发现'
      ]
    },
    {
      title: '安全的实验性讨论空间',
      description: '为不成熟想法和敏感话题提供事实求是的探讨环境',
      icon: '🛡️',
      details: [
        '实验室级别的隐私保护',
        'AI调解的理性讨论',
        '多元视角的平衡展示',
        '建设性批评文化'
      ]
    },
    {
      title: '多AI赋能的治理创新',
      description: '通过AI协同分析复杂问题，生成可行的治理方案',
      icon: '🤖',
      details: [
        'Claude深度分析能力',
        'ChatGPT对话协调',
        'Gemini多模态整合',
        '集体智慧涌现机制'
      ]
    }
  ]

  const exampleResonances = [
    {
      topic: '城市可持续发展',
      participants: ['环境工程师', '经济学家', '社会学家', '技术专家'],
      resonanceScore: 94,
      aiInsight: 'Claude识别出跨学科合作的三个关键突破点',
      status: '活跃讨论'
    },
    {
      topic: '教育公平性争议',
      participants: ['教育学者', '政策分析师', '家长代表', '学生群体'],
      resonanceScore: 87,
      aiInsight: 'ChatGPT协调了不同立场间的建设性对话',
      status: '方案孵化'
    },
    {
      topic: '人工智能伦理边界',
      participants: ['AI研究员', '伦理学家', '法律专家', '技术哲学家'],
      resonanceScore: 91,
      aiInsight: 'Gemini整合了技术与人文的多维视角',
      status: '治理方案生成'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30',
      blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
      orange: 'bg-orange-500/20 border-orange-500/50 hover:bg-orange-500/30',
      green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.purple
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">🔮 同频共振</h1>
            <p className="text-xl text-purple-400 mb-6">认知驱动·深度匹配·理性讨论</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              逃避注意力经济的算法陷阱，通过认知档案匹配真正同频的思维伙伴，
              在安全实验环境中探讨复杂议题，共创治理解决方案
            </p>
          </div>

          {/* 平台差异化优势 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">为什么选择认知驱动而非注意力驱动？</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {platformAdvantages.map((advantage, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{advantage.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                      <p className="text-gray-300">{advantage.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {advantage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 共振机制 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">同频共振机制</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {resonanceTypes.map((type) => (
                <div
                  key={type.id}
                  className={`${getColorClasses(type.color)} backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                  onClick={() => setSelectedTopic(type.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{type.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                        <p className="text-gray-300 text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">核心算法: {type.algorithm}</div>
                  </div>

                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 实时共振示例 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">活跃的共振实例</h2>
            <div className="space-y-6">
              {exampleResonances.map((resonance, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{resonance.topic}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {resonance.participants.map((participant, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                            {participant}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{resonance.resonanceScore}%</div>
                      <div className="text-sm text-gray-400">共振指数</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400 text-sm">🤖 AI洞察</span>
                    </div>
                    <p className="text-blue-300 text-sm">{resonance.aiInsight}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      resonance.status === '活跃讨论' ? 'bg-green-500/20 text-green-400' :
                      resonance.status === '方案孵化' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {resonance.status}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                      申请加入讨论 →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 模式选择 */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">选择您的共振模式</h2>
              
              <div className="flex justify-center mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setResonanceMode('discovery')}
                      className={`px-6 py-3 rounded-lg transition-colors ${
                        resonanceMode === 'discovery' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🔍 发现同频者
                    </button>
                    <button
                      onClick={() => setResonanceMode('initiate')}
                      className={`px-6 py-3 rounded-lg transition-colors ${
                        resonanceMode === 'initiate' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🚀 发起话题
                    </button>
                    <button
                      onClick={() => setResonanceMode('laboratory')}
                      className={`px-6 py-3 rounded-lg transition-colors ${
                        resonanceMode === 'laboratory' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🔬 实验室讨论
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                {resonanceMode === 'discovery' && (
                  <div>
                    <p className="text-gray-300 mb-6">基于您的认知档案，我们将为您匹配最合适的思维伙伴</p>
                    <Link href="/cognitive-test">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        完善认知档案
                      </button>
                    </Link>
                  </div>
                )}
                
                {resonanceMode === 'initiate' && (
                  <div>
                    <p className="text-gray-300 mb-6">发起一个您关心的话题，让AI帮您找到最合适的讨论伙伴</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                      创建话题讨论
                    </button>
                  </div>
                )}
                
                {resonanceMode === 'laboratory' && (
                  <div>
                    <p className="text-gray-300 mb-6">在安全的实验环境中探讨敏感或复杂话题</p>
                    <Link href="/lab">
                      <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        进入实验室
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 下一步引导 */}
          <div className="text-center bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">开启同频共振之旅</h3>
            <p className="text-gray-300 mb-8">在认知驱动的平台上，找到真正理解您的思维伙伴</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cognitive-test">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🧠 建立认知档案
                </button>
              </Link>
              <Link href="/ai-collaboration">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🤖 体验AI协同
                </button>
              </Link>
              <Link href="/lab">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🔬 探索实验室
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
