import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loading from "../components/Loading";


const HomeLayout = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isPageLoading = navigation.state === 'loading';

  return (
   <main className="home-layout">
   <Navbar/>

  <section className="outlet-container">

   {isPageLoading? <Loading/> :  <Outlet/>}

  </section>
  
   </main>
  )
}

export default HomeLayout
