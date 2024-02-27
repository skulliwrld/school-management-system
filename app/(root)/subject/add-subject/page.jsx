import { AllClassFetch } from '@/lib/DataFech/All-data';
import SubjectForm from '@/components/common-components/SubjectForm';
import { AllTeachersFetch } from '@/lib/DataFech/All-data';



const AddSubject = async () => {

    const classess = await AllClassFetch()
    const Teachers = await AllTeachersFetch()

    
    
  return (
    <section className="w-full bg-primary outline-none border">
        <SubjectForm Teachers={JSON.parse(JSON.stringify(Teachers))} classes={JSON.parse(JSON.stringify(classess))} />
        </section>
  )
}

export default AddSubject