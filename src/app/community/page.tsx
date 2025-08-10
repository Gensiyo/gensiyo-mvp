'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function Community() {
  const [activeTab, setActiveTab] = useState('share')
  const [newPost, setNewPost] = useState('')

  const communityPosts = [
    {
      id: 1,
      user: '认知探索者_001',
      cognitiveScore: 87,
      title: '记忆力训练的突破性发现',
      content: '通过AI协同分析，我发现了一种新的记忆训练方法...',
      tags: ['记忆力', 'AI协同', '突破'],
      likes: 23,
      comments: 7,
      timestamp: '2小时前',
      aiInsights: 'Claude建议：这种方法与认知负荷理论相符...'
    },
    {
      id: 2,
      user: '逻辑思维_beta',
      cognitiveScore: 92,
      title: '多AI辩论模式的意外收获',
      content: '在AI辩论中发现了自己思维的盲点，原来逻辑推理还可以这样...',
      tags: ['逻辑推理', '多AI', '思维突破'],
      likes: 31,
      comments: 12,
      timestamp: '5小时前',
      aiInsights: 'ChatGPT分析：用户展现了元认知能力的提升...'
    },
    {
      id: 3,
      user: '创意无限_gamma',
      cognitiveScore: 79,
      title: '从65分到79分的成长轨迹',
      content: '分享我3个月的认知成长曲线，希望能帮助到大家...',
      tags: ['成长曲线', '经验分享', '激励'],
      likes: 45,
      comments: 18,
      timestamp: '1天前',
      aiInsights: 'Gemini观察：持续性训练显示显著效果...'
    }
  ]

  const insights = [
    {
      title: '本周认知洞察',
      content: '记忆力训练结合情绪管理，效果提升40%',
      source: 'AI数据分析',
      confidence: '95%'
    },
    {
      title: '社区趋势发现',
      content: '多AI协同讨论的用户，创造力平均提升25%',
      source: 'Claude分析',
      confidence: '88%'
    },
    {
      title: '成长模式识别',
      content: '每日自测用户的认知稳定性更高',
      source: 'ChatGPT统计',
      confidence: '92%'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🌐 认知智能社区</h1>
            <p className="text-xl text-blue-400 mb-6">内容分享 • 闲语共享 • 智慧指出</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              与志同道合的认知探索者分享经验，获得AI智能洞察，共同成长
            </p>
          </div>

          {/* 社区导航 */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('share')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'share' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📝 内容分享
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'chat' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  💬 闲语共享
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'insights' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🎯 AI洞察指出
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 主要内容区 */}
            <div className="lg:col-span-2">
              {activeTab === 'share' && (
                <div className="space-y-6">
                  {/* 发布新内容 */}
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">分享您的认知发现</h3>
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="分享您的认知训练经验、AI协同心得、或者有趣的发现..."
                      className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                    />
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full cursor-pointer hover:bg-blue-500/30">
                          #认知训练
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full cursor-pointer hover:bg-purple-500/30">
                          #AI协同
                        </span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full cursor-pointer hover:bg-green-500/30">
                          #成长经验
                        </span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                        发布分享
                      </button>
                    </div>
                  </div>

                  {/* 社区动态 */}
                  {communityPosts.map((post) => (
                    <div key={post.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                              {post.user.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">{post.user}</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-400">认知指数: {post.cognitiveScore}</span>
                                <span className="text-xs text-gray-500">• {post.timestamp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">{post.title}</h3>
                      <p className="text-gray-300 mb-4">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* AI洞察 */}
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-green-400 text-sm">🤖 AI洞察指出</span>
                        </div>
                        <p className="text-green-300 text-sm">{post.aiInsights}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-6">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <span>👍</span>
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <span>💬</span>
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <span>🔗</span>
                            <span className="text-sm">分享</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'chat' && (
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">💬 实时闲语共享</h3>
                  <div className="h-96 bg-gray-700/30 rounded-lg p-4 mb-4">
                    <div className="text-center text-gray-400 mt-32">
                      <div className="text-4xl mb-4">💭</div>
                      <p>实时聊天功能开发中...</p>
                      <p className="text-sm mt-2">与社区成员即时交流认知训练心得</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="输入您想分享的想法..."
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      发送
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'insights' && (
                <div className="space-y-6">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
                        <div className="text-right">
                          <div className="text-sm text-green-400">置信度: {insight.confidence}</div>
                          <div className="text-xs text-gray-400">{insight.source}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg">{insight.content}</p>
                      <div className="mt-4 flex space-x-4">
                        <button className="text-green-400 hover:text-green-300 text-sm transition-colors">
                          📊 查看详细数据
                        </button>
                        <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                          🔗 应用到我的训练
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 侧边栏 */}
            <div className="space-y-6">
              {/* 社区统计 */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">📊 社区数据</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">活跃用户</span>
                    <span className="text-white font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">今日分享</span>
                    <span className="text-white font-semibold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI洞察</span>
                    <span className="text-white font-semibold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">平均认知提升</span>
                    <span className="text-green-400 font-semibold">+12%</span>
                  </div>
                </div>
              </div>

              {/* 热门话题 */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">🔥 热门话题</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">#记忆训练新方法</span>
                    <span className="text-blue-400 text-xs">238讨论</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">#AI协同技巧</span>
                    <span className="text-blue-400 text-xs">189讨论</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">#认知成长曲线</span>
                    <span className="text-blue-400 text-xs">156讨论</span>
                  </div>
                </div>
              </div>

              {/* 下一步引导 */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">🚀 继续探索</h3>
                <div className="space-y-3">
                  <Link href="/lab">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                      🔬 申请创新实验室
                    </button>
                  </Link>
                  <Link href="/profile">
                    <button className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                      👤 查看个人档案
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
