import { useGlobalContext } from "../Context";
import CssBtn from "../components/CssBtn";

const Css = () => {

  const {cssFinalData} = useGlobalContext();
  console.log(cssFinalData);
  return (
    <>
    <h1>css</h1>
    <article className="btn-container">
    <CssBtn/>
  </article>
    
    </>
  )
}

export default Css
