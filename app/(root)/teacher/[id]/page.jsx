import React from 'react'
import { fetchIndividualTeacherData } from '@/lib/actions/teacher.actions'
import TeacherForm from '@/components/shared-component/TeacherFieldForm'
import { TeacherUpdate } from '@/lib/actions/teacher.actions'


async function TeacherEdit({params}) {
    const {id} = params
    const Teachers = await fetchIndividualTeacherData(id)
  return (
    <TeacherForm type="edit" handleFuction={TeacherUpdate} content={JSON.parse(JSON.stringify(Teachers))} />
  )
}

export default TeacherEdit