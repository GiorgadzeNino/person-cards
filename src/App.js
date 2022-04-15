import { useState } from 'react'
import './App.css'
import data from './dummyData/data'
import PersonItem from './components/molecules/Person/PersonItem'
import AddPerson from './components/atoms/Add-person/AddPerson'

function App() {

  const [personData, setPersonData] = useState(data)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [editPerson, setEditPerson] = useState({
    id: '',
    name: '',
    email: '',
    country: '',
    region: '',
    numberrange: '',
    phone: '',
    postalZip: '',
    address: '',
  })

  const handleDelete = (id) => {
    const newPersonData = personData.filter(person => person.id !== id)
    setPersonData(newPersonData)
  }

  const handleEdit = (id) => {
    const newPersonData = personData.filter(person => person.id === id);
    setEditPerson(newPersonData[0])
    opModal(id)
  }

  const opModal = (id) => {
    setIsOpenModal(true);
  }
  const clModal = () => {
    setIsOpenModal(false);
  }

  const handleChange = (childData) => {
    setPersonData(childData)
  }

  return (
    <div className='w-full h-full bg-slate-500  p-4'>
      <div className='flex justify-center'>
        <button className='bg-blue-300 rounded px-2' onClick={() => opModal()}> Add person</button>
      </div>
      <div className='flex flex-wrap'>
        <AddPerson opModal={isOpenModal} closeModal={clModal} changePersonalData={handleChange} editPersonData={editPerson}></AddPerson>
        {personData.map(person => (
          <PersonItem key={person.id} {...person} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
      </div>
    </div >
  );
}

export default App;
