import React from 'react'
const Search = ({setsearch}) => {
  return (
    <>
    <div className='searchbox'>
    <label><b>SEARCH FOR A STUDENT</b></label>
    <input type='text'
     placeholder='enter id to search'
     onChange={(e)=>setsearch(e.target.value)}
    />
    </div>
        </>
  )
}

export default Search