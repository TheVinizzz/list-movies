import { FC } from "react";
import "./styles.scss"
import { Button, RatingIndicator } from "@ui5/webcomponents-react";
import { useSelector } from "react-redux";
import { IMovie } from "../../services/movies/types";

const CardMovie: FC = () => {

    const movie: IMovie = useSelector((state: any) => state.movie.value)

    return (
        <div className="card-movie">
            <div className="description">
                <h1>{movie.Title}</h1>
                <p className="plot">
                    {movie.Plot}
                </p>
                <div className="actor">
                    <h3>Actor</h3> 
                    <p>{movie.Actors}</p>
                </div>
                <div className="review">
                    <h3>Review</h3> 
                    <RatingIndicator value={((Number(movie.imdbRating) / 10) * 5)} readonly />
                </div>
            </div>
            <div className="image">
                <img src={movie.Poster} alt="name-1"/>
            </div>
        </div>
    )
}

export default CardMovie