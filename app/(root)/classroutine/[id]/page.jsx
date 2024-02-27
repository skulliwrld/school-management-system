import ClassRoutineDataTable from '@/components/common-components/ClassRoutineDataTable'
import { FetchClassRoutineByClass } from '@/lib/actions/classroutine.action'
import TopFied from '@/components/common-components/TopFied'


const ClassRoutineData = async({params}) => {
    const {id} = params
    const Routine = await FetchClassRoutineByClass(id)
  return (
    <section>
        <TopFied title="classroutine" path="/classroutine/add-classroutine"/>
        <ClassRoutineDataTable Data={JSON.parse(JSON.stringify(Routine))}  />
    </section>
  )
}

export default ClassRoutineData