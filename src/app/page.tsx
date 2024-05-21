'use client'

import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()

  if (!session?.user) {
    console.log(session)

    return (
      <main className="flex flex-col items-center justify-between p-24">
        <p>Hello, Guest!</p>
        <Link href={'/login'}>
          <button
            type={'button'}
            className={
              'mt-[10px] bg-gray-200 w-[100px] h-[25px] text-[13px] font-[500] rounded'
            }
          >
            Sign In
          </button>
        </Link>
      </main>
    )
  }

  console.log(session)

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={'mt-[20px] flex flex-row gap-[30px]'}>
        <div>
          <Image
            src={session.user?.image || ''}
            alt={''}
            width={100}
            height={100}
            className={'rounded-full'}
          />
        </div>
        <div className={'flex flex-col items-center justify-center'}>
          <p>Welcome, {session.user?.name} 👍</p>
          <p>{session.user?.email}</p>
          <button
            type={'button'}
            className={
              'mt-[10px] bg-gray-200 w-[100px] h-[25px] text-[13px] font-[500] rounded'
            }
            onClick={() => signOut()}
          >
            Sign Out
            {/*<span className={'text-[8px]'}>Sign Out</span>*/}
          </button>
        </div>
      </div>
    </main>
  )
}
