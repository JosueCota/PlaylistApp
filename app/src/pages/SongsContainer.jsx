import FormContainer from "../components/FormContainer";
import { useState } from "react";

export default function SongsContainer() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("")

    return (
    <div>
        <FormContainer search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
    </div>)
}