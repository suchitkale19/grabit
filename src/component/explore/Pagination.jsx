function Pagination({ currentPage, setCurrentPage, totalPages }) {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="w-full flex gap-8 text-lg font-bold py-10  justify-center items-center">
      <button
        className="px-3 text-2xl  border border-zinc-800 rounded-xl"
        onClick={() => setCurrentPage(currentPage <= 1 ? 1 : currentPage--)}
      >
        &lt;
      </button>
      {pages.map((page) => (
        <div
          className={`${
            currentPage === page ? "bg-zinc-700 scale-125" : ""
          }  px-3 text-2xl  border border-zinc-800 rounded-xl cursor-pointer`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        className="px-3 text-2xl  border border-zinc-800 rounded-xl"
        onClick={() => setCurrentPage(currentPage >= 10 ? 10 : currentPage++)}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
