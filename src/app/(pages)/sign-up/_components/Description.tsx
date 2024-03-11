import Image from 'next/image';

export default function Description() {
  return (
    <div className="flex flex-col items-center gap-med">
      <div className="flex flex-col gap-sm">
        <h1>Sign Up</h1>
        <p>
          Sign up now to create your personalized profile, track your musical
          journey, and engage with a vibrant community of music enthusiasts.
          Start exploring and curating your unique musical experience today.
        </p>
      </div>
      <Image
        src="/sign-up/happy_music.svg"
        alt="cartoon bird listening to music"
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-1/2"
      />
    </div>
  );
}
