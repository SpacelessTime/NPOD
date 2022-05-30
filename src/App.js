import React, {useEffect , useState} from "react";
import axios from "axios";
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import "./App.css";
function App() {
  
const [qod,setQod] = useState("")
  const [apod, setApod] = useState([])
  useEffect(() => {
    const data = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response)
      setApod(response.data)
    })
      .catch((error) =>{
      console.log("APOD GET HAS FAILED!", error)
      })
      console.log(data)

    const results = axios.get('https://quotes.rest/qod')
    .then((res)=>{
      console.log(res)
      setQod(res.data.contents.quotes[0].quote + '  - ' + res.data.contents.quotes[0].author)
    })
      console.log(results)
  },[])

  if (!apod.data) {
     return (
  <div className="App">
    <Header date={apod.date} />
    <h2 className="quote">"{qod}"</h2>
    <Body 
      key={apod.id}
      title={apod.title}
      explanation={apod.explanation}
      url={apod.url}
      copyright={apod.copyright}
      quote={qod.quote}
       />
        <Footer date={apod.date} title={apod.title}/>
  </div>
  )}
}
export default App;