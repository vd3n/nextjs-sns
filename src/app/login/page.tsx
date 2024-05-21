'use client'

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div className={'m-20'}>
      <h1 className={'text-[17px] font-[600]'}>👋👋👋</h1>
      <form className={'flex flex-col'}>
        <input
          name={'id'}
          type={'text'}
          className={
            'mt-[10px] w-[300px] h-[30px] border-2 border-gray-300 rounded text-[12px]'
          }
          placeholder={'아이디를 입력해주세요.'}
        ></input>
        <input
          name={'password'}
          type={'password'}
          className={
            'mt-[5px] w-[300px] h-[30px] border-2 border-gray-300 rounded text-[12px]'
          }
          placeholder={'비밀번호를 입력해주세요'}
        ></input>
        <button
          type={'button'}
          className={
            'mt-[10px] bg-gray-200 w-[300px] h-[30px] text-[13px] font-[500] rounded'
          }
          onClick={() => alert('기능 미구현')}
        >
          로그인
        </button>
        <hr className={'mt-[15px] w-[300px] border-gray-300'} />
        <button
          type={'button'}
          className={
            'mt-[15px] bg-green-500 w-[300px] h-[30px] text-[13px] font-[500] rounded'
          }
          onClick={() => signIn('naver', { redirect: true, callbackUrl: '/' })}
        >
          Sign in with Naver
        </button>
        <button
          type={'button'}
          className={
            'mt-[10px] bg-yellow-300 w-[300px] h-[30px] text-[13px] font-[500] rounded'
          }
          onClick={() => signIn('kakao', { redirect: true, callbackUrl: '/' })}
        >
          Sign in with Kakao
        </button>
      </form>
    </div>
  )
}
