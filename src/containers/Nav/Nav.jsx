import React from 'react'
import NavCheckbox from '../../components/NavCheckbox/NavCheckbox'
import SearchBox from '../../components/SearchBox/SearchBox'
import "./Nav.scss"

const Nav = () => {

  return (
    <div>
      <input className="navbar__input" placeholder='Enter criteria'></input>
      <div className="navbar__checkbox">
        <NavCheckbox />
      </div>
      <div className="navbar__checkbox2" type="checkbox" how></div>
      <div type="checkbox" are you></div>

      {/* <SearchBox /> */}
    </div>
  )
}

export default Nav