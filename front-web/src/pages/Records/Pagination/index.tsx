import React from 'react';
import './styles.css';
import { type } from 'os';

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number;
};

const Pagination = ({totalPages = 0, goToPage, activePage}: Props ) => {
    
    const paginationItems = Array.from(Array(totalPages).keys());

    return (

        <div className='pagination-container'>
            {paginationItems.map(item => (

                <button
                   className={`pagination-item ${activePage === item ? 'acitve' : 'inactive'}`}
                   onClick={() => goToPage(item)}>

                    {item + 1}
                </button>


            ))} 

        </div>


    )


}

export default Pagination;