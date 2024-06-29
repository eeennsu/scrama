import type { NextPage } from 'next'
import { Intro, TodaysDealsProducts } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <TodaysDealsProducts />
        </main>
    )
}

export default MainPage

export const revalidate = 7200
