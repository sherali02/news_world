import { useState } from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Newsboard from "./Components/Newsboard"
// import Newsitem from "./Components/Newsitem"

const App = () => {
  const [category, setcategory] = useState('top');

  const apiKey = "pub_48687973effc737ad6a2e5122bb8224520cb4";
  
  // console.log(`Your API key is ${apiKey}`);
  return (
    <div>
      <Navbar setcategory={setcategory} />
      <Newsboard category={category} api={apiKey} />
      <Footer />
    </div>
  )
}

export default App
