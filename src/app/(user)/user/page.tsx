'use client'

import type { NextPage } from 'next'
// import { getLoggedInUser } from '@/shared/lib/appwrite/api/user.api'
// import { PATH_KEYS } from '@/shared/route'
// import { redirect } from 'next/navigation'
// import { TiptapEditor, EditorHandles } from '@/shared/components/tiptap'
import { useRef, useState } from 'react'
import { Button } from '@/shared/components/ui/button'

const UserPage: NextPage = () => {
    // TODO: 이 주석 나중에 푸샘
    // const user = await getLoggedInUser()

    // if (!user) {
    //     redirect(PATH_KEYS.signIn())
    // }

    //  const ref = useRef<EditorHandles>(null)
    const [html, setHtml] = useState<string>('')

    return (
        <main className='flex flex-col gap-4'>
            <h1>User Profile Page</h1>
            {/* <TiptapEditor
                ref={ref}
                className='h-[540px] w-[910px]'
            /> */}
            {/* <Button
                className='w-fit'
                onClick={() => setHtml(ref.current?.getHtml() || '')}
            >
                getHtml
            </Button> */}
            <article
                className='mt-10 tiptap-editor-content'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </main>
    )
}

export default UserPage
