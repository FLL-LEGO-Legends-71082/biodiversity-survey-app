import { useEffect, useState } from "react";
function INaturalist(){
    const[observations, setObservations] = useState([])
    useEffect(() => {

        async function loadObservations() {

            const response = await fetch(
            "https://api.inaturalist.org/v1/observations?per_page=10"
            )

            const data = await response.json()

            console.log(data)

            setObservations(data.results)
         }

        loadObservations()

    }, [])
    return(
        <div>
            <h1>iNaturalist Observation</h1>
            {observations.map((observation)=>(
                <div key={observation.id}>
                    <h3>
                        {observation.taxon?.preferred_common_name}
                    </h3>
                    <p>
                        {observation.taxon?.name}
                    </p>
                </div>
            ))}
        </div>
    )
}
export default INaturalist