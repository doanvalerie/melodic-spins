export default function Description() {
  return (
    <div className="flex flex-col gap-sm">
      <AnimatedHeader />
      <div>
        Embark on a musical journey where every note connects harmoniously.
        Explore diverse melodies and rhythms that resonate with your soul. Let
        your music spin, creating a symphony of emotions and connections.
      </div>
    </div>
  );
}

/*
 * Reference: Creating a Sliding Text Animation with Tailwind CSS
 * https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/
 * Fix: overflow on excessive zoom in
 */
function AnimatedHeader() {
  return (
    <div className="text-balance bg-gradient-to-r from-gray-500/90 to-gray-600 to-50% bg-clip-text font-rubik text-3xl font-extrabold text-transparent md:text-4xl">
      Navigate your musical landscape with{' '}
      <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden whitespace-nowrap text-primary md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
        <ul className="animate-text-slide-5 leading-tight">
          <li>your favorite albums</li>
          <li>new genres to explore</li>
          <li>artists that inspire</li>
          <li>melodies that move you</li>
          <li>rhythms that resonate</li>
          <li aria-hidden="true">your favorite albums</li>
        </ul>
      </span>
    </div>
  );
}
