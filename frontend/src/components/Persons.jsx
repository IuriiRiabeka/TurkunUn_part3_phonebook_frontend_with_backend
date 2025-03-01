const Persons=({personsToShow=[],deletePerson})=>{
    return(
        <div>
             <h2>Numbers</h2>
      <div>
      {personsToShow && personsToShow.length > 0 ? (
  personsToShow.map(person => (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
    </div>
  ))
) : (
  <p>No persons to show</p>
)}
      </div>
        </div>
    )
}
export default Persons;