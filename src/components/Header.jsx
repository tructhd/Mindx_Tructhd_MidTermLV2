const Header = () => (
    <nav className="sticky top-0 z-50 bg-gray-900 flex justify-between items-center p-6 border-b border-gray-700 ">
      <div className="flex justify-between items-center mb-10 font-bold text-white">
        <span className="text-3xl font-bold">Anonime</span>
      </div>
      <div className="flex justify-between gap-96 items-center text-gray-600">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          List anime
        </a>
        <input
          type="text"
          placeholder="Search anime or movie...."
          className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
  
  export default Header;
  