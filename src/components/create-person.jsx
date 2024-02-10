import React from 'react';
import { gql, useMutation } from "@apollo/client";


export const CreatePerson = () => {

const CREATE_PERSON = gql`
  
 mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String ) {
  addPerson(
    name: $name, 
    street: $street, 
    city: $city, 
    phone: $phone
     ){
    id
    name
    phone
    address {
      city
      street
    }
  }
}
`


  return (
    <div>
        CreatePerson
    </div>
  )
}
