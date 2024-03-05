import React from 'react'
import ClassSectionForm from '@/components/common-components/ClassSectionForm'
import { AllTeachersFetch } from '@/lib/DataFech/All-data'
import { AllClassFetch } from '@/lib/DataFech/All-data'

const AddClassSection = async() => {
    const teachers = await AllTeachersFetch()
    const classes = await AllClassFetch()
  return (
    <section className="w-full bg-primary outline-none border">
        <ClassSectionForm Classes ={JSON.parse(JSON.stringify(classes))}Teacher={JSON.parse(JSON.stringify(teachers))} />
    </section>
  )
}

export default AddClassSection