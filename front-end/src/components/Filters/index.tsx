import { FC } from "react";
import "./styles.scss"
import { Button, Input } from "@ui5/webcomponents-react";
import { IFilters } from "./types";

const Filters: FC<IFilters> = ({ search, setSearch, refetch }) => {

    const handleReset = () => {
        setSearch("")
    }

    return (
        <div className="filters">
            <div className="container">
                <Input
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    placeholder="Buscar filme"
                />
                <Button
                    onClick={() => refetch()}
                    className="button-search"
                >
                    Buscar
                </Button>
                <Button
                    onClick={handleReset}
                    className="button-reset"
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}

export default Filters;