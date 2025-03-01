import './App.css'
import dataContacts from "./contacts.json"
import { useEffect, useState } from "react"

function App() {

  const [contacts, setContacts] = useState(dataContacts)

  const [displayContacts, setDisplayContacts] = useState(contacts.slice(0, 5))


  useEffect(() => {
    
  }, [displayContacts])


  const handlerAddRandomContact = () => {
    const remainingContacts = contacts.filter(contact => !displayContacts.includes(contact))
    
    if (remainingContacts.length === 0){
      console.log('No hay mas contactos')
      return
    }

    const newRandomNumber = Math.floor(Math.random() * remainingContacts.length)

    const newRandomContact = remainingContacts[newRandomNumber]

    if (!newRandomContact) {
      console.error("Error: newRandomContact es undefined.");
      return;
    }

    setDisplayContacts([...displayContacts, newRandomContact])
  }

  return (
    <div className="App">
      <button
        onClick={handlerAddRandomContact}
        >Add a random contact</button>
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {displayContacts.map(contact => {
            return (
              <tr key={contact.name}>
                <td><img style={{width: '100px'}} src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
