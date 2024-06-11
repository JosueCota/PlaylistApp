

export default function FilterBtn({val, onChange}){
    return (
        <div className="mx-2">
            <label htmlFor={val}>
                <input type="radio" value={val} id={val} name="filter" className="peer appearance-none hidden" onChange={onChange} />
                <p className="peer-checked:bg-blue peer-checked:text-white p-1 bg-white text-black rounded w-24 capitalize">{val} Name</p>
            </label>
        </div>
    );
}