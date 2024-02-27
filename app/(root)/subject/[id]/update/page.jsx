import React from 'react'
import { fetchIndividuaLSubjectData } from '@/lib/actions/subject.action'
import { AllTeachersFetch } from '@/lib/DataFech/All-data'
import { AllClassFetch } from '@/lib/DataFech/All-data'
import SubjectUpdateForm from '@/components/shared-component/subjectUpdateForm'


async function SubjectEdit({params}) {
    const {id} = params
    console.log(id)
    const SUBJECT = await fetchIndividuaLSubjectData(id)
    const teachers = await AllTeachersFetch()
    const classes= await AllClassFetch()
  return (
    <SubjectUpdateForm content={JSON.parse(JSON.stringify(SUBJECT))} Teacher={JSON.parse(JSON.stringify(teachers))} classes={JSON.parse(JSON.stringify(classes))} />
  )
}

export default SubjectEdit