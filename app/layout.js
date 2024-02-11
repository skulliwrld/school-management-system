import { Poppins } from "next/font/google";
import '@/components/globals.css'

const popping = Poppins({ 
  subsets: ['latin'],
  weight:["400","500","600","700"],
  variable:"--font-poppins",
 })

export const metadata = {
  title: "School Management System",
  description: "Experience an Amazing school management system with all tools and data required to manage a school",
  icons:{
    icons:"/public/assets/images/school.png"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popping.className}>{children}</body>
    </html>
  );
}
