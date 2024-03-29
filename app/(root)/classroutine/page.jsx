import Linkk from '@/components/Linkk'
import UserComponent from '@/components/common-components/userComponent'
import { AllClassFetch } from '@/lib/DataFech/All-data'


const ClassRoutine = async() => {
  const classess = await AllClassFetch()
  return (
    <section>
       <UserComponent title="Class Routine" path={"/classroutine/add-classsroutine"} />
       <Linkk title={"classroutine"} items={JSON.parse(JSON.stringify(classess))}/>
    </section>
  )
}

export default ClassRoutine