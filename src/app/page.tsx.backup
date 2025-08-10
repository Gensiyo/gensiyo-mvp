import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', color: 'white', padding: '10px', zIndex: 1000}}>
        <span style={{color: 'white', marginRight: '20px'}}>🏠 首页 (当前页面)</span>
        <Link href='/cognitive-test' style={{color: 'yellow', marginRight: '20px', textDecoration: 'none'}}>🧠 认知测试</Link>
        <Link href='/ai-collaboration' style={{color: 'yellow', textDecoration: 'none'}}>🤖 AI协同</Link>
      </div>
      <div style={{paddingTop: '60px', background: 'linear-gradient(to bottom right, #1e293b, #1e40af)', minHeight: '100vh', color: 'white', textAlign: 'center', padding: '80px 20px 20px 20px'}}>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem'}}>GENSIYO</h1>
        <p style={{fontSize: '1.2rem', marginBottom: '1rem'}}>认知驱动的基础设施</p>
        <p style={{marginBottom: '2rem'}}>协同智能，编排未来</p>
        <div style={{marginTop: '3rem'}}>
          <Link href='/cognitive-test' style={{display: 'inline-block', backgroundColor: '#f59e0b', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', marginRight: '1rem'}}>
            🧠 立即体验认知测试
          </Link>
          <Link href='/ai-collaboration' style={{display: 'inline-block', backgroundColor: '#8b5cf6', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}>
            🤖 体验AI协同中枢
          </Link>
        </div>
      </div>
    </div>
  )
}
