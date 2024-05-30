//API Requests

export const getApiData=async(url:string)=>{
    try {
        const res=await fetch(url)
        const response=await res.json()
        if(res.ok){
            return response
        }
    } catch (error) {
        console.log(error)
    }
}

