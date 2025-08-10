'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview')

  // 模拟用户数据
  const userProfile = {
    name: '认知探索者_Alpha',
    joinDate: '2024-03-15',
    totalTests: 47,
    currentScore: 87,
    maxScore: 92,
    streak: 23,
    achievements: [
      { id: 1, title: '记忆大师', description: '记忆力测试连续5次90+', icon: '🧠', date: '2024-07-20' },
      { id: 2, title: 'AI协同专家', description: '完成100次AI协同对话', icon: '🤖', date: '2024-07-15' },
      { id: 3, title: '社区贡献者', description: '发布10篇高质量分享', icon: '🌟', date: '2024-07-10' },
      { id: 4, title: '创新研究员', description: '参与2个实验室项目', icon: '🔬', date: '2024-07-05' }
    ],
    cognitiveHistory: [
      { date: '2024-08', memory: 85, attention: 88, logic: 90, speed: 75, creativity: 87, emotional: 83 },
      { date: '2024-07', memory: 82, attention: 85, logic: 88, speed: 73, creativity: 85, emotional: 80 },
      { date: '2024-06', memory: 79, attention: 82, logic: 85, speed: 70, creativity: 82, emotional: 78 },
      { date: '2024-05', memory: 76, attention: 80, logic: 82, speed: 68, creativity: 80, emotional: 75 },
      { date: '2024-04', memory: 73, attention: 77, logic: 80, speed: 65, creativity: 77, emotional: 72 },
      { date: '2024-03', memory: 70, attention: 75, logic: 78, speed: 62, creativity: 75, emotional: 70 }
    ],
    insights: [
      {
        title: '认知成长轨迹分析',
        content: '您的整体认知能力在过去6个月中提升了17分，其中逻辑推理能力提升最为显著。',
        type: 'growth',
        confidence: '95%'
      },
      {
        title: '个性化训练建议',
        content: '建议加强反应速度训练，可以通过快速决策游戏和注意力切换练习来改善。',
        type: 'recommendation',
        confidence: '88%'
      },
      {
        title: 'AI协同效果评估',
        content: '与AI协同学习显著提升了您的创造力和情商指标，建议继续保持这种学习模式。',
        type: 'ai-analysis',
        confidence: '92%'
      }
    ]
  }

  const getOverallTrend = () => {
    const recent = userProfile.cognitiveHistory[0]
    const earliest = userProfile.cognitiveHistory[userProfile.cognitiveHistory.length - 1]
    const avgRecent = (recent.memory + recent.attention + recent.logic + recent.speed + recent.creativity + recent.emotional) / 6
    const avgEarliest = (earliest.memory + earliest.attention + earliest.logic + earliest.speed + earliest.creativity + earliest.emotional) / 6
    return Math.round(avgRecent - avgEarliest)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 个人信息头部 */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                {userProfile.name.charAt(0)}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{userProfile.name}</h1>
                <p className="text-blue-400 mb-4">认知档案 • 一生轨迹追踪</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{userProfile.currentScore}</div>
                    <div className="text-sm text-gray-400">当前认知指数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">+{getOverallTrend()}</div>
                    <div className="text-sm text-gray-400">6个月提升</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{userProfile.totalTests}</div>
                    <div className="text-sm text-gray-400">总测试次数</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{userProfile.streak}</div>
                    <div className="text-sm text-gray-400">连续活跃天数</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 标签导航 */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📊 总览
                </button>
                <button
                  onClick={() => setActiveTab('growth')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'growth' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  📈 成长轨迹
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'achievements' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🏆 成就
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'insights' ? 'bg-yellow-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  💡 洞察
                </button>
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 当前能力雷达图 */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">当前认知能力分析</h3>
                <div className="space-y-4">
                  {[
                    {name: '记忆力', score: userProfile.cognitiveHistory[0].memory, icon: '🧠'},
                    {name: '注意力', score: userProfile.cognitiveHistory[0].attention, icon: '🎯'},
                    {name: '逻辑推理', score: userProfile.cognitiveHistory[0].logic, icon: '🧩'},
                    {name: '反应速度', score: userProfile.cognitiveHistory[0].speed, icon: '⚡'},
                    {name: '创造力', score: userProfile.cognitiveHistory[0].creativity, icon: '🌟'},
                    {name: '情商', score: userProfile.cognitiveHistory[0].emotional, icon: '❤️'}
                  ].map((ability, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{ability.icon}</span>
                        <span className="text-gray-300">{ability.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
                            style={{width: `${ability.score}%`}}
                          ></div>
                        </div>
                        <span className="text-white font-semibold w-8 text-right">{ability.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 近期活动 */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">近期活动记录</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-500/10 rounded-lg">
                    <span className="text-blue-400">🧠</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">完成记忆力测试</div>
                      <div className="text-gray-400 text-sm">得分: 85分 • 今天</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-500/10 rounded-lg">
                    <span className="text-purple-400">🤖</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">AI协同对话会话</div>
                      <div className="text-gray-400 text-sm">与Claude探讨创造力 • 昨天</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 rounded-lg">
                    <span className="text-green-400">🌐</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">社区分享</div>
                      <div className="text-gray-400 text-sm">发布认知训练心得 • 2天前</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-500/10 rounded-lg">
                    <span className="text-yellow-400">🔬</span>
                    <div className="flex-1">
                      <div className="text-white font-medium">申请实验室项目</div>
                      <div className="text-gray-400 text-sm">神经接口认知增强 • 3天前</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="space-y-8">
              {/* 成长趋势图 */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">📈 认知成长轨迹（6个月）</h3>
                <div className="space-y-6">
                  {userProfile.cognitiveHistory.map((record, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-2"></div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{record.date}</h4>
                        <div className="text-gray-400 text-sm">
                          平均分: {Math.round((record.memory + record.attention + record.logic + record.speed + record.creativity + record.emotional) / 6)}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">记忆</div>
                          <div className="text-white font-bold">{record.memory}</div>
                        </div>
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">注意</div>
                          <div className="text-white font-bold">{record.attention}</div>
                        </div>
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">逻辑</div>
                          <div className="text-white font-bold">{record.logic}</div>
                        </div>
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">速度</div>
                          <div className="text-white font-bold">{record.speed}</div>
                        </div>
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">创造</div>
                          <div className="text-white font-bold">{record.creativity}</div>
                        </div>
                        <div className="text-center p-2 bg-gray-700/30 rounded">
                          <div className="text-sm text-gray-400">情商</div>
                          <div className="text-white font-bold">{record.emotional}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 成长里程碑 */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">🎯 成长里程碑</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <h4 className="text-white font-semibold mb-1">突破90分</h4>
                    <p className="text-gray-400 text-sm">逻辑推理能力达到新高度</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📚</div>
                    <h4 className="text-white font-semibold mb-1">持续提升</h4>
                    <p className="text-gray-400 text-sm">连续6个月保持增长</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="text-white font-semibold mb-1">全面发展</h4>
                    <p className="text-gray-400 text-sm">六个维度均衡提升</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 gap-6">
              {userProfile.achievements.map((achievement) => (
                <div key={achievement.id} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                      <p className="text-gray-300 mb-4">{achievement.description}</p>
                      <div className="text-sm text-gray-400">获得时间: {achievement.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              {userProfile.insights.map((insight, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{insight.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-blue-400">置信度: {insight.confidence}</div>
                      <div className="text-xs text-gray-400">{insight.type}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{insight.content}</p>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                      📊 查看详细分析
                    </button>
                    <button className="text-green-400 hover:text-green-300 text-sm transition-colors">
                      🎯 应用建议
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 底部导航 */}
          <div className="mt-12 text-center bg-gray-800/30 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">继续您的认知之旅</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cognitive-test">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🧠 开始新测试
                </button>
              </Link>
              <Link href="/ai-collaboration">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🤖 AI协同对话
                </button>
              </Link>
              <Link href="/community">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  🌐 分享到社区
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
