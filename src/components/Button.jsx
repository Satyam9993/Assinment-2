import React from 'react'

const Button = ({type, name, onClickfn}) => {
  return (
    <>
      <button className={`${type === "sm" ? "text-md p-2 rounded-sm":"text-lg py-2 px-3 rounded-lg"} hover:text-gray-100 hover:bg-gray-900 border-2`} onClick={onClickfn}>
      {name}
      </button>
    </>
  )
}

export default Button