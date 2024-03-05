import { AllTeachersFetch } from '@/lib/DataFech/All-data';
import ClassForm from "@/components/common-components/ClassForm";
import { addClass } from '@/lib/actions/class.action.model'
import StudentForm from '@/components/common-components/StudentForm';



const AddClasses = async () => {

    const teachers = await AllTeachersFetch()
    console.log(typeof(teachers))
    
  return (
    <section className="w-full bg-primary outline-none border">
        <StudentForm handleAdd={addClass} />
        </section>
  )
}

export default AddClasses