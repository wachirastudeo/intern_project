'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });



  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const { refresh, access } = await response.json()
        // เก็บ tokens ลง localStorage
        localStorage.setItem('accessToken', access) // สร้าง key ชื่อ accessToken และเก็บค่า access
        localStorage.setItem('refreshToken', refresh) // สร้าง key ชื่อ refreshToken และเก็บค่า refresh
        window.location.href = '/' // ไปหน้าหลัก
      } else {
        alert('ข้อมูลเข้าระบบไม่ถูกต้อง')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/login-bg.jpg"
          alt="Students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/dekend-logo.png"
            alt="intern Logo"
            width={150}
            height={40}
            priority
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="text-gray-500 hover:text-gray-700 flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              กลับสู่หน้าหลัก
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">เข้าสู่ระบบ</h1>
            <p className="text-gray-600 mt-2">ยินดีต้อนรับกลับ! กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  จดจำฉันไว้
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm text-sky-500 hover:text-sky-600">
                ลืมรหัสผ่าน?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition-colors mt-6"
            >
              เข้าสู่ระบบ
            </button>

            <div className="mt-6 flex flex-col gap-4">
              <button type="button" className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors">
                <Image src="/images/line.webp" alt="Line" width={24} height={24} />
                <span className="flex-1 text-left">ลงทะเบียนด้วย LINE</span>
              </button>
              <button type="button" className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors">
                <Image src="/images/google.webp" alt="Google" width={24} height={24} />
                <span className="flex-1 text-left">ลงทะเบียนด้วย GOOGLE</span>
              </button>
            </div>

            <p className="text-center text-gray-600 mt-6">
              ยังไม่มีบัญชี?{' '}
              <Link href="/register" className="text-sky-500 hover:text-sky-600">
                ลงทะเบียน
              </Link>
            </p>
            
          </form>
        </div>
      </div>
    </div>
  )
} 