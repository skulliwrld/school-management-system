"use client"
import React from 'react'
import { studentset } from '../Data';
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { SecondLink } from './menuLink';
import MenuLinks from './menuLink';
import { secondData } from '../Data';
import { useState } from 'react';
import { FaSchoolFlag } from "react-icons/fa6";
import { usePathname } from 'next/navigation'
import { dataset } from '../Data';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { VscDashboard } from "react-icons/vsc";
import { PiStudentFill } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";
import NavSpecial from './NavSpecial';


const SideBar = () => {
    const [tab, setTab]= useState(false)
    const [tab2, setTab2]= useState(false)
    const [tab3, setTab3]= useState(false)

    const handleTabChange = () =>{
        setTab(!tab)
    }

    const handleTabChange2 = () =>{
        setTab2(!tab2)
    }

    const handleTabChange3 = () =>{
        setTab3(!tab3)
    }
    
    const pathName = usePathname()
  return (
    <section className="h-full">
        <div className="text-black border-b-2 border-b-black flex justify-between items-center pb-3 ">
        <Image src="/assets/images/school.png" width={50} height={30} />
        <FaBars size={30} className="text-white"/>
        </div>

        <div className="pt-5 w-full text-black DASHBOARD ">
        <Link href="/schoolmgt" className={`flex font-normal space-x-3 text:sm py-3 items-center hover:bg-secondary-200 rounded-full rounded-l-none ${pathName === "/schoolmgt" && 'bg-purple-600 rounded-full rounded-l-none text-white '}`}>
            <div className='flex gap-3 pl-1'>
                <i className="text-sm items-center flex gap-2"><VscDashboard/></i>
                <span className="text-xs flex gap-3 items-center">Dashboard</span>
            </div>
            

        </Link>
        </div>
        {/* DROP DOWN NAVS */}
        <div className="pt-3 w-full text-black pl-1  my-1">
            <div className={`flex flex-col justify-start items-start bg-inherit  font-normal space-x-3 text:sm rounded-full rounded-l-none ${pathName === "/class" && ' rounded-full rounded-l-none '}`}>
                <div className="flex gap-3" onClick={handleTabChange}>
                    <i className="text-sm list-none list-item "><FaSchoolFlag className='' /></i>
                    <span className="text-xs flex gap-3 items-center">Class {tab?<MdKeyboardArrowUp/>:< IoIosArrowDown/>}</span>
                    
                </div> 
                <div className="items-start list-none w-[278px] bg-none">
                    {tab && dataset.map((awe) =>(
                    <SecondLink items={awe} />
                ))}
                </div> 
            </div>
        </div>

        <div className="pt-3 w-full text-black pl-1 my-3">
            <div className={`flex flex-col justify-start items-start bg-inherit  font-normal space-x-3 text:sm rounded-full rounded-l-none ${pathName === "/student" && ' rounded-full rounded-l-none'}`}>
                <div className="flex gap-3" onClick={handleTabChange2}>
                    <i className="text-sm list-none list-item "><PiStudentFill className='' /></i>
                    <span className="text-xs flex gap-3 items-center">Student {tab2?<MdKeyboardArrowUp/>:< IoIosArrowDown/>} </span>
                    
                </div> 
                <div className="items-start list-none w-[278px] bg-none">
                    {tab2 && studentset.map((awe) =>(
                    <SecondLink items={awe} />
                ))}
                </div> 
            </div>
        </div>
{/* 
        <NavSpecial tab3={tab3} handleTabChange3={handleTabChange3}/> */}


        {/*MAPPED NAVS  */}
        <div className="mt-2 overflow-auto">
        {secondData.map((data) =>{

            const hasBar = data.contain.length > 0
            return(
                <ul key={data.title}>

                <li key={data.title} onClick={hasBar ? handleTabChange: null}>
                    <MenuLinks items={data} />
                </li>
                {hasBar && tab && data.contain.map((view)=>(
                    <li key={view.Name}></li>
                ))
                    
                }
                 </ul>
            )
        })}
        
        </div>
        

    </section>
    
    
  )
}

export default SideBar