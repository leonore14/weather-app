import React, { useState } from 'react' ;

const Search = ({ onSearch }) => {
    
    const[text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(text)
    }

    return(
            <form onSubmit={handleSubmit} className='searchForm'>
                <input type="text" onChange={handleChange} className="inputText" />
                <input type="submit" value="Search !" className="inputSubmit" />
            </form>
        )
}

export default Search ;