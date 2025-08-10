'use client'

import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Gensiyo
          </h1>
          <p className="text-xl text-slate-400">专业沉思型设计 - 智能化企业协同平台</p>
        </div>
      </div>
    </div>
  )
}

