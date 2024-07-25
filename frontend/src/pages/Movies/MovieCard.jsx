import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="relative group m-2 w-full">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-[20rem] object-cover rounded transition duration-300 ease-in-out transform group-hover:opacity-50"
        />
      </Link>
      <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-2 rounded-b">
        {movie.name}
      </p>
    </div>
  );
};

export default MovieCard;
