import React from 'react'
import TopFied from '@/components/common-components/TopFied';


function Classes({searchParams}) {
  const q = searchParams?.q || ""
  const page =  searchParams?.page || 1
  return (
    <section className="w-full border-y-2 px-5">
       <TopFied title="Classes" path="/schoolmgt/class/add-class"/>
    </section>
  )
}

export default Classes