export default function SearchBar() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className="w-full rounded-md border border-solid p-xs"
        type="text"
        placeholder="Search"
      />
    </form>
  );
}
