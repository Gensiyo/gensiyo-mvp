'use client'

import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe, User, LogIn, Users, Beaker, Mirror, Star, Share2 } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页' },
    { id: 'ai', name: '🤖 AI协同' },
    { id: 'analytics', name: '📊 数据分析' },
    { id: 'automation', name: '🔧 自动化' },
    { id: 'enterprise', name: '💼 企业方案' },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™' },
    { id: 'profile', name: '👤 个人页面' },
    { id: 'login', name: '🔐 登录' },
    { id: 'community', name: '🌐 社区' },
    { id: 'innovation-lab', name: '🔬 创新实验室' },
    { id: 'contact', name: '📞 联系我们' }
  ]

  const LoginPage = () => (
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
          </div>
        </div>
      </div>
    </div>
  )

  const ProfilePage = () => (
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

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">认知分析结果</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: '逻辑推理', score: 85, color: 'bg-blue-500' },
                  { label: '创意思维', score: 92, color: 'bg-purple-500' },
                  { label: '情感智能', score: 78, color: 'bg-emerald-500' },
                  { label: '学习适应', score: 88, color: 'bg-orange-500' }
                ].map((skill, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">{skill.label}</span>
                      <span className="text-slate-200 font-semibold">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div className={`${skill.color} h-2 rounded-full`} style={{width: `${skill.score}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

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
                AI驱动的认知智能平台 - 现已包含登录页和个人页
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: '👤 个人页面', desc: '查看认知档案', page: 'profile' },
                  { title: '🔐 登录体验', desc: '完整登录流程', page: 'login' },
                  { title: '🧠 Gen-Cog Mirror™', desc: '认知镜像技术', page: 'gen-cog-mirror' }
                ].map((feature, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentPage(feature.page)}
                    className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : currentPage === 'login' ? (
          <LoginPage />
        ) : currentPage === 'profile' ? (
          <ProfilePage />
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
}import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe, User, LogIn, Users, Beaker, Mirror } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页' },
    { id: 'ai', name: '🤖 AI协同' },
    { id: 'analytics', name: '📊 数据分析' },
    { id: 'automation', name: '🔧 自动化' },
    { id: 'enterprise', name: '💼 企业方案' },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™' },
    { id: 'profile', name: '👤 个人页面' },
    { id: 'login', name: '🔐 登录' },
    { id: 'community', name: '🌐 社区' },
    { id: 'innovation-lab', name: '🔬 创新实验室' },
    { id: 'contact', name: '📞 联系我们' }
  ]

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
                AI驱动的认知智能平台 - 多页面导航系统
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Gen-Cog Mirror™', desc: '认知镜像技术', page: 'gen-cog-mirror' },
                  { title: 'AI智能协同', desc: '多AI模型协作', page: 'ai' },
                  { title: '智能社区', desc: '认知共享平台', page: 'community' }
                ].map((feature, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentPage(feature.page)}
                    className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </div>
                ))}
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
