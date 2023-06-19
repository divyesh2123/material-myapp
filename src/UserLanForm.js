import React, { useContext } from 'react'
import LanguageContext from './Context/LanguageContext'

export default function UserLanForm() {

const {lan} =    useContext(LanguageContext)

const myobject = {

    "en" : {

        "firstName" : "first Name",
        "lastName" : "last Name"

    },
    "gj" : {

        "firstName" : "પ્રથમ નામ",
        "lastName": "last નામ"


    }

}
  return (
    <div>

            <label>{myobject[lan].firstName}</label>

            <input type='text' />

            <label>{myobject[lan].lastName}</label>

            <input type='text' />


    </div>
  )
}
