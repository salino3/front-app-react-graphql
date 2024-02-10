

export const Persons = ({ persons }) => {


  return (
    <div>
      <h2>Persons</h2>
      {persons &&
        persons.allPersons &&
        persons.allPersons.map((user) => (
          <div style={{ border: "solid blue 2px" }} key={user.id}>
            <p>{user.name}</p>
            <p>{user.phone}</p>
          </div>
        ))}
    </div>
  );
};
