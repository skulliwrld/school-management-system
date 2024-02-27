import React from 'react'
import '@/components/common-components/style.css'

function ClassRoutineDataTable({Data}) {
  return (
    <section className="text-black bg-gradient-to-r from-yellow-400 to-pink-600  py-4 px-5 w-full h-auto">
        <table className="w-full px-2 mt-3  border">
            <thead className="border py-3">
                <tr className="text-md font-medium">   
                    <td>Day</td>
                    <td>Subjects</td>
                    <td>Desc</td>
                    <td>Lesson Start Time</td>
                    <td>Lesson End Time</td>

                </tr>
            </thead>
            <tbody>
                {Data.map((data) =>(
                    <tr key={data._id} className="items-center text-sm text-[#1f0c07b9]">
                        <td>{data.Day.name}</td> 
                        <td>{data.Subject.Name}</td>
                        <td>{data.Subject.description}</td>
                        <td>{data.startingTime}{data.startPeriod}</td>
                        <td>{data.endingTime}{data.endPeriod}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ClassRoutineDataTable