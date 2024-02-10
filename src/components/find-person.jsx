import { useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const FIND_PERSON = gql`
  query findPersonByName($nameUserSearch: String!) {
    findPerson(name: $nameUserSearch) {
      id
      name
      phone
      address {
        city
        street
      }
    }
  }
`;


export const FindPerson = () => {

 const [getPerson, result] = useLazyQuery(FIND_PERSON);

 const [nameUser, setNameUser] = useState("");
 const [user, setUser] = useState(null)

//
 const hanleSubmit = (event) => {
   event.preventDefault();
   getPerson({ variables: { nameUserSearch: nameUser } });
 };


 useEffect(() => {
   if (result.data && result.data.findPerson) {
     setUser(result.data.findPerson);
   }
 }, [result.data]);


if (result.error) {
  return <span style={{ color: "red" }}>{result.error.message}</span>;
}


 if (result.loading) {
   return (
     <h2 style={{ color: "yellow", fontWeight: "600", fontSize: "28px" }}>
      Loading...
     </h2>
   );
 }


  return (
    <div>
      <form onSubmit={hanleSubmit}>
        <input
          onChange={(event) => setNameUser(event.target.value)}
          type="text"
          value={nameUser}
          id="name"
          name="name"
        />
        <button type="submit">Show Person</button>
      </form>

      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h4>{user.phone}</h4>
          <span>{user.address.city}</span>
          <p>{user.address.street}</p>
        </div>
      ) : (
        "No user info"
      )}
    </div>
  );
}
