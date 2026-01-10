function Title({ name, subtitle }) {
  return (
    <div className="h-24 w-full  border-t border-zinc-800 flex flex-col items-center p-4">
      <div className="flex justify-center items-center gap-2 text-sm">
        <div className="border border-zinc-700 w-32 bg-white"></div>
        <p>{subtitle}</p>
        <div className="border border-zinc-700 w-32 bg-white"></div>
      </div>
      <h1 className="text-4xl">{name}</h1>
    </div>
  );
}

export default Title;
