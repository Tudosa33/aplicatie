import React, {useState} from 'react'
import Footer from '../components/Footer/footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home
