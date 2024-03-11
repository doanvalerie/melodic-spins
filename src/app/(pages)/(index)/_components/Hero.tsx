import Image from 'next/image';

import BulletList from './BulletList';
import Description from './Description';
import StartLearnLinks from './StartLearnLinks';

export default function Hero() {
  return (
    <div className="font-playfair gap-xl relative flex h-[calc(100vh-theme(spacing.navbar))] min-h-fit flex-col items-center justify-center p-lg md:flex-row">
      <Image
        alt="Mountains"
        src="/index/music.jpg"
        fill
        objectFit="cover"
        className="absolute opacity-5"
      />
      <div className="relative flex w-full flex-col gap-sm lg:w-6/12">
        <Description />
        <StartLearnLinks />
        <BulletList />
      </div>
      <div className="hidden lg:block">
        <Image
          alt="gathering of diverse musicians"
          src="/index/hero.jpg"
          width={500}
          height={750}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
