import React, {useState} from 'react';

export const PhoneForm = ({ editNumber }) => {


      const [userData, setUserData] = useState({
        name: "",
        phone: "",
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      };


const handleSubmit = (event) => {
  const { name, phone } = userData;

  event.preventDefault();

  editNumber({
    variables: { name, phone },
  });

  setUserData({
    name: "",
    phone: ""
  });
};

  return (
    <div>
      <h2>Edit Phone Number</h2>
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
        />
        <button>Send</button>
      </form>
    </div>
  );
}
