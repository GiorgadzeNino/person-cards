import { useState } from 'react'
import './App.css'
import data from './dummyData/data'
import PersonItem from './components/molecules/Person/PersonItem';


function App() {

  const [personData, setPersonData] = useState(data)

  const handleDelete = (id) => {
    const newPersonData = personData.filter(person => person.id !== id)
    setPersonData(newPersonData)
  }
  
  return (
    <div className="w-full h-screen bg-slate-500 flex flex-wrap">
      {personData.map(person => (
        <PersonItem key={person.id} {...person} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
