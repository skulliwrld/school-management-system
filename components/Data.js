
import { GiTeacher } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";
import { MdOutlineSubject } from "react-icons/md";
import { PiExamDuotone } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiRadarCrossSection } from "react-icons/gi";

export const dataset=[
    {
      path:"/class",
      title:" classes"  
    },
    {
        path:"/class/add-class",
        title:" Add classes"  
      },
      {
        path:"/class/edit",
        title:" Edit classes"  
      },
      {
        path:"/class/manage-section",
        title:" Manage section"  
      }
]




export const studentset=[
    {
      path:"/student",
      title:"Student"  
    },
    {
        path:"/class/add-student",
        title:" Admit student"  
      },
      {
        path:`/academic section/`,
        title:" student/section "  
      },

      // {
      //   path:`/class/$/edit`,
      //   title:" Edit student profile "  
      // },
      
]




export const secondData = [
    
    {
        title:"Teacher",
        path:"/teacher",
        icons: <GiTeacher />,
        contain:[
            // {Pname:"add-teacher" , Name:"Add Teacher"}
        ]
    },



    {
        title:"Subject",
        path:"/subject",
        icons: <MdOutlineSubject />,
        contain:[
            
        ]
    },

    {
      title:"Class Routine",
      path:"/classroutine",
      icons: <MdFamilyRestroom />,
      contain:[
          
      ]
  },

    {
        title:"Exam Section",
        path:"/exams",
        icons: <PiExamDuotone />,
        contain:[
            
        ]

    },

    {
        title:"Parent",
        path:"/parent",
        icons: <MdFamilyRestroom />,
        contain:[
            
        ]
    },

    {
        title:"Section",
        path:"/section",
        icons: <GiRadarCrossSection />,
        contain:[
            
        ]
    },
]