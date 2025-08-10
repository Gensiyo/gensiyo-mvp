'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.8)', padding: '10px'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link href='/' style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textDecoration: 'none'}}>
          GENSIYO
        </Link>
        
        <div style={{display: 'flex', gap: '20px'}}>
          <Link href='/' style={{color: pathname === '/' ? 'white' : 'yellow', textDecoration: 'none'}}>
            🏠 首页
          </Link>
          <Link href='/cognitive-test' style={{color: pathname === '/cognitive-test' ? 'white' : 'yellow', textDecoration: 'none'}}>
            🧠 认知测试
          </Link>
          <Link href='/ai-collaboration' style={{color: pathname === '/ai-collaboration' ? 'white' : 'yellow', textDecoration: 'none'}}>
            🤖 AI协同
          </Link>
        </div>
      </div>
    </nav>
  )
}
