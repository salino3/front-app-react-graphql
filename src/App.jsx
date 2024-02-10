import { useState } from 'react'
import {gql, useQuery} from '@apollo/client'
import reactLogo from './assets/react.svg'
import {FindPerson, Persons} from './components'
import './App.css'

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);

 const {data, error, loading} = useQuery(ALL_PERSONS);

 console.log(data)

if(error) {
  return <span style={{color: "red"}}>{error.message}</span>
}

if(loading){
  return <h2 style={{ color: "yellow", fontWeight: '600', fontSize: '48px' }}>Loading...</h2>;
}


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <details open style={{ color: "white" }}>
        <summary>FindPerson Component</summary>
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
