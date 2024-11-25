import React from 'react'
const Search = ({setsearch}) => {
  return (
    <>
    <input type='text'
     placeholder='enter id to search'
     onChange={(e)=>setsearch(e.target.value)}
    />
    </>
  )
}

export default Search