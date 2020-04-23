import React from 'react'

const input = props => {

    const {
        className,
        id,
        placeHolder,
        type} = props

    return (
        <>
            <input
                className={className}
                id={id}
                placeHolder={placeHolder}
                type={type}
                onChange={() => {}}
            />
        </>
    )
}

export default input
