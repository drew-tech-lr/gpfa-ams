'use client'
import React, { useState } from 'react'
import style from '../UserForm.module.css'
import Navbar from '@/app/components/navbar/Navbar'
import Steps from '../Steps'
import Overview from './Overview'

const overviewPage = () => {
    const [activeSection, setActiveSection] = useState("overview")
  return (
   <>
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[26rem_1fr]">
        <aside className="w-full lg:h-screen z-10 sticky top-0 ">
          <Navbar>
            <Steps active={activeSection} />
          </Navbar>
        </aside>

        {/* Main Content */}
        <main
          className={` ${style.infoPage} w-full p-10 lg:px-15 lg:h-screen overflow-y-scroll`}
        >
         <Overview onActive={() => setActiveSection("overview")} />
        </main>
      </div>
   </>
  )
}

export default overviewPage