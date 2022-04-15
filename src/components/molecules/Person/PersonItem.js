import { useState } from "react"
import Card from '../../atoms/Card'
import Avatar from '../../atoms/Avatar'

const PersonItem = ({ name, country, region, phone, address, id, handleDelete, opModal,clModal }) => {

    const [isFrontShown, setIsFrontShown] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const onFlip = () => setIsFrontShown(prev => !prev)

    return (
        <div>
            <Card onClick={onFlip}>
                <Card.Front isHidden={isFrontShown}>
                    <img src='https://www.w3schools.com/w3images/team2.jpg'
                        width='100%' alt='Placeholder' className='rounded-lg' />
                    <p className='text-2xl text-center mt-2'>{name}</p>
                    <p className='text-center text-lg mt-4'>Address: {address} </p>
                </Card.Front>
                <Card.Back isHidden={isFrontShown} className='p-4'>
                    <div className='flex items-center justify-between mx-4 '>
                        <Avatar firstName={firstName} lastName={lastName} className='mr-2' />
                        <button
                            className='px-2 font-bold text-white bg-red-400 rounded-lg right-6 p-4'
                            onClick={() => handleDelete(id)}
                        >
                            <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokelineap="round" strokelinejointrokelinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>

                        </button>
                        <button
                            className='px-2 p-4 font-bold text-white bg-red-400 rounded-lg right-6'
                            onClick={() => opModal()}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </button>
                    </div>
                    <p className='mt-4 text-white'>
                        <span className='mr-2 text-sm text-white opacity-60'>Full Name:</span>
                        <span>{name}</span>
                    </p>
                    <p className='mt-4 text-white'>
                        <span className='mr-2 text-sm text-white opacity-60'>Address:</span>
                        <span>{address}</span>
                    </p>
                    <p className='mt-4 text-white'>
                        <span className='mr-2 text-sm text-white opacity-60'>Country:</span>
                        <span>{country}</span>
                    </p>
                    <p className='mt-4 text-white'>
                        <span className='mr-2 text-sm text-white opacity-60'>Region:</span>
                        <span>{region}</span>
                    </p>
                    <p className='mt-4 text-white'>
                        <span className='mr-2 text-sm text-white opacity-60'>Phone Number:</span>
                        <span>{phone}</span>
                    </p>
                </Card.Back>
            </Card>
        </div>
    )
}

export default PersonItem