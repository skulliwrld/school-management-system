import { 
    MdAnalytics, 
    MdAttachMoney,
    MdDashboard, 
    MdHelpCenter, 
    MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle, 
    MdWork 
} from "react-icons/md"


export const  MenuData = [

    {
        title:'class',
        icons: <MdDashboard />,
        list:[
            {
                title:"manage class",
                path:"schoolmgt/class",
                icons: <MdDashboard />
                
            },
            {
                title:"manage section",
                path:"/class/section",
                icons: <MdDashboard />
            },
        ]
    },

    {
        title:'subject',
        icons: <MdDashboard />,
        list:[
            {
                title:"class Class-1",
                path:"/class/",
                icons: <MdDashboard />
              
            },
            {
                title:"class Class-2",
                path:"/class/",
                icons: <MdDashboard />
                
            },

            {
                title:"class Class-3",
                path:"/class/",
                icons: <MdDashboard />
                
            },

            {
                title:"class Class-4",
                path:"/class/",
                icons: <MdDashboard />
                
            },
        ]
    },

    {
        title:'student section',
        icons: <MdDashboard />,
        list:[
            {
                title:"Academic section",
                path:"/class",
                icons: <MdDashboard />
               
            },
            {
                title:"Admit student",
                path:"/class/section",
            },

            {
                title:"Student information",
                path:"/class/section",
            },
        ]
    },

    {
        title:'Exam section',
        icons: <MdDashboard />,
        list:[
            {
                title:"Exam list",
                path:"/class",
                icons: <MdDashboard />
               
            },
            {
                title:"Exam grade",
                path:"/class/section",
                icons: <MdDashboard />
            },

            {
                title:"Manage Mark",
                path:"/class/section",
                icons: <MdDashboard />
            },
        ]
    },


]



export const secondData = [
    {
        title:"Dashboard",
        path:"/schoolmgt",
        icons: <MdDashboard />
    },
    
    {
        title:"Teacher",
        path:"/schoolmgt/teacher",
        icons: <MdDashboard />
    },

    {
        title:"Class routine ",
        path:"/",
        icons: <MdDashboard />
    },

    {
        title:"Parent",
        path:"/",
        icons: <MdDashboard />
    },
]