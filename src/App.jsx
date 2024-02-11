import reactLogo from './assets/react.svg'
import {CreatePerson, FindPerson, Notify, Persons, PhoneForm} from './components'
import { useCreatePerson, useEditNumber, usePersons } from './persons'
import './App.css'


function App() {

  const { data, error, loading } = usePersons();
  
  const {createPerson, clearError, errorMsg} = useCreatePerson();
  const { editNumber } = useEditNumber();

  

if(error) {
  return <span style={{color: "red"}}>{error.message}</span>
}

if(loading){
  return <h2 style={{ color: "yellow", fontWeight: '600', fontSize: '48px' }}>Loading...</h2>;
}

if(errorMsg) {
  clearError()
}


  return (
    <div className="App">
      <Notify errorMessage={errorMsg} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <details open style={{ color: "white" }}>
        <summary>Edit Number Component</summary>
        <div>
          <PhoneForm editNumber={editNumber} />
        </div>
      </details>
      <br />
      <details open style={{ color: "white" }}>
        <summary>Create Person Component</summary>
        <div>
          <CreatePerson createPerson={createPerson} />
        </div>
      </details>
      <br />
      <details open style={{ color: "white" }}>
        <summary>Find Person Component</summary>
        <div>
          <FindPerson />
        </div>
      </details>
      <h1>GraphQL + React</h1>
      <Persons persons={data} />
    </div>
  );
}

export default App
