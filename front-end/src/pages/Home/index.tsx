import { FC, useEffect, useState } from "react";
import "./styles.scss"
import Filters from "../../components/Filters";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../services/movies";
import CardMovie from "../../components/CardMovie";
import { useDispatch } from "react-redux";
import { setMovie } from "../../hooks/useMovie";

const Home: FC = () => {
    const [search, setSearch] = useState<string | undefined>("")

    const dispatch = useDispatch()

    const { data, refetch, isLoading } = useQuery({
        queryFn: () => getMovie({ name: search || "" }),
        queryKey: ['movie'],
    })

    useEffect(() => {
        if(data && !isLoading) {
            dispatch(setMovie(data))
        }
    },[data])

    return (
        <div className="container-home">
            <div className="container-section">
                <h1 className="title">Escolha um filme</h1>
                <Filters search={search} setSearch={setSearch} refetch={refetch} />
                <CardMovie />
            </div>
        </div>
    )
}

export default Home