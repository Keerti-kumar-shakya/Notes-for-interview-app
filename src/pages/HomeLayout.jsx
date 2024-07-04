import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loading from "../components/Loading";


const HomeLayout = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isPageLoading = navigation.state === 'loading';

  return (
   <>
   <Navbar/>

   {isPageLoading? <Loading/> :  <Outlet/>}
  
   </>
  )
}

export default HomeLayout
