import { useGlobalContext } from "../Context";
import HtmlBtn from "../components/HtmlBtn"


const Html = () => {

  const {htmlFinalData, initialDataSend} = useGlobalContext();


  const display = htmlFinalData? htmlFinalData : initialDataSend;
  return (
    <>
    <h1>Html</h1>
  <article className="btn-container">
    <HtmlBtn/>
  </article>

    <article className="content-container">

    {display.map((text)=> {
      return(
      <div key={text.id}>
        <p className="question"><b>QUESTION :</b> {text.question}</p>
        <p className="answer"> <b>ANSWER :</b> {text.studyMaterial}</p>
        <p className="example"> <b>Example:</b> {text.example}</p>
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

export default Html
