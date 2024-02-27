import React from 'react'
import ClassUpdateForm from '@/components/shared-component/classUpdateForm'
import { fetchIndividualClassData } from '@/lib/DataFech/All-data'
import { AllTeachersFetch } from '@/lib/DataFech/All-data'


async function ClassEdit({params}) {
    const {id} = params
    console.log(id)
    const CLASS = await fetchIndividualClassData(id)
    const teachers = await AllTeachersFetch()
  return (
    <ClassUpdateForm content={JSON.parse(JSON.stringify(CLASS))} Teacher={JSON.parse(JSON.stringify(teachers))} />
  )
}

export default ClassEdit