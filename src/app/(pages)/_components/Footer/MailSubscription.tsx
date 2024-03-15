export default function MailSubscription() {
  return (
    <form className="flex flex-col gap-xs">
      <label htmlFor="email" className="text-lg font-semibold">
        Get the freshest melodic news.
      </label>
      <div className="flex">
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Your Email"
          className="w-full rounded-md rounded-r-none px-sm py-xs text-dark outline-none"
        />
        <button type="button" className="rounded-l-none bg-primary">
          Subscribe
        </button>
      </div>
    </form>
  );
}
