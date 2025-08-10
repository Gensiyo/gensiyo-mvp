'use client'
import React from 'react'
import Navigation from '../../components/Navigation'

export default function DataAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">📊 数据分析页面</h1>
          <p className="text-gray-300 text-lg">数据分析功能正在开发中...</p>
        </div>
      </main>
    </div>
  )
}
