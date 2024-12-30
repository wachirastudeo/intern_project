import Footer from "@/components/frontend/shared/Footer";
import Navbar from "@/components/frontend/shared/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HappyIntern.com เว็บไซต์สำหรับนักศึกษาหาที่ฝึกงาน",
  description: "เว็บไซต์สำหรับฝึกงาน หางานนักศึกษา เพื่อนักศึกษาและบุคลากรที่มองหางานและตำแหน่งงานจากบริษัทต่างๆ ครบทุกสายงาน",
}
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar/>
        
        {children}
        <Footer/>
        </>
  );
}
