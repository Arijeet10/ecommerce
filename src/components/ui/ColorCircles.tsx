

const ColorCircles=({color}:{color:string})=>{

    return(
        <>
            <div style={{borderColor:color}} className={`p-[2px] w-6 h-6 rounded-full border-2  flex items-center justify-center`}>
                <div style={{backgroundColor:color}} className={` w-4 h-4 rounded-full`} />
            </div>
        </>
    )
}

export default ColorCircles;