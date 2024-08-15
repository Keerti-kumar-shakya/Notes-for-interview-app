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
        <p className="question"><b>QUESTION :</b> {text.question}</p>
        <p className="answer"> <b>ANSWER :</b> {text.studyMaterial}</p>
        <label>Video example: <a href={text.video} target="_blank">Link</a></label>
        <p className="example"> <b>Example:</b> {text.example}</p>
        <img className="image" src= {text.img} />

      
      </div>
      )
    })} 
</article>
    </>
  )
}

export default JavaScript
