'use client'
import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function Lab() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [applicationStatus, setApplicationStatus] = useState<string>('none') // none, applying, submitted
  const [applicationData, setApplicationData] = useState({
    name: '',
    experience: '',
    interest: '',
    contribution: ''
  })

  const innovationProjects = [
    {
      id: 'neural-interface',
      title: '神经接口认知增强',
      description: '探索脑机接口在认知训练中的应用',
      status: '招募中',
      difficulty: '高级',
      participants: 8,
      maxParticipants: 12,
      requirements: ['认知科学背景', '编程能力', '创新思维'],
      lead: 'Dr. Chen',
      progress: 65,
      icon: '🧠',
      color: 'blue'
    },
    {
      id: 'quantum-cognition',
      title: '量子认知模型研究',
      description: '基于量子理论的认知过程建模',
      status: '进行中',
      difficulty: '专家级',
      participants: 6,
      maxParticipants: 8,
      requirements: ['量子物理基础', '数学建模', '认知心理学'],
      lead: 'Prof. Zhang',
      progress: 40,
      icon: '⚛️',
      color: 'purple'
    },
    {
      id: 'ai-emotion',
      title: 'AI情感认知协同',
      description: '情感AI与人类认知的深度融合研究',
      status: '筹备中',
      difficulty: '中级',
      participants: 0,
      maxParticipants: 15,
      requirements: ['机器学习', '情感计算', '心理学'],
      lead: 'Dr. Liu',
      progress: 10,
      icon: '❤️',
      color: 'red'
    },
    {
      id: 'collective-intelligence',
      title: '集体智能实验',
      description: '多人协作下的集体认知能力研究',
      status: '招募中',
      difficulty: '中级',
      participants: 12,
      maxParticipants: 20,
      requirements: ['团队协作', '数据分析', '社会心理学'],
      lead: 'Dr. Wang',
      progress: 30,
      icon: '👥',
      color: 'green'
    },
    {
      id: 'meta-cognition',
      title: '元认知自适应系统',
      description: '开发能自我优化的认知训练系统',
      status: '招募中',
      difficulty: '高级',
      participants: 4,
      maxParticipants: 10,
      requirements: ['系统设计', '认知科学', '自适应算法'],
      lead: 'Dr. Li',
      progress: 20,
      icon: '🔄',
      color: 'yellow'
    },
    {
      id: 'gen-insights',
      title: 'Gen-Insights 倒读记录',
      description: '反向认知过程分析与洞察生成',
      status: '测试中',
      difficulty: '专家级',
      participants: 3,
      maxParticipants: 6,
      requirements: ['逆向工程思维', '数据挖掘', '认知建模'],
      lead: 'Dr. Zhao',
      progress: 80,
      icon: '🔍',
      color: 'pink'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30',
      purple: 'bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30',
      red: 'bg-red-500/20 border-red-500/50 hover:bg-red-500/30',
      green: 'bg-green-500/20 border-green-500/50 hover:bg-green-500/30',
      yellow: 'bg-yellow-500/20 border-yellow-500/50 hover:bg-yellow-500/30',
      pink: 'bg-pink-500/20 border-pink-500/50 hover:bg-pink-500/30'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getStatusColor = (status: string) => {
    const statusMap = {
      '招募中': 'text-green-400',
      '进行中': 'text-blue-400',
      '筹备中': 'text-yellow-400',
      '测试中': 'text-purple-400'
    }
    return statusMap[status as keyof typeof statusMap] || 'text-gray-400'
  }

  const getDifficultyColor = (difficulty: string) => {
    const difficultyMap = {
      '中级': 'text-green-400',
      '高级': 'text-yellow-400',
      '专家级': 'text-red-400'
    }
    return difficultyMap[difficulty as keyof typeof difficultyMap] || 'text-gray-400'
  }

  const handleApplicationSubmit = () => {
    setApplicationStatus('submitted')
    // 这里可以添加实际的申请逻辑
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">🔬 创新实验室</h1>
            <p className="text-xl text-blue-400 mb-6">粗进某侧原示 • 申请加入前沿研究</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              参与突破性认知科学研究，与顶尖研究者共同探索人类智能的边界
            </p>
          </div>

          {/* 实验室概览 */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl text-blue-400 font-bold">6</div>
              <div className="text-sm text-gray-400">活跃项目</div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl text-green-400 font-bold">127</div>
              <div className="text-sm text-gray-400">研究人员</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl text-purple-400 font-bold">23</div>
              <div className="text-sm text-gray-400">发表论文</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl text-yellow-400 font-bold">89%</div>
              <div className="text-sm text-gray-400">成功率</div>
            </div>
          </div>

          {/* 项目列表 */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {innovationProjects.map((project) => (
              <div
                key={project.id}
                className={`${getColorClasses(project.color)} backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 cursor-pointer transform hover:scale-105`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{project.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className={`text-sm ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className={`text-sm ${getDifficultyColor(project.difficulty)}`}>
                          {project.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>研究进度</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${project.progress}%`}}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">研究要求：</div>
                  <div className="flex flex-wrap gap-2">
                    {project.requirements.map((req, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div>负责人: {project.lead}</div>
                    <div>{project.participants}/{project.maxParticipants} 参与者</div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project.id)
                      setApplicationStatus('applying')
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                    disabled={project.participants >= project.maxParticipants}
                  >
                    {project.participants >= project.maxParticipants ? '已满员' : '申请加入'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 申请表单模态框 */}
          {applicationStatus === 'applying' && selectedProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">申请加入研究项目</h3>
                  <button 
                    onClick={() => setApplicationStatus('none')}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {innovationProjects.find(p => p.id === selectedProject)?.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {innovationProjects.find(p => p.id === selectedProject)?.description}
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      姓名 / 昵称
                    </label>
                    <input
                      type="text"
                      value={applicationData.name}
                      onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="请输入您的姓名或昵称"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      相关经验
                    </label>
                    <textarea
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                      className="w-full h-24 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="请描述您在相关领域的经验和背景..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      研究兴趣
                    </label>
                    <textarea
                      value={applicationData.interest}
                      onChange={(e) => setApplicationData({...applicationData, interest: e.target.value})}
                      className="w-full h-24 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="请说明您对此项目的兴趣和期望..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      预期贡献
                    </label>
                    <textarea
                      value={applicationData.contribution}
                      onChange={(e) => setApplicationData({...applicationData, contribution: e.target.value})}
                      className="w-full h-24 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                      placeholder="请描述您能为此项目带来什么贡献..."
                    />
                  </div>
                </form>

                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={handleApplicationSubmit}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    提交申请
                  </button>
                  <button
                    onClick={() => setApplicationStatus('none')}
                    className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    取消
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 申请成功提示 */}
          {applicationStatus === 'submitted' && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-md w-full text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-4">申请已提交！</h3>
                <p className="text-gray-300 mb-6">
                  您的申请已成功提交，我们将在24小时内审核并通过邮件联系您。
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setApplicationStatus('none')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    继续探索
                  </button>
                  <Link href="/profile">
                    <button className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      查看个人档案
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 实验室文化 */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🌟 实验室文化</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              我们相信每个人都有独特的认知视角。在这里，创新思维比既有经验更重要，勇于探索比完美答案更宝贵。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="text-white font-semibold mb-2">创新优先</h4>
                <p className="text-gray-400 text-sm">鼓励突破性思维和大胆假设</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="text-white font-semibold mb-2">协作共享</h4>
                <p className="text-gray-400 text-sm">跨学科合作，知识开放共享</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="text-white font-semibold mb-2">快速迭代</h4>
                <p className="text-gray-400 text-sm">快速实验，从失败中学习</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
