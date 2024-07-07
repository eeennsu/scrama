import type { NextPage } from 'next'
import { Intro, DisplayProducts } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <DisplayProducts />
        </main>
    )
}

export default MainPage

export const revalidate = 600
