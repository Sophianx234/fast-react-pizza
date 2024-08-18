import Button from "./Button";

function Homepage() {
  return (
    <div className="mt-14 flex flex-col gap-8 px-4 text-center text-xl">
      <div className="space-y-2">
        <p className="font-mono text-2xl font-bold text-stone-700">
          The best pizza.
        </p>
        <h1 className="text-5xl font-bold tracking-wider text-yellow-400">
          Straight out of the oven, straight <br /> to you
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-medium text-stone-500">
          👋 Welcome! Please start by telling us your name:
        </p>
        <input
          type="search"
          className="mt-3 w-96 flex-1 rounded-full bg-white px-2 py-2 indent-4 text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-1"
          placeholder="Your full name"
        />
        <Button>Start Ordering</Button>
      </div>
    </div>
  );
}

export default Homepage;
