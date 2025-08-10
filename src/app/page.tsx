'use client'

import React, { useState } from 'react'
import { Menu, X, User, LogIn, Brain, BarChart3, Cog, Building2, Mail, Users, Beaker, Mirror, CheckCircle, ArrowRight, Star, Target, Zap } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页' },
    { id: 'login', name: '🔐 登录' },
    { id: 'profile', name: '👤 个人页面' },
    { id: 'ai', name: '🤖 AI协同' },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™' },
    { id: 'analytics', name: '📊 数据分析' },
    { id: 'automation', name: '🔧 自动化' },
    { id: 'enterprise', name: '💼 企业方案' },
    { id: 'community', name: '🌐 社区' },
    { id: 'contact', name: '📞 联系我们' }
  ]

  if (currentPage === 'gen-cog-mirror') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mirror className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-200 mb-4">Gen-Cog Mirror™</h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                革命性认知镜像技术，通过多维度分析映射您的思维模式、认知偏好和成长潜力
              </p>
            </div>

            {/* Process Flow */}
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {[
                { title: '登录注册', desc: '创建个人认知档案', icon: LogIn },
                { title: '自测评估', desc: '多维认知能力测试', icon: Brain },
                { title: 'AI分析', desc: '深度认知模式解析', icon: Zap },
                { title: '社区协同', desc: '与他人分享洞察', icon: Users },
                { title: '个人成长', desc: '持续优化提升', icon: Target }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-200 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                  {i < 4 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-slate-600 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: '认知详情分析',
                  icon: BarChart3,
                  description: '生成全面的认知分析报告，深度解析思维模式',
                  features: ['生成详细分析报告', '认知优势识别', '改进建议提供', '个性化学习路径']
                },
                {
                  title: '多AI智能协同',
                  icon: Brain,
                  description: '集成Claude、ChatGPT、Gemini提供最佳认知体验',
                  features: ['多模型协作分析', '个性化对话体验', '认知模式匹配', '智能推荐系统']
                },
                {
                  title: '社区互动分享',
                  icon: Users,
                  description: '在保护隐私的前提下分享认知洞察，获得集体智慧',
                  features: ['匿名认知分享', '群体智慧汇聚', '协作学习环境', '专家指导建议']
                },
                {
                  title: '创新研究实验',
                  icon: Beaker,
                  description: '参与前沿认知科学研究，探索人类认知的边界',
                  features: ['前沿认知研究', '实验性功能测试', '认知边界探索', '科学数据贡献']
                }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">{feature.title}</h3>
                  </div>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, j) => (
                      <li key={j} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technology Highlights */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">核心技术优势</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: '深度学习算法', desc: '基于最新神经网络技术，精准分析认知模式' },
                  { title: '多维度评估', desc: '从逻辑、创意、情感、适应性等多角度全面评估' },
                  { title: '实时镜像反馈', desc: '即时生成认知镜像，动态跟踪思维变化轨迹' }
                ].map((tech, i) => (
                  <div key={i} className="text-center">
                    <Star className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-200 mb-2">{tech.title}</h3>
                    <p className="text-slate-400 text-sm">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setCurrentPage('login')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
              >
                开始认知镜像体验
              </button>
              <p className="text-slate-400 mt-4">免费注册，立即开始您的认知探索之旅</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'ai') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div
cat > src/app/page.tsx << 'EOF'
'use client'

import React, { useState } from 'react'
import { Menu, X, User, LogIn, Brain, BarChart3, Cog, Building2, Mail, Users, Beaker, Mirror, CheckCircle, ArrowRight, Star, Target, Zap } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页' },
    { id: 'login', name: '🔐 登录' },
    { id: 'profile', name: '👤 个人页面' },
    { id: 'ai', name: '🤖 AI协同' },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™' },
    { id: 'analytics', name: '📊 数据分析' },
    { id: 'automation', name: '🔧 自动化' },
    { id: 'enterprise', name: '💼 企业方案' },
    { id: 'community', name: '🌐 社区' },
    { id: 'contact', name: '📞 联系我们' }
  ]

  if (currentPage === 'gen-cog-mirror') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mirror className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-slate-200 mb-4">Gen-Cog Mirror™</h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                革命性认知镜像技术，通过多维度分析映射您的思维模式、认知偏好和成长潜力
              </p>
            </div>

            {/* Process Flow */}
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {[
                { title: '登录注册', desc: '创建个人认知档案', icon: LogIn },
                { title: '自测评估', desc: '多维认知能力测试', icon: Brain },
                { title: 'AI分析', desc: '深度认知模式解析', icon: Zap },
                { title: '社区协同', desc: '与他人分享洞察', icon: Users },
                { title: '个人成长', desc: '持续优化提升', icon: Target }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-200 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                  {i < 4 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-slate-600 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: '认知详情分析',
                  icon: BarChart3,
                  description: '生成全面的认知分析报告，深度解析思维模式',
                  features: ['生成详细分析报告', '认知优势识别', '改进建议提供', '个性化学习路径']
                },
                {
                  title: '多AI智能协同',
                  icon: Brain,
                  description: '集成Claude、ChatGPT、Gemini提供最佳认知体验',
                  features: ['多模型协作分析', '个性化对话体验', '认知模式匹配', '智能推荐系统']
                },
                {
                  title: '社区互动分享',
                  icon: Users,
                  description: '在保护隐私的前提下分享认知洞察，获得集体智慧',
                  features: ['匿名认知分享', '群体智慧汇聚', '协作学习环境', '专家指导建议']
                },
                {
                  title: '创新研究实验',
                  icon: Beaker,
                  description: '参与前沿认知科学研究，探索人类认知的边界',
                  features: ['前沿认知研究', '实验性功能测试', '认知边界探索', '科学数据贡献']
                }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-200">{feature.title}</h3>
                  </div>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, j) => (
                      <li key={j} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technology Highlights */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">核心技术优势</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: '深度学习算法', desc: '基于最新神经网络技术，精准分析认知模式' },
                  { title: '多维度评估', desc: '从逻辑、创意、情感、适应性等多角度全面评估' },
                  { title: '实时镜像反馈', desc: '即时生成认知镜像，动态跟踪思维变化轨迹' }
                ].map((tech, i) => (
                  <div key={i} className="text-center">
                    <Star className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-200 mb-2">{tech.title}</h3>
                    <p className="text-slate-400 text-sm">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setCurrentPage('login')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
              >
                开始认知镜像体验
              </button>
              <p className="text-slate-400 mt-4">免费注册，立即开始您的认知探索之旅</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'ai') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-slate-200 mb-4">多AI智能协同</h1>
              <p className="text-xl text-slate-400">
                集成Claude、ChatGPT、Gemini等多AI模型，为您提供最全面的智能协作体验
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">Claude集成</h3>
                <p className="text-slate-400 mb-4">深度推理与认知分析专家</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    逻辑推理
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    文本分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    认知洞察
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">ChatGPT协同</h3>
                <p className="text-slate-400 mb-4">创意思维与对话交互伙伴</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    创意生成
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    问答对话
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    知识整合
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">Gemini协作</h3>
                <p className="text-slate-400 mb-4">Google先进AI的多模态智能</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    多模态理解
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    代码生成
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    数据分析
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">认知适配引擎</h3>
                <p className="text-slate-400 mb-4">基于个人认知模式的AI个性化</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    模式识别
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    个性化回应
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    学习偏好适配
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">群体智能</h3>
                <p className="text-slate-400 mb-4">集体认知与协作决策系统</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    集群分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    协作推理
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    集体洞察
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">智能路由器</h3>
                <p className="text-slate-400 mb-4">自动选择最适合的AI模型</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    任务分析
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    模型选择
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    结果融合
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-200 mb-4">AI协同工作流</h2>
              <p className="text-slate-400 mb-6">Claude + ChatGPT + Gemini = 无限可能</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-orange-900/50 text-orange-300 px-3 py-1 rounded-full">深度分析</span>
                <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">创意思维</span>
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">多模态处理</span>
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">个性化</span>
                <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full">集体智慧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-md mx-auto">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
              <div className="text-center mb-8">
                <LogIn className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-slate-200 mb-2">登录 / 注册</h1>
                <p className="text-slate-400">开始您的认知探索之旅</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">邮箱地址</label>
                  <input
                    type="email"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">密码</label>
                  <input
                    type="password"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  onClick={() => setCurrentPage('profile')}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  登录
                </button>
                
                <div className="text-center">
                  <span className="text-slate-400">还没有账户？</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">立即注册</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <nav className="bg-slate-900/80 border-b border-slate-700/50 p-4">
          <div className="flex items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center cursor-pointer"
            >
              <div className="w-8 h-8 mr-3">
                <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-slate-200">Gensiyo</span>
            </button>
          </div>
        </nav>
        
        <div className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-200">认知探索者</h2>
                    <p className="text-slate-400">ID: COG-2024-001</p>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t border-slate-600/50 pt-4">
                      <h3 className="font-medium text-slate-200 mb-3">认知档案</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">注册时间</span>
                          <span className="text-slate-300">2024-08-10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">测试次数</span>
                          <span className="text-slate-300">12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">认知等级</span>
                          <span className="text-emerald-400">探索者</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-200 mb-4">认知分析结果</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">逻辑推理</span>
                        <span className="text-slate-200 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">创意思维</span>
                        <span className="text-slate-200 font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">情感智能</span>
                        <span className="text-slate-200 font-semibold">78%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">学习适应</span>
                        <span className="text-slate-200 font-semibold">88%</span>
                      </div>
                      <div className="w-full bg-slate-600/50 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                AI驱动的认知智能平台 - Gen-Cog Mirror™ 现已完整上线
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div 
                  onClick={() => setCurrentPage('gen-cog-mirror')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">🧠 Gen-Cog Mirror™</h3>
                  <p className="text-slate-400">革命性认知镜像技术</p>
                </div>
                
                <div 
                  onClick={() => setCurrentPage('ai')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">🤖 多AI协同</h3>
                  <p className="text-slate-400">Claude + ChatGPT + Gemini协作</p>
                </div>
                
                <div 
                  onClick={() => setCurrentPage('login')}
                  className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">🔐 立即体验</h3>
                  <p className="text-slate-400">注册开始认知探索</p>
                </div>
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
