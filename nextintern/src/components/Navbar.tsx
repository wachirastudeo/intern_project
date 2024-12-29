import Image from 'next/image';
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/dekend-logo.png" 
                alt="Deken Logo"
                width={120}   

                height={32} />

              </Link>
              {/* nav link  */}
              <div className='hidden md:flex item-center space-x-8'>
                <Link href="/find-internship" className=" text-gray-600 hover:text-sky-600">ค้นหาเด็กฝึกงาน</Link>
                <Link href="/articles" className=" text-gray-600 hover:text-sky-600">บทความ</Link>
                <Link href="/contact" className=" text-gray-600 hover:text-sky-600">ติดต่อเรา</Link>


              </div>
              <div className='flex items-center space-x-4'>
                <Link href="/login" className=" text-gray-600 hover:text-sky-600">เข้าสู่ระบบ</Link>
                <Link href="/register" className=" text-white bg-sky-600 px-4 py-2 rounded hover:bg-sky-700 ">ลงทะเบียน</Link>
              </div>

          </div>
        </div>
    </nav>
  )
}
export default Navbar