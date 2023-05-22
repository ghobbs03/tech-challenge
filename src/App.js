import "./App.css";
import CardContainer from "./CardContainer";
import { useEffect, useState } from "react";

function App () {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json')
    .then(resp => resp.json())
    .then(itemsObj => {
        itemsObj.sort((a,b) => b.start_date - a.start_date)
        setItems(itemsObj)
    })
  }, [])
 

  return (<>
    <div className="app-header">
    <div className="app-header-name">Treeconomy Challenge - Gail Hobbs</div>
    <CardContainer items={items}/>
    </div>
  </>)
};

export default App;
