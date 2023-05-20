import React from 'react'
import { Header, SideBar } from "@/components";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

const Layout = ({children}) => {
  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(true)

  return (
    <div className="max-h-[100vh] w-full">
      <Header theme={theme} setTheme={setTheme} toggle={toggle} setToggle={setToggle} />

      <div className="flex w-full md:pr-6 h-full">
        <SideBar theme={theme} setTheme={setTheme} toggle={toggle} setToggle={setToggle} />

        <main className={`bg-[#FBFBFB] dark:bg-[#141414] md:rounded-2xl w-full h-[90vh] flex flex-col p-6`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout