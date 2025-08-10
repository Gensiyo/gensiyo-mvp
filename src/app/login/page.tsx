'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 relative">
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
            <h2 className="text-3xl font-bold text-white mb-2">Gen-Cog Mirror™</h2>
            <p className="text-gray-400">开启您的认知智能之旅</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="flex mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  isLogin ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                登录
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                  !isLogin ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                注册
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="邮箱地址"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="密码"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              {!isLogin && (
                <div>
                  <input
                    type="password"
                    placeholder="确认密码"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              )}
            </form>

            <div className="mt-6 space-y-4">
              <Link href="/cognitive-test">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                  {isLogin ? '登录并开始自测' : '注册并开始自测'}
                </button>
              </Link>
              
              <div className="text-center">
                <span className="text-gray-400 text-sm">
                  {isLogin ? '还没有账户？' : '已有账户？'}
                </span>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:text-blue-300 text-sm ml-1"
                >
                  {isLogin ? '立即注册' : '立即登录'}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              登录即表示您同意我们的
              <a href="#" className="text-blue-400 hover:text-blue-300">服务条款</a>
              和
              <a href="#" className="text-blue-400 hover:text-blue-300">隐私政策</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
