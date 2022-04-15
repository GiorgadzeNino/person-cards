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
        setEditedUser(null)
        if (editPersonData) {
            const user = editedUser
            user[e.target.id] = e.target.value
            setEditedUser(user)
        } else {
            const newState = newUser;
            newState[e.target.id] = e.target.value;
            setNewUser(newState)
            setEditedUser(newState)
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
        setNewUser(editPersonData)
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
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.name} id="name" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.email}
                            id="email" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            country
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.country}
                            id="country" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
                            region
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.region}
                            id="region" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberrange">
                            numberrange
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.numberrange}
                            id="numberrange" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            phone
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.phone}
                            id="phone" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalZip">
                            postalZip
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.postalZip}
                            id="postalZip" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            address
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            onChange={(e) => handleChange(e)} value={editedUser?.address}
                            id="address" type="text" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-300 font-bold 
                        p-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
