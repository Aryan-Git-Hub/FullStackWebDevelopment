export function ShimmerEffect() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-[80%] container mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-8">
        Wait... or click here to restart temporary access for this proxy
        server:-
        <a
          className="underline"
          target="_blank"
          href="https://cors-anywhere.herokuapp.com/corsdemo"
        >
          Proxy Server
        </a>
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {arr.map((e) => (
          <div key={e}>
            <div className="h-46 bg-gray-300 rounded-2xl"></div>
            <div className="mx-2 mt-2 flex flex-col gap-2">
              <div className="bg-gray-300 h-6"></div>
              <div className="bg-gray-300 h-6"></div>
              <div className="bg-gray-300 h-6"></div>
              <div className="bg-gray-300 h-6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
