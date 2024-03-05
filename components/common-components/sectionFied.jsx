import React from 'react'
import { AllClassFetch } from '@/lib/DataFech/All-data'
import Linkk from '@/components/Linkk'


const ClassSection = async () => {
  const classess = await AllClassFetch()
  return (
    <section>
        <div>
          <div>
                <Linkk items={JSON.parse(JSON.stringify(classess))} title="class/manage-section" />
          </div>
        </div>
    </section>
  )
}

export default ClassSection