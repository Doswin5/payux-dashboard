import React from 'react'
import Image from 'next/legacy/image'
import { analyticsIcon, developerIcon, documentationIcon, fraudIcon, homeIcon, integrationIcon, logoutIcon, paymentIcon } from '@/assets'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { useRouter } from 'next/router'

const SideBar = ({ theme, setTheme, toggle, setToggle }) => {

  const router = useRouter()

  return (
    <>
    {
      toggle && (
          <div className='sticky left-0  w-[300px] py-6 px-4 text-base font-normal dark:text-gray-100 text-gray-600 hidden md:flex flex-col gap-4'>
          <div className="flex flex-col gap-4">
            {
              sidebarLinks.map(sidebarLink => (
                <Link key={sidebarLink.id} href={sidebarLink.linkRoute} className={`${router.pathname === sidebarLink.linkRoute && 'bg-[#eceaff] dark:bg-[#13131a] text-[#4A46FF]'} flex items-center gap-4 py-2 px-4 rounded-lg bg-transparent hover:bg-[#F7F6FF] dark:hover:bg-[#13131A]`}>
                  <Image
                    src={sidebarLink.icon} 
                    alt='icon'
                  />
                  <span>{sidebarLink.linkName}</span>
                </Link>
              ))
            }
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 py-2 px-4 rounded-lg bg-transparent">
              <span className="font-medium tracking-wider">
                SUPPORT
              </span>
            </div>
              <Link href='/documentation' className={`${router.pathname === '/documentation' && 'bg-[#F7F6FF] dark:bg-[#13131a] text-[#4A46FF]'} flex items-center gap-4 py-2 px-4 rounded-lg bg-transparent hover:bg-[#F7F6FF] dark:hover:bg-[#13131A]`}>
              <Image
                src={documentationIcon} 
                alt='icon'
              />
              <span>Documentation</span>
            </Link>
              <Link href='/logout' className={`${router.pathname === '/logout' && 'bg-[#F7F6FF] dark:bg-[#13131a] text-[#4A46FF]'} flex items-center gap-4 py-2 px-4 rounded-lg bg-transparent hover:bg-[#F7F6FF] dark:hover:bg-[#13131A]`}>
              <Image
                src={logoutIcon} 
                alt='icon'
              />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      )
    }
    </>
  )
}

export default SideBar