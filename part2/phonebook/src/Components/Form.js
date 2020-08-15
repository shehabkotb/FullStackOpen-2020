import React, { useState } from "react"
import contactService from "../services/contacts.js"

const Form = (props) => {
  const { setPersons, persons } = props

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    let contact
    if ((contact = persons.find((person) => person.name === newName))) {
      let confirmation = window.confirm(
        `${newName} is already added to the phonebook, replace old number with new one?`
      )

      if (!confirmation) return

      contactService
        .updateContact({ ...contact, number: newNumber })
        .then((newContact) => {
          setNewName("")
          setNewNumber("")
          setPersons(
            persons.map((person) =>
              person.id !== newContact.id ? person : newContact
            )
          )
        })
        .catch((error) => {
          window.alert("can't add right now try again later")
          console.error(error)
        })
    } else {
      const newContact = {
        name: newName,
        number: newNumber
      }
      setNewName("")
      setNewNumber("")
      contactService
        .createContact(newContact)
        .then((newContact) => setPersons(persons.concat(newContact)))
        .catch((error) => {
          window.alert("can't add right now try again later")
          console.error(error)
        })
    }
  }

  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          add
        </button>
      </div>
    </form>
  )
}

export default Form
