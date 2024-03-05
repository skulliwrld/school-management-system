import React from 'react'
import Link from 'next/link'

const Linkk = ({items,title}) => {
  return (
    <div className='border flex flex-col py-10 px-5 items-center bg-slate-100 mx-1 w-full'>
        <h1 className="text-2xl text-center text-yellow-900 uppercase">
            Welcome to {title} Fieds For All the class in school
        </h1>
        <div>
            <table className="w-full bg-slate-100">
                <thead>
                    <tr>
                        <td className="text-xl text-center py-10 font-light border-none">
                            All Avaliable <i className="text-purple-600">Class And Their {title}</i>
                        </td>  
                    </tr>
                </thead>
                <tbody className="bg-slate-100">
                    <tr className="flex flex-row gap-10 items-center flex-wrap">
                        {items.map((data) =>(
                            <td key={data._id} className="py-3 px-3 border border-slate-300 hover:bg-purple-400 font-medium  bo shadow-lg hover:text-white hover:transition hover:delay-300 rounded-bl rounded-tr rounded-2xl  ">
                                <Link href={`/${title}/${data._id}`} alt="links to subject">{data.name}</Link>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Linkk