'use client'

import React, { useState } from 'react'
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
