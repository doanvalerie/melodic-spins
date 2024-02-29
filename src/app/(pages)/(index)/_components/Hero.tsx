export default function Hero() {
  return (
    <div className="flex items-center justify-center font-playfair p-lg">
      <Greeting />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        officia, id impedit sapiente maxime et aut enim odit rerum accusamus
        ipsam repellat culpa consectetur expedita odio eaque earum ratione
        excepturi!
      </div>
    </div>
  );
}

function Greeting() {
  return (
    <div className="flex flex-col gap-xs">
      <h1>Let Your Music Spin, Connect Harmoniously</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
        repudiandae ducimus dicta, at modi error voluptate cumque pariatur est
        beatae quibusdam aperiam ullam fugit sequi quod ab aut magni fugiat?
      </div>
    </div>
  );
}
