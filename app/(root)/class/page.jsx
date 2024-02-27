import React from 'react'
import TopFied from '@/components/common-components/TopFied';
import Pagination from '@/components/shared-component/Pagination';
import { FetchClasses } from '@/lib/DataFech/All-data';
import ClassTable from '@/components/common-components/ClassTable';


async function Classes({searchParams}) {
  const q = searchParams?.q || ""
  const page =  searchParams?.page || 1

  const {classes,count} = await FetchClasses(q,page)
  
  return ( 
    <section className="w-full border-y-2 px-5">
       <TopFied title="Classes" path="/class/add-class"/>

       <ClassTable Data={JSON.parse(JSON.stringify(classes))}/>

       <Pagination count={count} />
      
    </section>
  )
}

export default Classes