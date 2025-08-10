'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Link from 'next/link'

export default function Home() {
  const platformMission = [
    {
      id: 'leader-discovery',
      title: '未来领导者的发现机制',
      description: '通过认知评估与AI协同，识别和培养具有前瞻性思维的未来领导者',
      icon: '🔍',
      color: 'blue',
      features: ['认知潜力识别', '领导力评估', '成长路径规划', '导师匹配系统']
    },
    {
      id: 'collective-wisdom',
      title: '集体智慧的培养基地',
      description: '构建协作学习环境，促进群体智能的涌现与集体认知的提升',
      icon: '🧠',
      color: 'purple',
      features: ['群体协作项目', '知识共创平台', '智慧社区建设', '集体决策支持']
    },
    {
      id: 'innovation-incubator',
      title: '社会创新的孵化平台',
      description: '为社会创新项目提供理论指导、技术支持和实践验证环境',
      icon: '🚀',
      color: 'green',
      features: ['创新项目孵化', '跨界合作促进', '影响力评估', '成果转化支持']
    }
  ]

  const theoreticalFoundations = [
    {
      title: '认知之石',
      description: '认知系统的基础理论框架',
      icon: '💎',
      application: '为未来领导者提供认知科学的理论基础'
    },
    {
      title: '系统的力量',
      description: '系统性思维与复杂性管理',
      icon: '⚙️',
      application: '培养领导者的系统性思维和全局观'
    },
    {
      title: '熵控艺术',
      description: '信息熵控制与秩序建构',
      icon: '🌊',
      application: '在混沌中建立秩序，在变化中把握机遇'
    },
    {
      title: '认知动态性',
      description: '动态认知过程与适应性学习',
      icon: '🔄',
      application: '培养持续学习和适应变化的能力'
    },
    {
      title: '动态战略思维',
      description: '战略适应与动态决策框架',
      icon: '🎯',
      application: '构建面向未来的动态战略思维模式'
    }
  ]

  const multiAICapabilities = [
    {
      title: '多AI协同成长',
      description: '通过多个AI模型的协同，为每个人提供个性化的成长路径和学习建议',
      icon: '🤖',
      benefits: ['个性化学习', '多视角分析', '智能反馈', '持续优化']
    },
    {
      title: '成果孵化系统',
      description: '从想法到实践，提供全链条的项目孵化和成果转化支持',
      icon: '🌱',
      benefits: ['项目评估', '资源匹配', '进度追踪', '成果验证']
    },
    {
      title: '专业咨询服务',
      description: '基于平台积累的数据和洞察，为组织和个人提供专业的认知发展咨询',
      icon: '💼',
      benefits: ['战略咨询', '团队诊断', '能力评估', '发展规划']
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
      purple: 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30',
      green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12 flex justify-center">
              <div className="w-32 h-32 relative">
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

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Gensiyo
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-8 font-light">
              认知驱动的未来领导者发现与培养平台
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
              基于《认知系统宇宙》理论体系，通过多AI协同赋能，<br/>
              发现未来领导者 • 培养集体智慧 • 孵化社会创新
            </p>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-white mb-2">发现机制</h3>
                <p className="text-gray-300 text-sm">识别潜在的未来领导者</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-lg font-bold text-white mb-2">培养基地</h3>
                <p className="text-gray-300 text-sm">发展集体智慧与协作能力</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">孵化平台</h3>
                <p className="text-gray-300 text-sm">推动社会创新项目落地</p>
              </div>
            </div>
          </div>
        </section>

        {/* 平台使命 */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">平台使命</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                通过认知科学与AI技术的融合，构建面向未来的人才发现与培养生态系统
              </p>
            </div>

            <div className="space-y-12">
              {platformMission.map((mission, index) => (
                <div key={mission.id} className={`${getColorClasses(mission.color)} backdrop-blur-sm border rounded-2xl p-8`}>
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-5xl">{mission.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{mission.title}</h3>
                          <p className="text-gray-300 text-lg">{mission.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">核心功能</h4>
                      <div className="space-y-3">
                        {mission.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 理论基础 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">《认知系统宇宙》理论基础</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                五大核心理论构建认知驱动的领导力发展框架
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {theoreticalFoundations.map((theory, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-3">{theory.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{theory.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{theory.description}</p>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-blue-400 text-sm">{theory.application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 多AI赋能体系 */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">多AI赋能的成长生态</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                创造一个多AI赋能的成长环境，实现个人发展与社会创新的双重目标
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {multiAICapabilities.map((capability, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{capability.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {capability.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 成果与服务 */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">平台成果与服务</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                从个人成长到组织发展，提供全方位的认知智能解决方案
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">🪞 Gen-Cog Mirror™</h3>
                <p className="text-gray-300 mb-6">
                  首个落地应用：认知智能自测与成长追踪系统，为个人提供科学的认知能力评估和发展建议。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-sm">多维度认知能力评估</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-sm">AI协同分析与建议</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-sm">个人成长轨迹追踪</span>
                  </div>
                </div>
                <Link href="/cognitive-test">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    开始认知测评
                  </button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">💼 专业咨询服务</h3>
                <p className="text-gray-300 mb-6">
                  基于平台数据洞察和理论框架，为组织和个人提供专业的认知发展和战略咨询服务。
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-sm">领导力发展咨询</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-sm">组织认知能力评估</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-sm">创新项目孵化指导</span>
                  </div>
                </div>
                <Link href="/enterprise">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    了解咨询服务
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">开启您的认知进化之旅</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              加入Gensiyo平台，发现您的认知潜力，培养未来领导力，<br/>
              与志同道合的创新者共同推动社会进步
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/login">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  立即加入平台
                </button>
              </Link>
              <Link href="/cognitive-test">
                <button className="border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300">
                  体验认知测评
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 relative">
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
              <span className="text-2xl font-bold text-gray-300">Gensiyo</span>
            </div>
            <p className="text-gray-400 mb-4">认知驱动的未来领导者发现与培养平台</p>
            <p className="text-gray-500 text-sm">© 2025 Gensiyo. 基于《认知系统宇宙》理论体系 • 发现领导者 • 培养智慧 • 孵化创新</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
