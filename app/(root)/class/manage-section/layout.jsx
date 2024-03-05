import React from 'react'
import ClassSection from '@/components/common-components/sectionFied'

const layout = ({children}) => {
  return (
    <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 py-10">
            <ClassSection />
        </div>
        <div className="md:col-span-8 py-5 h-full">
            {children}
        </div>
    </div>
  )
}

export default layout