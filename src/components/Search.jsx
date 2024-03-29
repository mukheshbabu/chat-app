import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/4355348/pexels-photo-4355348.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <div className="userChatInfo">
          <span>Mukhesh</span>
        </div>
      </div>
    </div>
  )
}

export default Search
