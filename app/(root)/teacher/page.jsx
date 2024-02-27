import React from 'react'
import TopFied from '@/components/common-components/TopFied';
import TeacherTable from '@/components/common-components/TeacherTable';
import { FetchTeachers } from '@/lib/actions/teacher.actions';
import Pagination from "@/components/shared-component/Pagination";


async function Teacher({searchParams}) {
  const q = searchParams?.q || ""
  const page =  searchParams?.page || 1
  const {Teachers, count} = await FetchTeachers(q,page)
  return (
    <section className="w-full border-y-2 px-5">
        <TopFied title="Teacher" path="/teacher/add-teacher"/>
        <TeacherTable Data={JSON.parse(JSON.stringify(Teachers))} />
        <Pagination count={count} />
    </section>
  )
}

export default Teacher