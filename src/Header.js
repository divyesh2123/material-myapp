import React, { useContext } from 'react'
import LanguageContext from './Context/LanguageContext'

export default function Header() {

   const {lan,setlan} = useContext(LanguageContext);

    const changeHalder = (e)=> {

        setlan(e.target.value);

    }

  return (
    <div>

            <select onChange={changeHalder}>

                <option value='en'>English</option>
                <option value='gj'>Gujratii</option>

            </select>

    </div>
  )
}
