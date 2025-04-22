const NewRelease = ({ animeList, onSelect }) => (
    <section className="px-6 pb-12">
      <h2 className="text-2xl font-bold mb-6">New Release</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animeList.map((anime) => (
          <div
            key={anime.id}
            className="cursor-pointer"
            onClick={() => onSelect(anime)}
          >
            <div className="relative rounded-xl overflow-hidden h-64">
              <img
                src={anime.image}
                alt={anime.movieName}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-2 py-2">
                    <p className="text-md text-white text-center">Episode {anime.episode}</p>
                </div>
            </div>
            <div className="mt-2 px-1 text-center">
              <p className="text-md font-semibold leading-tight">
                {anime.movieName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default NewRelease;