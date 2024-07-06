'use client'

import { type FC } from 'react'
import { Editor } from '@tiptap/react'
import { cn } from '@/shared/utils'

interface Props {
    editor: Editor | null
}

export const TiptapToolbar: FC<Props> = ({ editor }) => {
    if (!editor) return null

    const setLink = () => {
        if (!editor) return

        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()

            return
        }

        if (editor.state.selection.empty) {
            alert('링크를 삽입할 텍스트를 선택해주세요.')
        } else {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
    }

    const onImage = async (files: FileList | null) => {
        if (!editor) return

        if (!files || files.length === 0) {
            alert('이미지 파일을 찾을 수 없습니다.')
            return
        }

        const file = files[0] // 직접적인 접근 방식을 사용

        if (!file.type.startsWith('image/')) {
            alert('이미지 형식의 파일을 선택해주세요.')
            return
        }

        // TODO: fetch image upload api
    }

    const onImageWithPrompt = () => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (
        <section className='border gap-1.5 border-gray-100 py-1 px-3 rounded-t-xl flex w-[910px]'>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('bold') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                Bold
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('italic') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                Italic
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('strike') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleStrike().run()}
            >
                Strike
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('underline') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
                Underline
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('code') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleCode().run()}
            >
                Code
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('link') && 'bg-gray-100'
                )}
                onClick={setLink}
            >
                Link
            </button>
            <button
                onClick={onImageWithPrompt}
                className='z-10 relative w-fit rounded-md hover:bg-gray-100 px-3 py-1.5 opacity-70'
            >
                {/* <input
                    type='file'
                    accept='image/*'
                    className='absolute inset-0 rounded-md w-full h-full outline-none opacity-0 cursor-pointer'
                    //onChange={(e) => onImage(e?.target?.files)}
                /> */}

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 -960 960 960'
                >
                    <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z' />
                </svg>
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('bulletList') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                BL
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive('orderedList') && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                OL
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive({ textAlign: 'left' }) && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
            >
                Left
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive({ textAlign: 'center' }) && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
            >
                Center
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive({ textAlign: 'right' }) && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
            >
                Right
            </button>
            <button
                className={cn(
                    'w-fit rounded-md hover:bg-gray-100 px-3 py-1.5',
                    editor.isActive({ textAlign: 'justify' }) && 'bg-gray-100'
                )}
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            >
                Justify
            </button>
        </section>
    )
}
