import type { NextPage } from 'next'
import { Intro, TodayDeals } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <TodayDeals />
        </main>
    )
}

export default MainPage
