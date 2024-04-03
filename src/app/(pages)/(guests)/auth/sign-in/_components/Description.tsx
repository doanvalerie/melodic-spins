import Image from 'next/image';

export default function Description() {
  return (
    <div className="flex w-full flex-col items-center gap-med lg:w-1/2">
      <div className="flex flex-col gap-sm">
        <h1>Sign In</h1>
        <p>
          Continue your musical journey and connect with fellow enthusiasts.
          Dive into your unique musical experience now!
        </p>
      </div>
      <Image
        src="/auth/sign-in/music.svg"
        alt="cartoon girl dancing to music"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-1/2"
      />
    </div>
  );
}
