import { useState } from 'react';
import Modal from 'react-modal';
import data from '../../../dummyData/data'

export default function Example({ opModal, closeModal, changePersonalData }) {
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
            id: null,
            name: null,
            email: null,
            country: null,
            region: null,
            numberrange: null,
            phone: null,
            postalZip: null,
            address: null,
        }
    )
    const [newData, setNewData] = useState(data);

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

    const handleChange = (e) => {
        const newState = newUser;
        newState[e.target.id] = e.target.value;
        setNewUser(newState)
    }
    return (
        <Modal
            style={customStyles}
            isOpen={opModal}
            ariaHideApp={false}
        >
            <button onClick={closeModal}>x</button>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="name" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="username" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            country
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="country" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
                            region
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="region" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberrange">
                            numberrange
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="numberrange" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            phone
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="phone" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalZip">
                            postalZip
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="postalZip" type="text" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            address
                        </label>
                        <input className='shadow appearance-outline border-2 rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={(e) => handleChange(e)} id="address" type="text" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-300 font-bold 
                        p-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
