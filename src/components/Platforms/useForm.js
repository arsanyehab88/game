import axios from 'axios'
import  { useEffect, useState } from 'react'

const useForm=(test,Platforms)=>{
 
    let [data,setData]=useState([])
    const [isloading,setLoading]=useState(true)
    const [err,setError]=useState(null)

    async function getData(){
        return await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?${test}=${Platforms}`,{
    
          headers:{
            'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
    }

    useEffect(()=>{
        getData()
        .then((res) => {
            setData(res.data)
            setLoading(false)
            setError(null)
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
            setError(err)
        })
    },[Platforms])

    return {
        data,
        isloading,
        err
    }
}


export default useForm;