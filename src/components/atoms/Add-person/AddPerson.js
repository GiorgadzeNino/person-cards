import { useState } from 'react';
import Modal from 'react-modal';
import data from '../../../dummyData/data'

export default function Example({ opModal, closeModal, changePersonalData, editPersonData }) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80vh'
        },
    };
    const [newUser, setNewUser] = useState(
        {
            id: '',
            name: '',
            email: '',
            country: '',
            region: '',
            numberrange: '',
            phone: '',
            postalZip: '',
            address: '',
        }
    )
    const [newData, setNewData] = useState(data);
    const [editedUser, setEditedUser] = useState(editPersonData)

    const handleSave = () => {
        const newState = newUser
        newState["id"] = data.length + 1;
        setNewUser(newState);
        const changedData = [...newData]
        changedData[data.length] = newUser;
        setNewData(changedData);
        changePersonalData(changedData);
        closeModal();
    };

    const handleUpdate = () => {
        const index = newData.findIndex(object => {
            return object.id === editPersonData.id;
        });
        const newState = [...newData]
        newState[index] = newUser
        changePersonalData(newState)
        closeModal();
    }

    const handleChange = (e) => {
        if (editPersonData) {
            const user = editedUser
            user[e.target.id] = e.target.value
            setEditedUser(user)
            setNewUser(user)
        } else {
            const newState = newUser;
            newState[e.target.id] = e.target.value;
            setNewUser(newState)
            // setEditedUser(newState)
        }
    }

    const handleSubmit = () => {
        if (editPersonData) {
            handleUpdate();
        } else {
            handleSave();
        }
    }

    const handleFillData = () => {
        setEditedUser(editPersonData)
    }
    return (
        <Modal
            style={customStyles}
            isOpen={opModal}
            ariaHideApp={false}
            onAfterOpen={() => handleFillData()}
        >
            <button onClick={closeModal}>x</button>
            <div className="w-full max-w-xs">
                <form >
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="name">
                            Name
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.name} id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                            Email
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.email}
                            id="email" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="country">
                            country
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.country}
                            id="country" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="region">
                            region
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.region}
                            id="region" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="numberrange">
                            numberrange
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.numberrange}
                            id="numberrange" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="phone">
                            phone
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.phone}
                            id="phone" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="postalZip">
                            postalZip
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.postalZip}
                            id="postalZip" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="address">
                            address
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={newUser.address}
                            id="address" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-300 font-bold 
                        px-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
