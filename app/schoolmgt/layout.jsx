import NavBar from "@/components/shared-component/NavBar";
import SideBar from "@/components/shared-component/SideBar";
import Footer from "@/components/shared-component/Footer";

function RootLayout({children}) {
    return (
      <div className='md:grid grid-cols-12 bg-primary text-black min-h-full'>
          <div className=" md:col-span-3 p-5 bg-purple-500 ">
            <SideBar />  
          </div>
          <div className='md:col-span-9'>
              <NavBar />
              {children}
              <Footer />
          </div>
      </div>
    )
  }
  
  export default RootLayout
  