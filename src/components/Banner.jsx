const Banner = ( {anime} ) => (
    <section className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-2">Explore</h2>
      <p className="text-gray-400 mb-4">What are you gonna watch today ?</p>
  
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={anime.image}
          alt={anime.movieName}
          className="w-full h-[38rem] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-start p-8">
          <h3 className="text-2xl font-bold mb-2">{anime.movieName}</h3>
          <p className="text-sm md:text-base text-gray-200 max-w-xl">{anime.description}</p>
        </div>
      </div>
    </section>
  );
  
  export default Banner;
  