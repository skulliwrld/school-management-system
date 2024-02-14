"use client"
import { usePathname,useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


const Pagination = ({count}) =>{
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const pathName= usePathname();


  const page = searchParams.get("page") || 1

  const params = new URLSearchParams(searchParams)

  const ITEMS_PAR_PAGE = 5

  const hasPrev =ITEMS_PAR_PAGE * (parseInt(page) -1) > 0;
  const hasNext =ITEMS_PAR_PAGE * (parseInt(page) -1) + ITEMS_PAR_PAGE < count;

  const handleChangePage = (type) =>{
    type ==="prev" ? params.set("page", parseInt(page) -1) : params.set("page", parseInt(page) + 1)
    replace(`${pathName}?${params}`)

    console.log(count)
  }


    return (
      <>
      <div className="flex justify-between mx-16 my-2">
        <button className={ !hasPrev?"px-3 py-2  bg-red-800 text-white rounded-md" : "px-3 py-2 rounded-md  bg-teal-600 text-slate-100" } disabled={!hasPrev} onClick={() =>handleChangePage("prev")}>previous</button>
        <button  className={!hasNext?"px-3 py-2  bg-red-800 text-white rounded-md" : "px-3 py-2 rounded-md   bg-teal-600 text-slate-100" } disabled={!hasNext} onClick={() =>handleChangePage("next")}>Next</button>
     </div>
    </> 
    )
  }
 

export default Pagination