import { useGlobalContext } from "../Context";
import HtmlBtn from "../components/HtmlBtn"


const Html = () => {

  const {htmlFinalData} = useGlobalContext();
  console.log(htmlFinalData);
  return (
    <>
    <h1>Html</h1>
  <article className="btn-container">
    <HtmlBtn/>
  </article>
  
    </>

  )
}

export default Html
