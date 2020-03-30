import React, {useState} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Searchbar = () => {
    const [queryString, setQueryString] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       if(queryString){
        window.location.href = `https://www.google.de/search?q=${queryString}`
       }
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <InputGroup className="mb-5">
                <InputGroup.Prepend className="google-icon">
                    <InputGroup.Text><i className="fab fa-google"></i></InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    placeholder="Mit Google suchen"
                    aria-label="Google Suche"
                    value={queryString}
                    required
                    onChange={(e)=>setQueryString(e.target.value)}
                />
                <InputGroup.Prepend className="search-icon">
                    <InputGroup.Text onClick={handleSubmit}><i className="fas fa-search"></i></InputGroup.Text>
                </InputGroup.Prepend>
            </InputGroup>
        </form>
    )
}
export default Searchbar