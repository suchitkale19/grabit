function footer() {
  return (
    <div className=" h-auto flex flex-col justify-center items-center gap-10 w-full bg-zinc-950 text-white border-t border-zinc-800 py-12  px-36">
      <div className="flex gap-10">
        {[
          "About Us",
          "Contact Us",
          "FAQ",
          "Privacy Policy",
          "Terms of Service",
        ].map((item) => (
          <p className="hover:underline" key={item}>
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-5">
        {["facebook", "twitter", "youtube"].map((item) => (
          <img key={item} src={`/src/assets/${item}.svg`} alt={item} />
        ))}
      </div>
      <p>&copy; 2026 Sprout Shell. All rights reserved.</p>
    </div>
  );
}

export default footer;
