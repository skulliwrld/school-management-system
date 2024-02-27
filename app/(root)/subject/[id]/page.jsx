import TopFied from "@/components/common-components/TopFied";
import SubjectTable from "@/components/common-components/ULComponent";
import Pagination from "@/components/shared-component/Pagination";
import { FetchSubjectByClass } from "@/lib/actions/subject.action";
const SubjectPage = async ({params, searchParams}) =>{

    const q = searchParams?.q || ""
    const page =  searchParams?.page || 1

    const {id} =params;
    const {subjects,count} = await FetchSubjectByClass(id,q,page)
    
    return (
        <>
            <div>
                <TopFied title={`Subjects In Class ${id}`} path={"/subject/add-subject"}/>  

                <SubjectTable sub={JSON.parse(JSON.stringify(subjects))} />

                <Pagination count={count}/>
            </div>
        </>
    )
}


export default SubjectPage;