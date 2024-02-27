import React from 'react'
import { SecondLink } from './menuLink'
import Link from 'next/link'

const Inner = (tab3,dataset ,handleTabChange3) => {
  return (
    <div>
         <div className="pt-3 w-full text-black pl-1 my-3">
            <div className={`flex flex-col justify-start items-start bg-inherit  font-normal space-x-3 text:sm rounded-full rounded-l-none ${pathName === `/schoolmgt/subject/deeje/subjectfield` && ' rounded-full rounded-l-none '}`}>
                <div className="flex gap-3" onClick={handleTabChange3}>
                    <i className="text-sm list-none list-item "><PiStudentFill className='' /></i>
                    <span className="text-xs flex gap-3 items-center">Subject {tab2?<MdKeyboardArrowUp/>:< IoIosArrowDown/>} </span>
                    
                </div> 
                <div className="items-start list-none w-[278px] bg-none">
                    {tab3 && dataset.map((data =>(
                        <Link href={`schoolmgt/subject/${data._id}`} className={`flex font-normal space-x-3 text:sm py-3 items-center hover:bg-secondary-200 rounded-full rounded-l-none ${pathName === `schoolmgt/subject/${data._id}`&& 'bg-purple-600 rounded-full rounded-l-none border text-white '}`}>class: {data.name}</Link>
                    )))}
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Inner