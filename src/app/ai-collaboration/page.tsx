import Link from 'next/link'

export default function AICollaborationPage() {
  return (
    <div style={{backgroundColor: 'purple', minHeight: '100vh', color: 'white', textAlign: 'center', paddingTop: '50px'}}>
      <div style={{position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'black', padding: '10px', zIndex: 1000}}>
        <Link href='/' style={{color: 'yellow', marginRight: '20px', textDecoration: 'none'}}>🏠 首页</Link>
        <Link href='/cognitive-test' style={{color: 'yellow', textDecoration: 'none'}}>🧠 认知测试</Link>
      </div>
      <h1 style={{marginTop: '50px'}}>🤖 AI协同页面</h1>
      <p>页面现在应该有导航链接了！</p>
    </div>
  )
}
