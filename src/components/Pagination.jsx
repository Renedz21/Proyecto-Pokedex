import React from 'react'

const Pagination = ({ onLeftClick, onRightClick, totalPages, page }) => {


    const style = {
        'button': 'bg-gray-50 hover:bg-gray-300 p-2 border border-gray-100 rounded-full',
    }

    return (
        <div className="flex items-center justify-center gap-8 mt-4">
            <button className={style.button} onClick={onLeftClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <p className='font-semibold text-gray-700 text-base'>{page} de {totalPages}</p>
            <button className={style.button} onClick={onRightClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default Pagination