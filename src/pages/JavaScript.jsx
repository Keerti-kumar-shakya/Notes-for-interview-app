import { useGlobalContext } from "../Context";
import CssBtn from "../components/CssBtn";
import JavaScriptBtn from "../components/JavaScriptBtn";

const JavaScript = () => {
  const {javaScriptFinalData} = useGlobalContext();
  console.log(javaScriptFinalData);
  return (
    <>
   <h1>JavaScript</h1>
   <article className="btn-container">
   <JavaScriptBtn/>
  </article>
   
    </>
  )
}

export default JavaScript
