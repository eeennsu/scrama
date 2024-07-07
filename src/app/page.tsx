import type { NextPage } from 'next'
import { Intro, ShopDetailsInFashion } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            <Intro />
            <ShopDetailsInFashion />
        </main>
    )
}

export default MainPage

export const revalidate = 600
