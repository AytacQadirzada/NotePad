import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    '@import': "url('https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')",
    
    '@global': {
        
        '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: "Roboto Flex, sans-serif",
      backgroundColor: '#EDE7F6',

    }},
})
const Layout =() => {
    return (
    <>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </>
  )
}

export default Layout