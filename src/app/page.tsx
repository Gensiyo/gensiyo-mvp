'use client'

import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe, User, LogIn, Users, Beaker, Mirror, ArrowRight, CheckCircle, Star, Zap, Shield, Target, TrendingUp, Heart, MessageCircle, Share2, BookOpen, Code, Database, Cloud, Lock } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页', icon: Globe },
    { id: 'ai', name: '🤖 AI协同', icon: Brain },
    { id: 'analytics', name: '📊 数据分析', icon: BarChart3 },
    { id: 'automation', name: '🔧 自动化', icon: Cog },
    { id: 'enterprise', name: '💼 企业方案', icon: Building2 },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™', icon: Mirror },
    { id: 'profile', name: '👤 个人页面', icon: User },
    { id: 'login', name: '🔐 登录', icon: LogIn },
    { id: 'community', name: '🌐 社区', icon: Users },
    { id: 'innovation-lab', name: '🔬 创新实验室', icon: Beaker },
    { id: 'contact', name: '📞 联系我们', icon: Mail }
  ]

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-slate-300 text-sm">AI驱动的认知智能平台</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            智能认知
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">协同平台</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            通过Gen-Cog Mirror™认知镜像技术，结合AI协同、数据分析和自动化，
            为个人和企业提供深度认知洞察与智能决策支持。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setCurrentPage('gen-cog-mirror')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/25"
            >
              体验Gen-Cog Mirror™
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
            >
              立即注册
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { icon: Mirror, title: 'Gen-Cog Mirror™', desc: '认知镜像与深度自我洞察', page: 'gen-cog-mirror' },
            { icon: Brain, title: 'AI智能协同', desc: '多AI模型协作与决策支持', page: 'ai' },
            { icon: Users, title: '智能社区', desc: '认知共享与集体智慧', page: 'community' }
          ].map((feature, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentPage(feature.page)}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 group cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Journey */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-200 mb-4">认知成长之旅</h2>
            <p className="text-xl text-slate-400">从个人洞察到群体智慧的完整生态</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: User, title: '个人认知', desc: '深度自我分析与成长引导', step: '01' },
              { icon: Mirror, title: '认知镜像', desc: 'Gen-Cog Mirror™技术映射', step: '02' },
              { icon: Users, title: '社区协同', desc: '与他人分享认知洞察', step: '03' },
              { icon: Beaker, title: '创新实验', desc: '探索认知边界与可能性', step: '04' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const GenCogMirrorPage = () => (
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
            { title: '个人成长', desc: '持续优化提升', icon: TrendingUp }
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
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: '认知详情分析',
              features: ['生成详细分析报告', '认知优势识别', '改进建议提供']
            },
            {
              title: '多AI智能协同',
              features: ['Claude & ChatGPT集成', '个性化对话体验', '认知模式匹配']
            },
            {
              title: '社区互动分享',
              features: ['匿名认知分享', '群体智慧汇聚', '协作学习环境']
            },
            {
              title: '创新实验室',
              features: ['前沿认知研究', '实验性功能测试', '认知边界探索']
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            开始认知镜像体验
          </button>
        </div>
      </div>
    </div>
  )

  const AIPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">AI智能协同</h1>
          <p className="text-xl text-slate-400">
            多AI模型协作，为您提供最智能的认知分析和决策支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Claude集成',
              desc: '深度推理与认知分析专家',
              features: ['逻辑推理', '文本分析', '认知洞察'],
              color: 'from-orange-500 to-red-500'
            },
            {
              title: 'ChatGPT协同',
              desc: '创意思维与对话交互伙伴',
              features: ['创意生成', '问答对话', '知识整合'],
              color: 'from-green-500 to-blue-500'
            },
            {
              title: '认知适配引擎',
              desc: '基于个人认知模式的AI个性化',
              features: ['模式识别', '个性化回应', '学习偏好适配'],
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: '群体智能',
              desc: '集体认知与协作决策系统',
              features: ['集群分析', '协作推理', '集体洞察'],
              color: 'from-blue-500 to-cyan-500'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">{feature.title}</h3>
              <p className="text-slate-400 mb-4">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CommunityPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能认知社区</h1>
          <p className="text-xl text-slate-400">
            连接志同道合的认知探索者，分享洞察，共同成长
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">社区数据</h3>
              <div className="space-y-4">
                {[
                  { label: '活跃用户', value: '12,847', icon: Users },
                  { label: '认知分享', value: '8,392', icon: Share2 },
                  { label: '讨论话题', value: '2,156', icon: MessageCircle },
                  { label: '洞察点赞', value: '45,729', icon: Heart }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <stat.icon className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-slate-300">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-slate-200">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Insights */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">最新洞察分享</h3>
              <div className="space-y-4">
                {[
                  {
                    user: '认知探索者A',
                    insight: '通过Gen-Cog Mirror发现了自己的思维盲点，学会了更全面地分析问题...',
                    likes: 24,
                    comments: 8,
                    time: '2小时前'
                  },
                  {
                    user: '思维研究员B',
                    insight: '在多AI协同对话中，发现不同AI的认知风格确实能激发新的思路...',
                    likes: 31,
                    comments: 12,
                    time: '4小时前'
                  },
                  {
                    user: '创新实验者C',
                    insight: '参与群体认知实验后，对集体智慧有了全新的理解和认识...',
                    likes: 18,
                    comments: 6,
                    time: '6小时前'
                  }
                ].map((post, i) => (
                  <div key={i} className="border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/20 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-200">{post.user}</span>
                      <span className="text-xs text-slate-500">{post.time}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{post.insight}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                      <button className="flex items-center hover:text-slate-300">
                        <Share2 className="w-4 h-4 mr-1" />
                        分享
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '认知分享圈',
              desc: '匿名分享认知洞察，保护隐私的同时获得反馈',
              icon: Share2
            },
            {
              title: '群体智慧实验',
              desc: '参与集体认知研究，探索群体智能的奥秘',
              icon: Beaker
            },
            {
              title: '认知成长伙伴',
              desc: '找到认知相似的伙伴，一起探索和成长',
              icon: Users
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const InnovationLabPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Beaker className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">创新实验室</h1>
          <p className="text-xl text-slate-400">
            探索认知科学前沿，测试实验性功能，拓展认知边界
          </p>
        </div>

        {/* Experimental Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知编程接口</h3>
            </div>
            <p className="text-slate-300 mb-4">
              为开发者提供认知分析API，将Gen-Cog Mirror™技术集成到其他应用中
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-emerald-400">
              <code>
                {`// Gen-Cog Mirror API示例
const cognitiveProfile = await genCog.analyze({
  userId: 'user123',
  sessionData: conversationHistory
});`}
              </code>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知数据挖掘</h3>
            </div>
            <p className="text-slate-300 mb-4">
              对匿名化认知数据进行深度分析，发现人类认知的普遍模式和规律
            </p>
            <div className="space-y-2">
              {['认知类型分布分析', '学习模式相关性研究', '决策偏好预测模型'].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-slate-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Experiments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">进行中的实验</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '集体认知实验',
                description: '研究群体决策的认知机制',
                participants: 156,
                status: '招募中',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: '跨文化认知比较',
                description: '分析不同文化背景的认知差异',
                participants: 89,
                status: '进行中',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'AI-人类协作研究',
                description: '探索最佳的AI-人类协作模式',
                participants: 234,
                status: '分析阶段',
                color: 'from-orange-500 to-red-500'
              }
            ].map((experiment, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${experiment.color} mb-4`}></div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{experiment.title}</h3>
                <p className="text-slate-400 mb-4">{experiment.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">{experiment.participants} 参与者</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    experiment.status === '招募中' ? 'bg-blue-900 text-blue-300' :
                    experiment.status === '进行中' ? 'bg-green-900 text-green-300' :
                    'bg-orange-900 text-orange-300'
                  }`}>
                    {experiment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Publications */}
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold text-slate-200">研究成果发布</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: '《AI辅助认知分析的新方法》',
                journal: '认知科学期刊',
                date: '2024年12月'
              },
              {
                title: '《群体智慧在数字化时代的应用》',
                journal: '人工智能研究',
                date: '2024年11月'
              },
              {
                title: '《个性化AI交互对认知发展的影响》',
                journal: '心理学前沿',
                date: '2024年10月'
              },
              {
                title: '《跨平台认知数据整合分析》',
                journal: '计算机科学学报',
                date: '2024年9月'
              }
            ].map((paper, i) => (
              <div key={i} className="border border-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-slate-200 mb-1">{paper.title}</h4>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{paper.journal}</span>
                  <span>{paper.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const LoginPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-200 mb-2">登录 / 注册</h1>
            <p className="text-slate-400">开始您的认知探索之旅
'use client'

import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe, User, LogIn, Users, Beaker, Mirror, ArrowRight, CheckCircle, Star, Zap, Shield, Target, TrendingUp, Heart, MessageCircle, Share2, BookOpen, Code, Database, Cloud, Lock } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页', icon: Globe },
    { id: 'ai', name: '🤖 AI协同', icon: Brain },
    { id: 'analytics', name: '📊 数据分析', icon: BarChart3 },
    { id: 'automation', name: '🔧 自动化', icon: Cog },
    { id: 'enterprise', name: '💼 企业方案', icon: Building2 },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™', icon: Mirror },
    { id: 'profile', name: '👤 个人页面', icon: User },
    { id: 'login', name: '🔐 登录', icon: LogIn },
    { id: 'community', name: '🌐 社区', icon: Users },
    { id: 'innovation-lab', name: '🔬 创新实验室', icon: Beaker },
    { id: 'contact', name: '📞 联系我们', icon: Mail }
  ]

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-slate-300 text-sm">AI驱动的认知智能平台</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            智能认知
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">协同平台</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            通过Gen-Cog Mirror™认知镜像技术，结合AI协同、数据分析和自动化，
            为个人和企业提供深度认知洞察与智能决策支持。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setCurrentPage('gen-cog-mirror')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/25"
            >
              体验Gen-Cog Mirror™
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
            >
              立即注册
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { icon: Mirror, title: 'Gen-Cog Mirror™', desc: '认知镜像与深度自我洞察', page: 'gen-cog-mirror' },
            { icon: Brain, title: 'AI智能协同', desc: '多AI模型协作与决策支持', page: 'ai' },
            { icon: Users, title: '智能社区', desc: '认知共享与集体智慧', page: 'community' }
          ].map((feature, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentPage(feature.page)}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 group cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Journey */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-200 mb-4">认知成长之旅</h2>
            <p className="text-xl text-slate-400">从个人洞察到群体智慧的完整生态</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: User, title: '个人认知', desc: '深度自我分析与成长引导', step: '01' },
              { icon: Mirror, title: '认知镜像', desc: 'Gen-Cog Mirror™技术映射', step: '02' },
              { icon: Users, title: '社区协同', desc: '与他人分享认知洞察', step: '03' },
              { icon: Beaker, title: '创新实验', desc: '探索认知边界与可能性', step: '04' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const GenCogMirrorPage = () => (
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
            { title: '个人成长', desc: '持续优化提升', icon: TrendingUp }
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
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: '认知详情分析',
              features: ['生成详细分析报告', '认知优势识别', '改进建议提供']
            },
            {
              title: '多AI智能协同',
              features: ['Claude & ChatGPT集成', '个性化对话体验', '认知模式匹配']
            },
            {
              title: '社区互动分享',
              features: ['匿名认知分享', '群体智慧汇聚', '协作学习环境']
            },
            {
              title: '创新实验室',
              features: ['前沿认知研究', '实验性功能测试', '认知边界探索']
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            开始认知镜像体验
          </button>
        </div>
      </div>
    </div>
  )

  const AIPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">AI智能协同</h1>
          <p className="text-xl text-slate-400">
            多AI模型协作，为您提供最智能的认知分析和决策支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Claude集成',
              desc: '深度推理与认知分析专家',
              features: ['逻辑推理', '文本分析', '认知洞察'],
              color: 'from-orange-500 to-red-500'
            },
            {
              title: 'ChatGPT协同',
              desc: '创意思维与对话交互伙伴',
              features: ['创意生成', '问答对话', '知识整合'],
              color: 'from-green-500 to-blue-500'
            },
            {
              title: '认知适配引擎',
              desc: '基于个人认知模式的AI个性化',
              features: ['模式识别', '个性化回应', '学习偏好适配'],
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: '群体智能',
              desc: '集体认知与协作决策系统',
              features: ['集群分析', '协作推理', '集体洞察'],
              color: 'from-blue-500 to-cyan-500'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">{feature.title}</h3>
              <p className="text-slate-400 mb-4">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CommunityPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能认知社区</h1>
          <p className="text-xl text-slate-400">
            连接志同道合的认知探索者，分享洞察，共同成长
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">社区数据</h3>
              <div className="space-y-4">
                {[
                  { label: '活跃用户', value: '12,847', icon: Users },
                  { label: '认知分享', value: '8,392', icon: Share2 },
                  { label: '讨论话题', value: '2,156', icon: MessageCircle },
                  { label: '洞察点赞', value: '45,729', icon: Heart }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <stat.icon className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-slate-300">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-slate-200">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Insights */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">最新洞察分享</h3>
              <div className="space-y-4">
                {[
                  {
                    user: '认知探索者A',
                    insight: '通过Gen-Cog Mirror发现了自己的思维盲点，学会了更全面地分析问题...',
                    likes: 24,
                    comments: 8,
                    time: '2小时前'
                  },
                  {
                    user: '思维研究员B',
                    insight: '在多AI协同对话中，发现不同AI的认知风格确实能激发新的思路...',
                    likes: 31,
                    comments: 12,
                    time: '4小时前'
                  },
                  {
                    user: '创新实验者C',
                    insight: '参与群体认知实验后，对集体智慧有了全新的理解和认识...',
                    likes: 18,
                    comments: 6,
                    time: '6小时前'
                  }
                ].map((post, i) => (
                  <div key={i} className="border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/20 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-200">{post.user}</span>
                      <span className="text-xs text-slate-500">{post.time}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{post.insight}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                      <button className="flex items-center hover:text-slate-300">
                        <Share2 className="w-4 h-4 mr-1" />
                        分享
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '认知分享圈',
              desc: '匿名分享认知洞察，保护隐私的同时获得反馈',
              icon: Share2
            },
            {
              title: '群体智慧实验',
              desc: '参与集体认知研究，探索群体智能的奥秘',
              icon: Beaker
            },
            {
              title: '认知成长伙伴',
              desc: '找到认知相似的伙伴，一起探索和成长',
              icon: Users
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const InnovationLabPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Beaker className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">创新实验室</h1>
          <p className="text-xl text-slate-400">
            探索认知科学前沿，测试实验性功能，拓展认知边界
          </p>
        </div>

        {/* Experimental Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知编程接口</h3>
            </div>
            <p className="text-slate-300 mb-4">
              为开发者提供认知分析API，将Gen-Cog Mirror™技术集成到其他应用中
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-emerald-400">
              <code>
                {`// Gen-Cog Mirror API示例
const cognitiveProfile = await genCog.analyze({
  userId: 'user123',
  sessionData: conversationHistory
});`}
              </code>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知数据挖掘</h3>
            </div>
            <p className="text-slate-300 mb-4">
              对匿名化认知数据进行深度分析，发现人类认知的普遍模式和规律
            </p>
            <div className="space-y-2">
              {['认知类型分布分析', '学习模式相关性研究', '决策偏好预测模型'].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-slate-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Experiments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">进行中的实验</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '集体认知实验',
                description: '研究群体决策的认知机制',
                participants: 156,
                status: '招募中',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: '跨文化认知比较',
                description: '分析不同文化背景的认知差异',
                participants: 89,
                status: '进行中',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'AI-人类协作研究',
                description: '探索最佳的AI-人类协作模式',
                participants: 234,
                status: '分析阶段',
                color: 'from-orange-500 to-red-500'
              }
            ].map((experiment, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${experiment.color} mb-4`}></div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{experiment.title}</h3>
                <p className="text-slate-400 mb-4">{experiment.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">{experiment.participants} 参与者</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    experiment.status === '招募中' ? 'bg-blue-900 text-blue-300' :
                    experiment.status === '进行中' ? 'bg-green-900 text-green-300' :
                    'bg-orange-900 text-orange-300'
                  }`}>
                    {experiment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Publications */}
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold text-slate-200">研究成果发布</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: '《AI辅助认知分析的新方法》',
                journal: '认知科学期刊',
                date: '2024年12月'
              },
              {
                title: '《群体智慧在数字化时代的应用》',
                journal: '人工智能研究',
                date: '2024年11月'
              },
              {
                title: '《个性化AI交互对认知发展的影响》',
                journal: '心理学前沿',
                date: '2024年10月'
              },
              {
                title: '《跨平台认知数据整合分析》',
                journal: '计算机科学学报',
                date: '2024年9月'
              }
            ].map((paper, i) => (
              <div key={i} className="border border-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-slate-200 mb-1">{paper.title}</h4>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{paper.journal}</span>
                  <span>{paper.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const LoginPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-200 mb-2">登录 / 注册</h1>
            <p className="text-slate-400">开始您的认知探索之旅</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">邮箱地址</label>
              <input
                type="email"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">密码</label>
              <input
                type="password"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-slate-300">记住我</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">忘记密码？</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
            >
              登录
            </button>

            <div className="text-center">
              <span className="text-slate-400">还没有账户？</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">立即注册</a>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-600/50">
            <div className="text-center mb-4">
              <span className="text-slate-400">或者使用</span>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 text-slate-300 py-3 rounded-lg font-medium transition-colors duration-300">
                Google 账户登录
              </button>
              <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 text-slate-300 py-3 rounded-lg font-medium transition-colors duration-300">
                GitHub 账户登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ProfilePage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
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
                      <span className="text-slate-400">社区贡献</span>
                      <span className="text-slate-300">8 分享</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">认知等级</span>
                      <span className="text-emerald-400">探索者</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-600/50 pt-4">
                  <h3 className="font-medium text-slate-200 mb-3">成就徽章</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['🧠', '🎯', '🌟', '🚀', '💡', '🏆'].map((badge, i) => (
                      <div key={i} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-lg">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cognitive Analysis Results */}
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">最新认知分析</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: '逻辑推理', score: 85, color: 'bg-blue-500' },
                  { label: '创意思维', score: 92, color: 'bg-purple-500' },
                  { label: '情感智能', score: 78, color: 'bg-emerald-500' },
                  { label: '学习适应', score: 88, color: 'bg-orange-500' }
                ].map((skill, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">{skill.label}</span>
                      <span className="text-slate-200 font-semibold">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div className={`${skill.color} h-2 rounded-full transition-all duration-500`} style={{width: `${skill.score}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">最近活动</h3>
              <div className="space-y-4">
                {[
                  {
                    type: 'test',
                    title: '完成了Gen-Cog Mirror™认知测试',
                    time: '2小时前',
                    icon: Brain
                  },
                  {
                    type: 'share',
                    title: '在社区分享了认知洞察',
                    time: '1天前',
                    icon: Share2
                  },
                  {
                    type: 'experiment',
                    title: '参与了群体智能实验',
                    time: '3天前',
                    icon: Beaker
                  },
                  {
                    type: 'achievement',
                    title: '获得了"深度思考者"徽章',
                    time: '1周前',
                    icon: Star
                  }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center p-3 bg-slate-700/20 rounded-lg">
                    <activity.icon className="w-5 h-5 text-blue-400 mr-3" />
                    <div className="flex-1">
                      <p className="text-slate-300">{activity.title}</p>
                      <p className="text-slate-500 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <button 
                onClick={() => setCurrentPage('gen-cog-mirror')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mirror className="w-8 h-8 mx-auto mb-2" />
                开始新的认知测试
              </button>
              <button 
                onClick={() => setCurrentPage('community')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-8 h-8 mx-auto mb-2" />
                浏览社区分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const AnalyticsPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <BarChart3 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能数据分析</h1>
          <p className="text-xl text-slate-400">
            深度洞察认知数据，驱动个人成长和组织决策
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: '认知模式识别', value: '15种', trend: '+12%', icon: Brain },
            { title: '用户活跃度', value: '89.2%', trend: '+5.8%', icon: TrendingUp },
            { title: '洞察准确率', value: '94.7%', trend: '+2.1%', icon: Target },
            { title: '成长提升率', value: '76.3%', trend: '+8.4%', icon: Zap }
          ].map((metric, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-8 h-8 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">{metric.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-1">{metric.value}</h3>
              <p className="text-slate-400 text-sm">{metric.title}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">认知类型分布</h3>
            <div className="space-y-4">
              {[
                { type: '分析思维型', percentage: 28, color: 'bg-blue-500' },
                { type: '创意直觉型', percentage: 24, color: 'bg-purple-500' },
                { type: '平衡综合型', percentage: 22, color: 'bg-emerald-500' },
                { type: '实践应用型', percentage: 16, color: 'bg-orange-500' },
                { type: '其他类型', percentage: 10, color: 'bg-slate-500' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">{item.type}</span>
                    <span className="text-slate-200 font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full transition-all duration-700`} style={{width: `${item.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">学习成长趋势</h3>
            <div className="space-y-6">
              {[
                { week: '第1周', growth: 65, users: 234 },
                { week: '第2周', growth: 72, users: 278 },
                { week: '第3周', growth: 78, users: 312 },
                { week: '第4周', growth: 85, users: 356 }
              ].map((week, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-slate-300 w-16">{week.week}</span>
                    <div className="w-32 bg-slate-700/50 rounded-full h-2 mx-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-700" style={{width: `${week.growth}%`}}></div>
                    </div>
                    <span className="text-slate-200 font-semibold">{week.growth}%</span>
                  </div>
                  <span className="text-slate-400 text-sm">{week.users} 用户</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const AutomationPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Cog className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能自动化</h1>
          <p className="text-xl text-slate-400">
            自动化认知分析流程，提升效率和准确性
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '自动化认知测试',
              description: '智能生成个性化测试题目',
              features: ['动态难度调整', '实时结果分析', '个性化建议'],
              status: '运行中',
              color: 'from-blue-500 to-purple-500'
            },
            {
              title: '智能报告生成',
              description: '自动生成详细的认知分析报告',
              features: ['多维度分析', '可视化展示', '对比历史数据'],
              status: '运行中',
              color: 'from-emerald-500 to-teal-500'
            },
            {
              title: '社区内容筛选',
              description: '自动识别和推荐优质内容',
              features: ['内容质量评估', '个性化推荐', '垃圾信息过滤'],
              status: '运行中',
              color: 'from-orange-500 to-red-500'
            },
            {
              title: '学习路径规划',
              description: '基于认知特点规划学习计划',
              features: ['个性化路径', '进度跟踪', '动态调整'],
              status: '测试中',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: '异常行为检测',
              description: '监控并预警异常使用模式',
              features: ['行为分析', '风险评估', '安全预警'],
              status: '运行中',
              color: 'from-red-500 to-orange-500'
            },
            {
              title: '数据同步备份',
              description: '自动同步和备份用户数据',
              features: ['增量备份', '多点存储', '数据恢复'],
              status: '运行中',
              color: 'from-teal-500 to-emerald-500'
            }
          ].map((automation, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${automation.color} mb-4`}></div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-slate-200">{automation.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  automation.status === '运行中' ? 'bg-emerald-900 text-emerald-300' : 'bg-orange-900 text-orange-300'
                }`}>
                  {automation.status}
                </span>
              </div>
              <p className="text-slate-400 mb-4">{automation.description}</p>
              <ul className="space-y-2">
                {automation.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">自动化性能监控</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '系统可用性', value: '99.9%', icon: Shield },
              { metric: '处理速度', value: '1.2s', icon: Zap },
              { metric: '准确率', value: '96.8%', icon: Target },
              { metric: '用户满意度', value: '4.8/5', icon: Star }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <metric.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-200 mb-1">{metric.value}</div>
                <div className="text-slate-400">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const EnterprisePage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Building2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">企业级解决方案</h1>
          <p className="text-xl text-slate-400">
            为组织提供全面的认知智能平台，驱动团队协作和创新
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: '初创版',
              price: '¥2,999',
              period: '/月',
              description: '适合小型团队和初创企业',
              features: [
                '最多50个用户',
                'Gen-Cog Mirror™基础版',
                '团队协作功能',
                '基础数据分析',
                '邮件技术支持'
              ],
              popular: false
            },
            {
              name: '专业版',
              price: '¥8,999',
              period: '/月',
              description: '适合成长型企业和团队',
              features: [
                '最多200个用户',
                'Gen-Cog Mirror™专业版',
                '高级AI协同功能',
                '深度数据洞察',
                '自定义工作流',
                '优先技术支持'
              ],
              popular: true
            },
            {
              name: '企业版',
              price: '定制报价',
              period: '',
              description: '适合大型企业和复杂需求',
              features: [
                '无限用户',
                'Gen-Cog Mirror™企业版',
                '完整功能访问',
                '私有化部署选项',
                '专属客户成功经理',
                '24/7专业支持'
              ],
              popular: false
            }
          ].map((plan, i) => (
            <div key={i} className={`relative border rounded-xl p-8 transition-all duration-300 ${
              plan.popular 
                ? 'border-emerald-500 bg-emerald-950/20 shadow-lg shadow-emerald-900/25 transform scale-105' 
                : 'border-slate-600/30 bg-slate-800/40 hover:bg-slate-700/40'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    推荐方案
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-slate-200">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}>
                {plan.price === '定制报价' ? '联系销售' : '立即开始'}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">企业级安全</h3>
            <div className="space-y-3">
              {[
                '端到端数据加密',
                'SOC 2 Type II 合规',
                '单点登录(SSO)集成',
                '角色权限管理',
                '审计日志记录',
                '数据本地化存储'
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <Lock className="w-4 h-4 text-emerald-400 mr-3" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">集成与扩展</h3>
            <div className="space-y-3">
              {[
                'RESTful API接口',
                'Webhook事件通知',
                'Slack/Teams集成',
                '第三方应用连接',
                '自定义数据导出',
                '白标解决方案'
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <Cloud className="w-4 h-4 text-blue-400 mr-3" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">需要定制化解决方案？</h2>
          <p className="text-slate-400 mb-6">我们的企业团队将为您提供专业的咨询和定制服务</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
          >
            联系企业销售
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )

  const ContactPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">联系我们</h1>
          <p className="text-xl
'use client'

import React, { useState } from 'react'
import { Menu, X, Brain, BarChart3, Cog, Building2, Mail, Globe, User, LogIn, Users, Beaker, Mirror, ArrowRight, CheckCircle, Star, Zap, Shield, Target, TrendingUp, Heart, MessageCircle, Share2, BookOpen, Code, Database, Cloud, Lock } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'home', name: '首页', icon: Globe },
    { id: 'ai', name: '🤖 AI协同', icon: Brain },
    { id: 'analytics', name: '📊 数据分析', icon: BarChart3 },
    { id: 'automation', name: '🔧 自动化', icon: Cog },
    { id: 'enterprise', name: '💼 企业方案', icon: Building2 },
    { id: 'gen-cog-mirror', name: '🧠 Gen-Cog Mirror™', icon: Mirror },
    { id: 'profile', name: '👤 个人页面', icon: User },
    { id: 'login', name: '🔐 登录', icon: LogIn },
    { id: 'community', name: '🌐 社区', icon: Users },
    { id: 'innovation-lab', name: '🔬 创新实验室', icon: Beaker },
    { id: 'contact', name: '📞 联系我们', icon: Mail }
  ]

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-slate-300 text-sm">AI驱动的认知智能平台</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
            智能认知
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">协同平台</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            通过Gen-Cog Mirror™认知镜像技术，结合AI协同、数据分析和自动化，
            为个人和企业提供深度认知洞察与智能决策支持。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setCurrentPage('gen-cog-mirror')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-900/25"
            >
              体验Gen-Cog Mirror™
            </button>
            <button 
              onClick={() => setCurrentPage('login')}
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
            >
              立即注册
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { icon: Mirror, title: 'Gen-Cog Mirror™', desc: '认知镜像与深度自我洞察', page: 'gen-cog-mirror' },
            { icon: Brain, title: 'AI智能协同', desc: '多AI模型协作与决策支持', page: 'ai' },
            { icon: Users, title: '智能社区', desc: '认知共享与集体智慧', page: 'community' }
          ].map((feature, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentPage(feature.page)}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300 group cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-emerald-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Journey */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-200 mb-4">认知成长之旅</h2>
            <p className="text-xl text-slate-400">从个人洞察到群体智慧的完整生态</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: User, title: '个人认知', desc: '深度自我分析与成长引导', step: '01' },
              { icon: Mirror, title: '认知镜像', desc: 'Gen-Cog Mirror™技术映射', step: '02' },
              { icon: Users, title: '社区协同', desc: '与他人分享认知洞察', step: '03' },
              { icon: Beaker, title: '创新实验', desc: '探索认知边界与可能性', step: '04' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const GenCogMirrorPage = () => (
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
            { title: '个人成长', desc: '持续优化提升', icon: TrendingUp }
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
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: '认知详情分析',
              features: ['生成详细分析报告', '认知优势识别', '改进建议提供']
            },
            {
              title: '多AI智能协同',
              features: ['Claude & ChatGPT集成', '个性化对话体验', '认知模式匹配']
            },
            {
              title: '社区互动分享',
              features: ['匿名认知分享', '群体智慧汇聚', '协作学习环境']
            },
            {
              title: '创新实验室',
              features: ['前沿认知研究', '实验性功能测试', '认知边界探索']
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            开始认知镜像体验
          </button>
        </div>
      </div>
    </div>
  )

  const AIPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">AI智能协同</h1>
          <p className="text-xl text-slate-400">
            多AI模型协作，为您提供最智能的认知分析和决策支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Claude集成',
              desc: '深度推理与认知分析专家',
              features: ['逻辑推理', '文本分析', '认知洞察'],
              color: 'from-orange-500 to-red-500'
            },
            {
              title: 'ChatGPT协同',
              desc: '创意思维与对话交互伙伴',
              features: ['创意生成', '问答对话', '知识整合'],
              color: 'from-green-500 to-blue-500'
            },
            {
              title: '认知适配引擎',
              desc: '基于个人认知模式的AI个性化',
              features: ['模式识别', '个性化回应', '学习偏好适配'],
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: '群体智能',
              desc: '集体认知与协作决策系统',
              features: ['集群分析', '协作推理', '集体洞察'],
              color: 'from-blue-500 to-cyan-500'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">{feature.title}</h3>
              <p className="text-slate-400 mb-4">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CommunityPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能认知社区</h1>
          <p className="text-xl text-slate-400">
            连接志同道合的认知探索者，分享洞察，共同成长
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">社区数据</h3>
              <div className="space-y-4">
                {[
                  { label: '活跃用户', value: '12,847', icon: Users },
                  { label: '认知分享', value: '8,392', icon: Share2 },
                  { label: '讨论话题', value: '2,156', icon: MessageCircle },
                  { label: '洞察点赞', value: '45,729', icon: Heart }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <stat.icon className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-slate-300">{stat.label}</span>
                    </div>
                    <span className="font-semibold text-slate-200">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Insights */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">最新洞察分享</h3>
              <div className="space-y-4">
                {[
                  {
                    user: '认知探索者A',
                    insight: '通过Gen-Cog Mirror发现了自己的思维盲点，学会了更全面地分析问题...',
                    likes: 24,
                    comments: 8,
                    time: '2小时前'
                  },
                  {
                    user: '思维研究员B',
                    insight: '在多AI协同对话中，发现不同AI的认知风格确实能激发新的思路...',
                    likes: 31,
                    comments: 12,
                    time: '4小时前'
                  },
                  {
                    user: '创新实验者C',
                    insight: '参与群体认知实验后，对集体智慧有了全新的理解和认识...',
                    likes: 18,
                    comments: 6,
                    time: '6小时前'
                  }
                ].map((post, i) => (
                  <div key={i} className="border border-slate-700/50 rounded-lg p-4 hover:bg-slate-700/20 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-200">{post.user}</span>
                      <span className="text-xs text-slate-500">{post.time}</span>
                    </div>
                    <p className="text-slate-300 mb-3">{post.insight}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                      <button className="flex items-center hover:text-slate-300">
                        <Share2 className="w-4 h-4 mr-1" />
                        分享
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '认知分享圈',
              desc: '匿名分享认知洞察，保护隐私的同时获得反馈',
              icon: Share2
            },
            {
              title: '群体智慧实验',
              desc: '参与集体认知研究，探索群体智能的奥秘',
              icon: Beaker
            },
            {
              title: '认知成长伙伴',
              desc: '找到认知相似的伙伴，一起探索和成长',
              icon: Users
            }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 text-center hover:bg-slate-700/40 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const InnovationLabPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Beaker className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">创新实验室</h1>
          <p className="text-xl text-slate-400">
            探索认知科学前沿，测试实验性功能，拓展认知边界
          </p>
        </div>

        {/* Experimental Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知编程接口</h3>
            </div>
            <p className="text-slate-300 mb-4">
              为开发者提供认知分析API，将Gen-Cog Mirror™技术集成到其他应用中
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-emerald-400">
              <code>
                {`// Gen-Cog Mirror API示例
const cognitiveProfile = await genCog.analyze({
  userId: 'user123',
  sessionData: conversationHistory
});`}
              </code>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-slate-200">认知数据挖掘</h3>
            </div>
            <p className="text-slate-300 mb-4">
              对匿名化认知数据进行深度分析，发现人类认知的普遍模式和规律
            </p>
            <div className="space-y-2">
              {['认知类型分布分析', '学习模式相关性研究', '决策偏好预测模型'].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-slate-300">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Experiments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">进行中的实验</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '集体认知实验',
                description: '研究群体决策的认知机制',
                participants: 156,
                status: '招募中',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: '跨文化认知比较',
                description: '分析不同文化背景的认知差异',
                participants: 89,
                status: '进行中',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'AI-人类协作研究',
                description: '探索最佳的AI-人类协作模式',
                participants: 234,
                status: '分析阶段',
                color: 'from-orange-500 to-red-500'
              }
            ].map((experiment, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${experiment.color} mb-4`}></div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{experiment.title}</h3>
                <p className="text-slate-400 mb-4">{experiment.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">{experiment.participants} 参与者</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    experiment.status === '招募中' ? 'bg-blue-900 text-blue-300' :
                    experiment.status === '进行中' ? 'bg-green-900 text-green-300' :
                    'bg-orange-900 text-orange-300'
                  }`}>
                    {experiment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Publications */}
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold text-slate-200">研究成果发布</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: '《AI辅助认知分析的新方法》',
                journal: '认知科学期刊',
                date: '2024年12月'
              },
              {
                title: '《群体智慧在数字化时代的应用》',
                journal: '人工智能研究',
                date: '2024年11月'
              },
              {
                title: '《个性化AI交互对认知发展的影响》',
                journal: '心理学前沿',
                date: '2024年10月'
              },
              {
                title: '《跨平台认知数据整合分析》',
                journal: '计算机科学学报',
                date: '2024年9月'
              }
            ].map((paper, i) => (
              <div key={i} className="border border-slate-700/50 rounded-lg p-4">
                <h4 className="font-medium text-slate-200 mb-1">{paper.title}</h4>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>{paper.journal}</span>
                  <span>{paper.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const LoginPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-md mx-auto">
        <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-200 mb-2">登录 / 注册</h1>
            <p className="text-slate-400">开始您的认知探索之旅</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">邮箱地址</label>
              <input
                type="email"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">密码</label>
              <input
                type="password"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-slate-300">记住我</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">忘记密码？</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
            >
              登录
            </button>

            <div className="text-center">
              <span className="text-slate-400">还没有账户？</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">立即注册</a>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-600/50">
            <div className="text-center mb-4">
              <span className="text-slate-400">或者使用</span>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 text-slate-300 py-3 rounded-lg font-medium transition-colors duration-300">
                Google 账户登录
              </button>
              <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 text-slate-300 py-3 rounded-lg font-medium transition-colors duration-300">
                GitHub 账户登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ProfilePage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
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
                      <span className="text-slate-400">社区贡献</span>
                      <span className="text-slate-300">8 分享</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">认知等级</span>
                      <span className="text-emerald-400">探索者</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-600/50 pt-4">
                  <h3 className="font-medium text-slate-200 mb-3">成就徽章</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['🧠', '🎯', '🌟', '🚀', '💡', '🏆'].map((badge, i) => (
                      <div key={i} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-lg">
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cognitive Analysis Results */}
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">最新认知分析</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: '逻辑推理', score: 85, color: 'bg-blue-500' },
                  { label: '创意思维', score: 92, color: 'bg-purple-500' },
                  { label: '情感智能', score: 78, color: 'bg-emerald-500' },
                  { label: '学习适应', score: 88, color: 'bg-orange-500' }
                ].map((skill, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">{skill.label}</span>
                      <span className="text-slate-200 font-semibold">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div className={`${skill.color} h-2 rounded-full transition-all duration-500`} style={{width: `${skill.score}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">最近活动</h3>
              <div className="space-y-4">
                {[
                  {
                    type: 'test',
                    title: '完成了Gen-Cog Mirror™认知测试',
                    time: '2小时前',
                    icon: Brain
                  },
                  {
                    type: 'share',
                    title: '在社区分享了认知洞察',
                    time: '1天前',
                    icon: Share2
                  },
                  {
                    type: 'experiment',
                    title: '参与了群体智能实验',
                    time: '3天前',
                    icon: Beaker
                  },
                  {
                    type: 'achievement',
                    title: '获得了"深度思考者"徽章',
                    time: '1周前',
                    icon: Star
                  }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center p-3 bg-slate-700/20 rounded-lg">
                    <activity.icon className="w-5 h-5 text-blue-400 mr-3" />
                    <div className="flex-1">
                      <p className="text-slate-300">{activity.title}</p>
                      <p className="text-slate-500 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <button 
                onClick={() => setCurrentPage('gen-cog-mirror')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mirror className="w-8 h-8 mx-auto mb-2" />
                开始新的认知测试
              </button>
              <button 
                onClick={() => setCurrentPage('community')}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Users className="w-8 h-8 mx-auto mb-2" />
                浏览社区分享
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const AnalyticsPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <BarChart3 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能数据分析</h1>
          <p className="text-xl text-slate-400">
            深度洞察认知数据，驱动个人成长和组织决策
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: '认知模式识别', value: '15种', trend: '+12%', icon: Brain },
            { title: '用户活跃度', value: '89.2%', trend: '+5.8%', icon: TrendingUp },
            { title: '洞察准确率', value: '94.7%', trend: '+2.1%', icon: Target },
            { title: '成长提升率', value: '76.3%', trend: '+8.4%', icon: Zap }
          ].map((metric, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-8 h-8 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">{metric.trend}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-1">{metric.value}</h3>
              <p className="text-slate-400 text-sm">{metric.title}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">认知类型分布</h3>
            <div className="space-y-4">
              {[
                { type: '分析思维型', percentage: 28, color: 'bg-blue-500' },
                { type: '创意直觉型', percentage: 24, color: 'bg-purple-500' },
                { type: '平衡综合型', percentage: 22, color: 'bg-emerald-500' },
                { type: '实践应用型', percentage: 16, color: 'bg-orange-500' },
                { type: '其他类型', percentage: 10, color: 'bg-slate-500' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">{item.type}</span>
                    <span className="text-slate-200 font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full transition-all duration-700`} style={{width: `${item.percentage}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">学习成长趋势</h3>
            <div className="space-y-6">
              {[
                { week: '第1周', growth: 65, users: 234 },
                { week: '第2周', growth: 72, users: 278 },
                { week: '第3周', growth: 78, users: 312 },
                { week: '第4周', growth: 85, users: 356 }
              ].map((week, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-slate-300 w-16">{week.week}</span>
                    <div className="w-32 bg-slate-700/50 rounded-full h-2 mx-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-700" style={{width: `${week.growth}%`}}></div>
                    </div>
                    <span className="text-slate-200 font-semibold">{week.growth}%</span>
                  </div>
                  <span className="text-slate-400 text-sm">{week.users} 用户</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const AutomationPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Cog className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">智能自动化</h1>
          <p className="text-xl text-slate-400">
            自动化认知分析流程，提升效率和准确性
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '自动化认知测试',
              description: '智能生成个性化测试题目',
              features: ['动态难度调整', '实时结果分析', '个性化建议'],
              status: '运行中',
              color: 'from-blue-500 to-purple-500'
            },
            {
              title: '智能报告生成',
              description: '自动生成详细的认知分析报告',
              features: ['多维度分析', '可视化展示', '对比历史数据'],
              status: '运行中',
              color: 'from-emerald-500 to-teal-500'
            },
            {
              title: '社区内容筛选',
              description: '自动识别和推荐优质内容',
              features: ['内容质量评估', '个性化推荐', '垃圾信息过滤'],
              status: '运行中',
              color: 'from-orange-500 to-red-500'
            },
            {
              title: '学习路径规划',
              description: '基于认知特点规划学习计划',
              features: ['个性化路径', '进度跟踪', '动态调整'],
              status: '测试中',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: '异常行为检测',
              description: '监控并预警异常使用模式',
              features: ['行为分析', '风险评估', '安全预警'],
              status: '运行中',
              color: 'from-red-500 to-orange-500'
            },
            {
              title: '数据同步备份',
              description: '自动同步和备份用户数据',
              features: ['增量备份', '多点存储', '数据恢复'],
              status: '运行中',
              color: 'from-teal-500 to-emerald-500'
            }
          ].map((automation, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6 hover:bg-slate-700/40 transition-all duration-300">
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${automation.color} mb-4`}></div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-slate-200">{automation.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  automation.status === '运行中' ? 'bg-emerald-900 text-emerald-300' : 'bg-orange-900 text-orange-300'
                }`}>
                  {automation.status}
                </span>
              </div>
              <p className="text-slate-400 mb-4">{automation.description}</p>
              <ul className="space-y-2">
                {automation.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">自动化性能监控</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '系统可用性', value: '99.9%', icon: Shield },
              { metric: '处理速度', value: '1.2s', icon: Zap },
              { metric: '准确率', value: '96.8%', icon: Target },
              { metric: '用户满意度', value: '4.8/5', icon: Star }
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <metric.icon className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-200 mb-1">{metric.value}</div>
                <div className="text-slate-400">{metric.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const EnterprisePage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Building2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">企业级解决方案</h1>
          <p className="text-xl text-slate-400">
            为组织提供全面的认知智能平台，驱动团队协作和创新
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: '初创版',
              price: '¥2,999',
              period: '/月',
              description: '适合小型团队和初创企业',
              features: [
                '最多50个用户',
                'Gen-Cog Mirror™基础版',
                '团队协作功能',
                '基础数据分析',
                '邮件技术支持'
              ],
              popular: false
            },
            {
              name: '专业版',
              price: '¥8,999',
              period: '/月',
              description: '适合成长型企业和团队',
              features: [
                '最多200个用户',
                'Gen-Cog Mirror™专业版',
                '高级AI协同功能',
                '深度数据洞察',
                '自定义工作流',
                '优先技术支持'
              ],
              popular: true
            },
            {
              name: '企业版',
              price: '定制报价',
              period: '',
              description: '适合大型企业和复杂需求',
              features: [
                '无限用户',
                'Gen-Cog Mirror™企业版',
                '完整功能访问',
                '私有化部署选项',
                '专属客户成功经理',
                '24/7专业支持'
              ],
              popular: false
            }
          ].map((plan, i) => (
            <div key={i} className={`relative border rounded-xl p-8 transition-all duration-300 ${
              plan.popular 
                ? 'border-emerald-500 bg-emerald-950/20 shadow-lg shadow-emerald-900/25 transform scale-105' 
                : 'border-slate-600/30 bg-slate-800/40 hover:bg-slate-700/40'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    推荐方案
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-slate-200">{plan.price}</span>
                  <span className="text-slate-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}>
                {plan.price === '定制报价' ? '联系销售' : '立即开始'}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">企业级安全</h3>
            <div className="space-y-3">
              {[
                '端到端数据加密',
                'SOC 2 Type II 合规',
                '单点登录(SSO)集成',
                '角色权限管理',
                '审计日志记录',
                '数据本地化存储'
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <Lock className="w-4 h-4 text-emerald-400 mr-3" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">集成与扩展</h3>
            <div className="space-y-3">
              {[
                'RESTful API接口',
                'Webhook事件通知',
                'Slack/Teams集成',
                '第三方应用连接',
                '自定义数据导出',
                '白标解决方案'
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <Cloud className="w-4 h-4 text-blue-400 mr-3" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">需要定制化解决方案？</h2>
          <p className="text-slate-400 mb-6">我们的企业团队将为您提供专业的咨询和定制服务</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
          >
            联系企业销售
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )

  const ContactPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-slate-200 mb-4">联系我们</h1>
          <p className="text-xl text-slate-400">
            有任何问题或建议，我们都很乐意为您提供帮助
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">发送消息</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">公司</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="公司名称"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">咨询类型</label>
                <select className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-400 transition-colors duration-300">
                  <option>产品咨询</option>
                  <option>技术支持</option>
                  <option>商务合作</option>
                  <option>媒体采访</option>
                  <option>其他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">详细信息</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="请详细描述您的需求或问题..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
              >
                发送消息
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <div>
                    <p className="text-slate-200">contact@gensiyo.com</p>
                    <p className="text-slate-400 text-sm">一般咨询</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                  <div>
                    <p className="text-slate-200">enterprise@gensiyo.com</p>
                    <p className="text-slate-400 text-sm">企业合作</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-400 mr-3">📞</span>
                  <div>
                    <p className="text-slate-200">+86 400-888-9999</p>
                    <p className="text-slate-400 text-sm">客服热线</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 text-blue-400 mr-3">📍</span>
                  <div>
                    <p className="text-slate-200">北京市朝阳区科技园区</p>
                    <p className="text-slate-400 text-sm">总部地址</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">工作时间</h3>
              <div className="space-y-2 text-slate-300">
                <p><strong>客服支持:</strong> 周一至周日 9:00 - 22:00</p>
                <p><strong>技术支持:</strong> 周一至周五 9:00 - 18:00</p>
                <p><strong>商务合作:</strong> 周一至周五 9:00 - 17:00</p>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">社交媒体</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: '微信公众号', handle: '@Gensiyo' },
                  { name: '微博', handle: '@Gensiyo官方' },
                  { name: 'LinkedIn', handle: '@Gensiyo' },
                  { name: 'GitHub', handle: '@gensiyo' }
                ].map((social, i) => (
                  <div key={i} className="text-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors duration-300 cursor-pointer">
                    <p className="text-slate-200 font-medium">{social.name}</p>
                    <p className="text-slate-400 text-sm">{social.handle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: 'Gen-Cog Mirror™如何保护用户隐私？',
                a: '我们采用端到端加密技术，所有认知数据都经过匿名化处理，严格遵循数据保护法规。'
              },
              {
                q: '企业版支持多少用户？',
                a: '企业版支持无限用户，可以根据您的组织规模进行灵活配置。'
              },
              {
                q: '是否提供API接口？',
                a: '是的，我们提供完整的RESTful API，支持与您现有系统的无缝集成。'
              },
              {
                q: '如何开始免费试用？',
                a: '您可以直接注册账户开始14天免费试用，无需信用卡信息。'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-600/30 rounded-xl p-6">
                <h4 className="font-semibold text-slate-200 mb-2">{faq.q}</h4>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />
      case 'ai': return <AIPage />
      case 'analytics': return <AnalyticsPage />
      case 'automation': return <AutomationPage />
      case 'enterprise': return <EnterprisePage />
      case 'gen-cog-mirror': return <GenCogMirrorPage />
      case 'profile': return <ProfilePage />
      case 'login': return <LoginPage />
      case 'community': return <CommunityPage />
      case 'innovation-lab': return <InnovationLabPage />
      case 'contact': return <ContactPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="w-8 h-8 mr-3">
                  <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Gensiyo
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-slate-700/60 text-blue-400 shadow-sm'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-300 flex items-center">
                  更多
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {navigation.slice(6).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-300 ${
                        currentPage === item.id
                          ? 'bg-slate-700/60 text-blue-400'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
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

      {/* Main Content */}
      <main className="relative">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3">
                  <img src="/gensiyo-logo.svg" alt="Gensiyo Logo" className="w-full h-full" />
                </div>
                <span className="text-xl font-bold text-slate-200">Gensiyo</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                革命性认知智能平台，通过AI技术赋能个人成长与组织创新。
              </p>
              <div className="flex space-x-4">
                {['🐦', '📘', '📷', '🔗'].map((icon, i) => (
                  <div key={i} className="w-8 h-8 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300">
                    <span>{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setCurrentPage('gen-cog-mirror')} className="hover:text-slate-300 transition-colors duration-300">Gen-Cog Mirror™</button></li>
                <li><button onClick={() => setCurrentPage('ai')} className="hover:text-slate-300 transition-colors duration-300">AI协同</button></li>
                <li><button onClick={() => setCurrentPage('analytics')} className="hover:text-slate-300 transition-colors duration-300">数据分析</button></li>
                <li><button onClick={() => setCurrentPage('automation')} className="hover:text-slate-300 transition-colors duration-300">自动化</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">解决方案</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setCurrentPage('enterprise')} className="hover:text-slate-300 transition-colors duration-300">企业级</button></li>
                <li><button onClick={() => setCurrentPage('community')} className="hover:text-slate-300 transition-colors duration-300">社区版</button></li>
                <li><button onClick={() => setCurrentPage('innovation-lab')} className="hover:text-slate-300 transition-colors duration-300">创新实验室</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-slate-200 font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-slate-300 transition-colors duration-300">联系我们</button></li>
                <li><a href="#" className="hover:text-slate-300 transition-colors duration-300">帮助中心</a></li>
                <li><a href="#" className="hover:text-slate-300 transition-colors duration-300">API文档</a></li>
                <li><a href="#" className="hover:text-slate-300 transition-colors duration-300">状态页面</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2025 Gensiyo. All rights reserved. | 隐私政策 | 服务条款 | Cookie政策</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
git status
