import { useGlobalContext } from "../Context";
import CssBtn from "../components/CssBtn";
import JavaScriptBtn from "../components/JavaScriptBtn";

const JavaScript = () => {
  const {javaScriptFinalData, initialDataSend} = useGlobalContext();
  const display = javaScriptFinalData? javaScriptFinalData : initialDataSend;

  return (
    <>
   <h1>JavaScript</h1>
   <article className="btn-container">
   <JavaScriptBtn/>
  </article>
   
<article className="content-container">

  {display.map((text)=> {
  return(
      <div key={text.id}>
        <p>ANSWER : {text.studyMaterial}</p>
        <img className="image" src= {text.img} />

        <video className="video" width="320" height="240" controls>
        <source src={text.video}/>
        </video>
      </div>
      )
    })} 
</article>
    </>
  )
}

export default JavaScript
