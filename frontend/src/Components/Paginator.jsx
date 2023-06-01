import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Paginator({metaData}) {
    const links = metaData?.links
    const lastPage = metaData?.last_page

    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname;
    const [p, setP] = useState(0);

    useEffect(() => {
        if (p > 0) {
            navigate(currentPath + '?page=' + p)
        }
    },[p])
    const changePage = (page) => {
        if (!isNaN(parseInt(page)))
        {
            setP(parseInt(page));
        }
        else {
           if (page === "Next &raquo;" && p < lastPage){
               setP((prev) => prev + 1)
           }

           if (page === "&laquo; Previous" && p > 1) {
                setP((prev) => prev - 1)
           }
        }
    }

  return (
    <div className='my-6'>
        <nav aria-label="Page navigation">
            <ul className="inline-flex items-center -space-x-px">
                {
                    links?.map(link => {
                        return (
                            <li key={link.label}>
                                <button 
                                    onClick={()=>changePage(link.label)} 
                                    className={"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                                    
                                >
                                    {(link.label).replace('&laquo;', "<").replace("&raquo;", ">")}</button>
                            </li>
                        )
                    })
                }
                <li>
                </li>
            </ul>
        </nav>

    </div>

  )
}

export default Paginator