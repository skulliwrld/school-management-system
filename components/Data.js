
import { GiTeacher } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdOutlineSubject } from "react-icons/md";
import { PiExamDuotone } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiRadarCrossSection } from "react-icons/gi";


export const dataset=[
    {
      path:"/schoolmgt/class",
      title:" classes"  
    },
    {
        path:"/schoolmgt/class/add-class",
        title:" Add classes"  
      },
      {
        path:"/schoolmgt/class/edit",
        title:" Edit classes"  
      }
]

export const studentset=[
    {
      path:"/schoolmgt/student",
      title:"Student"  
    },
    {
        path:"/schoolmgt/class/add-student",
        title:" Admit student"  
      },
      {
        path:`/schoolmgt/student/$/`,
        title:" Student profile "  
      },

      {
        path:`/schoolmgt/class/$/edit`,
        title:" Edit student profile "  
      },
      
]




export const secondData = [
    
    {
        title:"Teacher",
        path:"/schoolmgt/teacher",
        icons: <GiTeacher />,
        contain:[
            // {Pname:"add-teacher" , Name:"Add Teacher"}
        ]
    },



    {
        title:"Subject",
        path:"/schoolmgt/subject",
        icons: <MdOutlineSubject />,
        contain:[
            
        ]
    },

    {
        title:"Exam Section",
        path:"/schoolmgt/exams",
        icons: <PiExamDuotone />,
        contain:[
            
        ]

    },

    {
        title:"Parent",
        path:"/schoolmgt/parent",
        icons: <MdFamilyRestroom />,
        contain:[
            
        ]
    },

    {
        title:"Section",
        path:"/schoolmgt/section",
        icons: <GiRadarCrossSection />,
        contain:[
            
        ]
    },
]