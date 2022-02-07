// create your App component here

import { useEffect, useState } from "react"


function App() {

    const [stuff, setStuff] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(fetchedStuff => {
                setStuff( fetchedStuff )
            })
    }, [])

    console.log(stuff)

    return (
        <div>
        <p>Loading ...</p>
        <img src={stuff.message} alt="A Random Dog"/>
        </div>
    )
}

export default App