import Link from 'next/link'

export default function CognitiveTestPage() {
  return (
    <div style={{backgroundColor: 'blue', minHeight: '100vh', color: 'white', textAlign: 'center', paddingTop: '50px'}}>
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', padding: '10px', zIndex: 1000}}>
        <Link href='/' style={{color: 'yellow', marginRight: '20px', textDecoration: 'none'}}>🏠 首页</Link>
        <span style={{color: 'white', marginRight: '20px'}}>🧠 认知测试 (当前页面)</span>
        <Link href='/ai-collaboration' style={{color: 'yellow', textDecoration: 'none'}}>🤖 AI协同</Link>
      </div>
      <h1 style={{marginTop: '50px'}}>🧠 Gen-cog Mirror</h1>
      <p>认知测试页面，现在有导航了！</p>
    </div>
  )
}
