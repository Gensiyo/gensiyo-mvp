'use client'

import React, { useState } from 'react'
import { Menu, X, User, LogIn, Brain, Mirror } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
        <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 mr-3">
            <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
          </div>
          <span className="text-xl font-bold text-slate-200">Gensiyo</span>
        </div>
      </nav>

      <main className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Gensiyo
          </h1>
          <p className="text-xl text-slate-400 mb-12">
            AI驱动的认知智能平台 - 完全修复版本
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-200 mb-2">🧠 Gen-Cog Mirror™</h3>
              <p className="text-slate-400">革命性认知镜像技术</p>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-200 mb-2">🤖 多AI协同</h3>
              <p className="text-slate-400">Claude + ChatGPT + Gemini</p>
            </div>
            
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-200 mb-2">🔐 立即体验</h3>
              <p className="text-slate-400">注册开始认知探索</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
