import FilterBtn from "./FilterBtn";



export default function FilterBtnContainer({onChange}){
    return (
        <div className="flex justify-evenly text-center mt-1">
                <FilterBtn val="track" onChange={onChange}/>
                <FilterBtn val="artist" onChange={onChange}/>
            </div>
    );
}