import { AllTeachersFetch } from '@/lib/DataFech/All-data';
import ClassForm from "@/components/common-components/ClassForm";
import { addClass } from '@/lib/actions/class.action.model'



const AddClasses = async () => {

    const teachers = await AllTeachersFetch()
    console.log(typeof(teachers))
    
  return (
    <section className="w-full bg-primary outline-none border">
        <ClassForm handleAdd={addClass} Teacher={JSON.parse(JSON.stringify(teachers))} />
        </section>
  )
}

export default AddClasses