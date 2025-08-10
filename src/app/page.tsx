'use client'

import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold text-white">Gensiyo</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-32">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">G</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Gensiyo
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI驱动的认知智能平台 - 完全重置版本
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-400 text-xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">智能认知</h3>
                <p className="text-gray-400">AI驱动的认知分析与智能决策支持</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-purple-400 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">高效处理</h3>
                <p className="text-gray-400">快速响应，实时数据处理与分析</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-green-400 text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">专业定制</h3>
                <p className="text-gray-400">针对性解决方案，满足个性化需求</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-semibold text-gray-300">Gensiyo</span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Gensiyo. 专业AI认知智能平台</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
