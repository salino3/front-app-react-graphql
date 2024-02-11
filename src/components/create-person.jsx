import React, {useState} from 'react';

 

export const CreatePerson = ({createPerson}) => {


  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    street: "",
    city: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData({...userData, [name]: value});
  };

const handleSubmit = (event) => {

  const {name, phone, street, city} = userData;

   event.preventDefault();

    createPerson({
      variables: { name, phone, street, city },
    });

   setUserData({
    name: "",
    phone: "",
    street: "",
    city: ""
   });
};


  return (
    <div>
      <h2>Create new Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={userData.name || ""}
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />{" "}
        <input
          value={userData.phone || ""}
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
        />{" "}
        <input
          value={userData.street || ""}
          placeholder="Street"
          onChange={handleChange}
          name="street"
        />{" "}
        <input
          value={userData.city || ""}
          placeholder="City"
          onChange={handleChange}
          name="city"
        />
        <button>
          Add Person
        </button>
      </form>
    </div>
  );
}
