function Rating() {
  return (
    <div className="h-fit w-fit p-4 flex flex-col gap-2 absolute top-39 left-73 border   bg-black border-zinc-800 rounded-xl">
      {[1, 2, 3, 4, 5].map((number) => (
        <h1
          className="h-fit w-20 p-1 border text-center  text-xl font-bold rounded border-zinc-800 hover:bg-zinc-900"
          key={number}
        >
          {number}⭐
        </h1>
      ))}
    </div>
  );
}

export default Rating;
