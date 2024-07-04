import { useGlobalContext } from "../Context";
import ReactBtn from "../components/ReactBtn";

const React = () => {
  const {reactFinalData} = useGlobalContext();
  console.log(reactFinalData);
  return (
    <>
  <h1>React</h1>
  <article className="btn-container">
  <ReactBtn/>
  </article>
    </>
  )
}

export default React
