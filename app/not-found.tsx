import FloatingUFO from '@/components/animations/FloatingUFO'
import InteractiveBtn from '@/components/animations/InteractiveBtn'
import { RiHome3Fill } from '@remixicon/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='page-container'>
      <div className='relative'>
        <div className="absolute -top-18 -left-8">
          <FloatingUFO />
        </div>
        <h2 className='text-3xl font-mplus font-semibold mb-2'>
          Page <span className='text-destructive'>Not Found!</span>
        </h2>
      </div>

      <p>Oops.This page has gone missing.</p>

      <hr className="my-6 border-border" />

      <Link
        href="/"
      >
        <InteractiveBtn>
          <RiHome3Fill size={20} />
          Go Home
        </InteractiveBtn>
      </Link>
    </main>
  )
}
