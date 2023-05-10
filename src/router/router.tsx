import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import { HomePage } from '../pages/home-page/home-page'
import { ItemPage } from '../pages/item-page/item-page'

//Components
import { Header } from '../components/header/header'

export const Router: FC = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/items/:id' element={<ItemPage />} />
            </Routes>
        </>
    )
}