import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL,geoApiOptions } from "../../api"




const Search = ({onSearchChange})=>{

    const [search,setSearch] = useState(null)
    const handleOnChange = (data)=>{
        setSearch(data);
        onSearchChange(data);
    }
    const loadOptions = async (inputvalue) =>{
     
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`, geoApiOptions);
            const result = await response.json();
            return {
                options:result.data.map((city)=>{
                  return{
                    value:`${city.latitude} ${city.longitude}`,
                    label : `${city.name},${city.countryCode}`
                  }
                })
            }
            
           
            
            
        } catch (error) {
            console.error(error);
        }
        


    }
           
    return(

        <AsyncPaginate 

        placeholder='Enter name of city'
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
         
        />


    )
}
export default Search;