import React from 'react'
import { FetchSectionByClass } from '@/lib/actions/classsection.action'
import TopFied from '@/components/common-components/TopFied'
import SectionTable from '@/components/shared-component/sectionTable'

export const ClassSectionData = async ({params}) => {
    const {id} = params
    const SESSIONS = await FetchSectionByClass(id);
    console.log(SESSIONS)
  return (
    <div>
        <TopFied title={"session in this class"} path={"/class/manage-section/add-section"}/>
        <SectionTable Data={JSON.parse(JSON.stringify(SESSIONS))}/>
    </div>
  )
}

export default ClassSectionData