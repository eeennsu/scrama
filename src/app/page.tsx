import type { NextPage } from 'next'
import { Intro, TodaysDealsProducts } from '@/widgets/main'

const MainPage: NextPage = () => {
    return (
        <main className='flex flex-col flex-1'>
            {/* <Intro /> */}
            hello!
            {/* TODO: Today deals 는 페이지 구조가 매번 자주 바뀜. 다른 컨텐츠를 스크래핑하는게 좋을듯 */}
            {/* <TodaysDealsProducts /> */}
        </main>
    )
}

export default MainPage

export const revalidate = 7200
