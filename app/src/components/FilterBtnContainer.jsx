import FilterBtn from "./FilterBtn";


export default function FilterBtnContainer({onChange}){
    return (
        <div className="flex justify-center text-center mt-1 items-center">
                <h3 className="text-center text-black mx-5">Filter By:</h3>
                <FilterBtn val="track" onChange={onChange}/>
                <FilterBtn val="artist" onChange={onChange}/>
            </div>
    );
}