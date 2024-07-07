// 'use client'

// import { forwardRef, useImperativeHandle } from 'react'
// import { EditorContent, useEditor } from '@tiptap/react'
// import { TiptapToolbar } from './tiptap-toolbar'
// import { cn } from '@/shared/utils'
// import {
//     Image,
//     ImageResize,
//     Link,
//     Placeholder,
//     StarterKit,
//     TextAlign,
//     Strike,
//     Underline,
// } from '@/shared/components/tiptap'

// interface Props {
//     placeholder?: string
//     className?: string
// }

// export interface EditorHandles {
//     getHtml: () => string
// }

// export const TiptapEditor = forwardRef<EditorHandles, Props>(({ className, placeholder }, ref) => {
//     const editor = useEditor({
//         editorProps: {
//             attributes: {
//                 class: cn(
//                     'outline-none p-3 border border-gray-100 bg-white rounded-b-xl h-full overflow-y-auto w-[840px] prose prose-p:m-0 prose-headings:m-0 outline-none max-w-none [&_ol]:list-decimal [&_ul]:list-disc',
//                     className
//                 ),
//             },
//         },
//         extensions: [
//             StarterKit.configure({
//                 bulletList: {
//                     keepMarks: true, // 다른 스타일들 유지시키며 리스트 만들기
//                     keepAttributes: false, // 사용자 정의 스타일이나 클래스 등이 적용되지 않고 기본 값으로 재설정됨
//                     HTMLAttributes: {
//                         class: 'marker:text-black',
//                     },
//                 },
//                 orderedList: {
//                     keepMarks: true,
//                     keepAttributes: false,
//                     HTMLAttributes: {
//                         class: 'marker:text-black',
//                     },
//                 },
//             }),
//             Strike,
//             Underline,
//             Link.configure({
//                 HTMLAttributes: {
//                     class: 'cursor-pointer',
//                 },
//             }),
//             TextAlign.configure({
//                 types: ['paragraph'],
//             }),
//             Image.configure({
//                 allowBase64: true,
//             }),
//             ImageResize.configure(),
//             Placeholder.configure({
//                 placeholder,
//             }),
//         ],
//     })

//     useImperativeHandle(ref, () => ({
//         getHtml: () => {
//             return editor?.getHTML() || ''
//         },
//     }))

//     return (
//         <section className='flex flex-col'>
//             <TiptapToolbar editor={editor} />
//             <EditorContent editor={editor} />
//         </section>
//     )
// })

// TiptapEditor.displayName = 'TiptapEditor'
