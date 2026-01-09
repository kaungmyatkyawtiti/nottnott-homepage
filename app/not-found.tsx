import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='max-w-3xl mt-6'>
      <div className='relative'>
        <h2 className='text-3xl font-mplus font-semibold mb-2'>Page Not Found!</h2>
        <span
          className="absolute -top-5 -left-1 transform -translate-x-1/2 -translate-y-1/2 text-5xl animate-spin-slow">
          🌸
        </span>
      </div>

      <p>Oops.This page has gone missing.</p>

      <hr className="my-8 border-border" />
      <div className="text-center my-6">
        <Link
          href="/"
          className='btn-primary'
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
