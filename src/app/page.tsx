import type { NextPage } from 'next'
import { Intro, TrendingProducts } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <TrendingProducts />
        </main>
    )
}

export default MainPage
