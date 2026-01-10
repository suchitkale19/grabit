function ButtonSvg({ path, name, height, width, textHeight, highlight }) {
  return (
    <button
      className={`h-${height ? height : "12"} ${
        highlight
          ? "bg-[#d78b08] hover:bg-[#D97706] text-black"
          : "text-zinc-200 hover:bg-zinc-900"
      } w-${
        width ? width : "28"
      }  transition-all flex justify-center font-medium items-center gap-2 border border-zinc-700 rounded-lg p-0 cursor-pointer px-2 py-1 text-${
        textHeight ? textHeight : "lg"
      }`}
    >
      {path ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill={highlight ? "#121212" : "#e8eaed"}
        >
          <path d={path} />
        </svg>
      ) : (
        ""
      )}
      <p className="text-center">{name}</p>
    </button>
  );
}

export default ButtonSvg;
