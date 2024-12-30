"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function Login() {
  // สร้างตัวแปร state สำหรับการซ่อนแสดงรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // สร้างตัวแปรไว้ผูกกับฟอร์ม
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    first_name: '',
    last_name: '',
    tel: ''
  })

  // สร้างฟังก์ชันสำหรับการ submit ฟอร์ม
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(formData)
    
    // ส่งข้อมูลไปยัง API
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name,
                tel: formData.tel
            })
        })
        if (response.ok) {
            // ลงทะเบียนสำเร็จ ให้ redirect ไปยังหน้า login
            window.location.href = '/login'
        }
    } catch (error) {
        console.error('Registration failed:', error);
    }
  }

  return (
    <>
      <Head>
        <title>ลงทะเบียน -Intern Recruitment</title>
        <meta 
          name="description"
          content="ลงทะเบียนสำหรับนักศึกษา ผู้หางาน และบริษัทประกาศงาน"
        />
      </Head>
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
              src="/images/intern-logo.png"
              alt="intern Logo"
              width={150}
              height={40}
              priority
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 py-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 flex items-center gap-2 mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                กลับสู่หน้าหลัก
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">ลงทะเบียน</h1>
              <p className="text-gray-600 mt-2">
                สำหรับนักศึกษา ผู้หางาน และบริษัทประกาศงาน
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmed Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  ยืนยันรหัสผ่าน
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Fisrtname / Lastname */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium text-gray-700"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={(e) =>
                    setFormData({ ...formData, tel: e.target.value })
                  }
                  className="mt-1 block w-full px-4 py-3 bg-white border text-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition-colors mt-6"
              >
                ดำเนินการต่อ
              </button>

              {/* Social Login */}
              <div className="mt-6 flex flex-col gap-4">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/images/line.webp"
                    alt="Line"
                    width={24}
                    height={24}
                  />
                  <span className="flex-1 text-left">ลงทะเบียนด้วย LINE</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/images/google.webp"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                  <span className="flex-1 text-left">ลงทะเบียนด้วย GOOGLE</span>
                </button>
              </div>

              {/* Login */}
              <p className="text-center text-gray-600 mt-6">
                มีบัญชีอยู่แล้ว?{" "}
                <Link
                  href="/login"
                  className="text-sky-500 hover:text-sky-600"
                >
                  เข้าสู่ระบบ
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}