import React from 'react'
import { AllClassFetch } from '@/lib/DataFech/All-data'
import Inner from './Inner'

const NavSpecial = async ({tab3, handleTabChange3}) => {
    const classess = await AllClassFetch()
  return (
    <div>
      <Inner dataset={JSON.parse(JSON.stringify(classess))} tab3={tab3} handleTabChange3={handleTabChange3} />
    </div>
  )
}

export default NavSpecial