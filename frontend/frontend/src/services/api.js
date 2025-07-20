const API_KEY="f2aded1d8a2b2c4732bb415b6eb2e541"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies=async()=>{
    try {
        const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch popular movies");
        const data=await response.json()
        return data.results
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const searchMovies=async(query)=>{
    try {
        const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("Failed to search movies");
        const data=await response.json()
        return data.results
    } catch (err) {
        console.error(err);
        return [];
    }
};