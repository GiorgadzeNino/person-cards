import React from 'react'

const Avatar = 
({
    children, 
    avatar, 
    isRounded = false, 
    bgColor = 'blue-600',
    borderColor = 'white',
    textColor = 'white',
    firstName,
    lastName,
    className
}) => {

    if(avatar)
        return (
            <div className='relative flex'>
                <div
                className={
                    `flex bg-${bgColor} text-${textColor} w-10 h-10 ${className}
                    ${isRounded ? 'rounded-full' : 'rounded-md'} cursor-pointer` 
                }>
                    <img src={avatar} alt='avatar' />
                </div>
            </div>
        )
    
  return (
    <div
      className={
        `flex justify-center items-center bg-${bgColor} w-10 h-10 text-${textColor} border-${borderColor} ${className}
        border-2 ${isRounded ? 'rounded-full' : 'rounded-md'}`
      }
    >
      <span className='text-xs'>
        {firstName?.slice(0, 1).toUpperCase()}
      </span>
      <span className='text-xs'>
        {lastName?.slice(0, 1).toUpperCase()}
      </span>
            {children}
    </div>
  )
}

export default Avatar