import React from 'react'
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { MenuData } from '../Data';
import MenuLinks from './menuLink';
import { secondData } from '../Data';

const SideBar = () => {
  return (
    <section className="">
        <div className="text-black border-b-2 border-b-black flex justify-between items-center pb-3 ">
        <Image src="/assets/images/school.png" width={50} height={30} />
        <FaBars size={30} className="text-white"/>
    </div>

    <ul className="mt-2 overflow-auto">
        {secondData.map(data =>(
            <li key={data.title}>
              <MenuLinks items={data} key={data.title} />  
            </li>
        ))}

        {MenuData.map((cat) =>(
          <li  className='text-lg font-semibold 'key={cat.title}>{cat.title}
          <span>

            {cat.list.map((data) =>(
              <MenuLinks items={data} key={data.title} />
            ))}
          </span>
          </li> 
      ))}
      </ul>

    </section>
    
    
  )
}

export default SideBar