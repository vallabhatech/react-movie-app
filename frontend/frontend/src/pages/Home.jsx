import MovieCard from "../components/MovieCard";
import {useState,useEffect} from "react";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home(){
    const [searchQuery,setSearchQuery]=useState("");

    const[movies,setMovies]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const popularMovies=await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err);
                setError("failed to load")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults);
            setError(null);
        }
        catch(err){
            console.log(err);
            setError("Failed to search movies..")
        }
        finally{
            setLoading(false);
        }
        
    };

    return ( 
    <div className="home">
        <header className="home-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Discover Movies</h1>
                    <p className="hero-subtitle">Search and save your favorite movies!</p>
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </form>
                </div>
            </header>
            {error && (
                <div className="error-message">
                    <span>⚠️ {error}</span>
                </div>
            )}
            {loading ? (
                <div className="loading-spinner"></div>
            ) : movies.length > 0 ? (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="No results" className="no-results-img"/>
                    <p>No movies found. Try a different search!</p>
                </div>
            )}
    </div>
    );
}

export default Home