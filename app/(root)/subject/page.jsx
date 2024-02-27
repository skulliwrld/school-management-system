import React from 'react'
import TopFied from '@/components/common-components/TopFied';
import { AllClassFetch } from '@/lib/DataFech/All-data';
import Linkk from '@/components/Linkk';



async function Subject() {
  const classess = await AllClassFetch()

  return (
    <>
    <section className="w-full border-y-2 px-5">
        <TopFied title="Subject" path="/subject/add-subject"/>
    </section>
    <Linkk items={JSON.parse(JSON.stringify(classess))} title="subject"/>
    </>
  )
}

export default Subject