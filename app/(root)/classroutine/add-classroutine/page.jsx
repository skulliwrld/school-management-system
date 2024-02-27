import ClassRoutineForm from "@/components/common-components/classRoutineForm";
import { AllClassFetch, AllDayFetch } from "@/lib/DataFech/All-data";
import { AllSubjectFetch } from "@/lib/DataFech/All-data";
import { FetchSubjectByClassAlone } from "@/lib/actions/subject.action";



const AddClassRoutine = async () => {
  const Subjects = await AllSubjectFetch()
  const CLASS = await AllClassFetch()
  const days = await AllDayFetch()
  console.log(days)
  // const subjects = await FetchSubjectByClassAlone(CLASS._id)

  return (
    <section className="w-full bg-primary outline-none border">
        <ClassRoutineForm Class={JSON.parse(JSON.stringify(CLASS))}  Subject={JSON.parse(JSON.stringify(Subjects))} Days={JSON.parse(JSON.stringify(days))}  />
        </section>
  )
}

export default AddClassRoutine

