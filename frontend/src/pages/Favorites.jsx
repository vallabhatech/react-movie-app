import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext"; // ✅ Fix 1: correct import path
import MovieCard from "../components/MovieCard"; // ✅ Fix 2: fix component name typo

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid"> {/* ✅ Fix 3: typo in className */}
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet!</h2>
      <p>Start adding movies to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
