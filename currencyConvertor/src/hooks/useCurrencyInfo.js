import { useEffect, useState } from "react";

function useCurrencyInfo( currency){
    const [data, setData] = useState({usd});
    useEffect(()=>{
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}}.min.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency])); 
    }, [currency])
    return data;
}

export default useCurrencyInfo;