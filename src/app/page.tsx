import type { NextPage } from 'next'
import { Intro, TodaysDeals } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <TodaysDeals />
        </main>
    )
}

export default MainPage
