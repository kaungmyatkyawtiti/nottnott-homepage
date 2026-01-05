import Link from 'next/link'
import { RiSeedlingFill } from '@remixicon/react';

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <div className='flex items-center gap-2'>
        <RiSeedlingFill />
        <p className='font-mplus font-bold'>
          Kaung Myat Kyaw
        </p>
      </div>
    </Link>
  );
}

export default Logo;
