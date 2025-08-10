'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-700 bg-gray-900/90 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
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
            <div>
              <span className="text-xl font-bold text-white">Gensiyo</span>
              <div className="text-xs text-blue-400">认知驱动·同频共振</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">🏠 首页</Link>
            <Link href="/cognitive-test" className="text-blue-400 hover:text-blue-300 transition-colors">🧠 认知自测</Link>
            <Link href="/resonance" className="text-purple-400 hover:text-purple-300 transition-colors">🔮 同频共振</Link>
            <Link href="/ai-collaboration" className="text-gray-300 hover:text-white transition-colors">🤖 AI协同</Link>
            <Link href="/lab" className="text-gray-300 hover:text-white transition-colors">🔬 实验室</Link>
            <Link href="/community" className="text-gray-300 hover:text-white transition-colors">🌐 社区</Link>
            <Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors">💼 咨询</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="border-l border-gray-600 pl-6">
              <div className="flex space-x-4">
                <Link href="/profile" className="text-gray-300 hover:text-white transition-colors text-sm">👤 档案</Link>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm">🔐 登录</Link>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-gray-300 hover:text-white">🏠 首页</Link>
              <Link href="/cognitive-test" className="block py-2 text-blue-400 hover:text-blue-300">🧠 认知自测</Link>
              <Link href="/resonance" className="block py-2 text-purple-400 hover:text-purple-300">🔮 同频共振</Link>
              <Link href="/ai-collaboration" className="block py-2 text-gray-300 hover:text-white">🤖 AI协同</Link>
              <Link href="/lab" className="block py-2 text-gray-300 hover:text-white">🔬 实验室</Link>
              <Link href="/community" className="block py-2 text-gray-300 hover:text-white">🌐 社区</Link>
              <Link href="/enterprise" className="block py-2 text-gray-300 hover:text-white">💼 咨询</Link>
              
              <div className="border-t border-gray-600 pt-4 mt-4">
                <Link href="/profile" className="block py-1 text-gray-300 hover:text-white text-sm">👤 个人档案</Link>
                <Link href="/login" className="block py-1 text-gray-300 hover:text-white text-sm">🔐 登录</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
