'use client'

import React, { useState } from 'react'
import { Menu, X, User, LogIn, Brain, BarChart3, Cog, Building2, Mail, Users, Beaker } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页' },
    { id: 'login', name: '🔐 登录' },
    { id: 'profile', name: '👤 个人页面' },
    { id: 'ai', name: '🤖 AI协同' },
    { id: 'analytics', name: '📊 数据分析' },
    { id: 'automation', name: '🔧 自动化' },
    { id: 'enterprise', name: '💼 企业方案' },
    { id: 'community', name: '🌐 社区' },
    { id: 'contact', name: '📞 联系我们' }
  ]

  if (currentPage === 'ai') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-200 mb-4">多AI智能协同</h1>
              <p className="text-xl text-slate-400">
                集成Claude、ChatGPT、Gemini等多AI模型，为您提供最全面的智能协作体验
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">Claude集成</h3>
                <p className="text-slate-400 mb-4">深度推理与认知分析专家</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    逻辑推理
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    文本分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    认知洞察
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">ChatGPT协同</h3>
                <p className="text-slate-400 mb-4">创意思维与对话交互伙伴</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    创意生成
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    问答对话
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    知识整合
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">Gemini协作</h3>
                <p className="text-slate-400 mb-4">Google先进AI的多模态智能</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    多模态理解
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    代码生成
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    数据分析
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">认知适配引擎</h3>
                <p className="text-slate-400 mb-4">基于个人认知模式的AI个性化</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    模式识别
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    个性化回应
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    学习偏好适配
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">群体智能</h3>
                <p className="text-slate-400 mb-4">集体认知与协作决策系统</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    集群分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    协作推理
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    集体洞察
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">智能路由器</h3>
                <p className="text-slate-400 mb-4">自动选择最适合的AI模型</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    任务分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    模型选择
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    结果融合
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">AI协同工作流</h2>
              <p className="text-slate-400 mb-6">Claude + ChatGPT + Gemini = 无限可能</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-orange-900/50 text-orange-300 px-3 py-1 rounded-full">深度分析</span>
                <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">创意思维</span>
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">多模态处理</span>
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">个性化</span>
                <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full">集体智慧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
              <div className="text-center mb-8">
                <LogIn className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-slate-200 mb-2">登录 / 注册</h1>
                <p className="text-slate-400">开始您的认知探索之旅</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">邮箱地址</label>
                  <input
                    type="email"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">密码</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  onClick={() => setCurrentPage('profile')}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  登录
                </button>
                
                <div className="text-center">
                  <span className="text-slate-400">还没有账户？</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">立即注册</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-200">认知探索者</h2>
                    <p className="text-slate-400">ID: COG-2024-001</p>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t border-slate-600/50 pt-4">
                      <h3 className="font-medium text-slate-200 mb-3">认知档案</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">注册时间</span>
                          <span className="text-slate-300">2024-08-10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">测试次数</span>
                          <span className="text-slate-300">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">认知等级</span>
                          <span className="text-emerald-400">探索者</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">认知分析结果</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">逻辑推理</span>
                        <span className="text-slate-200 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">创意思维</span>
                        <span className="text-slate-200 font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">情感智能</span>
                        <span className="text-slate-200 font-semibold">78%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">学习适应</span>
                        <span className="text-slate-200 font-semibold">88%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {navigation.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-slate-700/60 text-blue-400'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg ${
                    currentPage === item.id
                      ? 'bg-slate-700/60 text-blue-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative">
        {currentPage === 'home' ? (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Gensiyo
              </h1>
              <p className="text-xl text-slate-400 mb-12">
                AI驱动的认知智能平台 - 现已集成Claude + ChatGPT + Gemini
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div 
                  onClick={() => setCurrentPage('profile')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">👤 个人页面</h3>
                  <p className="text-slate-400">查看认知档案和分析结果</p>
                </div>
                
                <div 
                  onClick={() => setCurrentPage('login')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">🔐 登录体验</h3>
                  <p className="text-slate-400">完整的登录注册流程</p>
                </div>
                
                <div 
                  onClick={() => setCurrentPage('ai')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">🤖 多AI协同</h3>
                  <p className="text-slate-400">Claude + ChatGPT + Gemini协作</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen py-20 px-6 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-200 mb-4">
                {navigation.find(item => item.id === currentPage)?.name}
              </h1>
              <p className="text-slate-400">页面内容开发中...</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors"
              >
                返回首页
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
