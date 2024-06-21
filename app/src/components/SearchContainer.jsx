import FilterBtnContainer from "./FilterBtnContainer";


export default function SearchContainer({inp, setInp, onClick, onChangeFilter, placeholder, btnText}){

    function handleKeyUp(event){
        if (event.key === "Enter"){
            onClick();
        }
    }

    return (
        <div className="bg-green  py-2">
            <h1 className="text-black text-center font-bold text-lg">QuickTrack</h1>
            <div className="flex w-full mx-auto py-1 justify-center  ">
                <input className="bg-white pl-10 text-center text-black w-3/4 rounded-l border" type="text" value={inp} onChange={e=>setInp(e.target.value)} onKeyUp={handleKeyUp} placeholder={placeholder} />
                <button className="bg-white text-black rounded-r p-1 bg-opacity-80 border" onClick={onClick} title={placeholder}>{btnText}</button>
            </div>
            {onChangeFilter? <FilterBtnContainer onChange={onChangeFilter}/> : ""}
        </div>
    )

}