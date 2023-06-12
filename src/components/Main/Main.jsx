import axios from "axios";
import { useEffect, useState } from "react";

import "../../scss/Main.scss"
import DataGrid from "./DataGrid";
import "../../scss/DataGrid.scss";

 
function Main() {
  const [links, setLinks] = useState([]);

  const BASE_URL = "http://127.0.0.1:8000/links/";

  const getLinks = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setLinks(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(links);
  //? componentDidMount
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="main">
      <DataGrid links={links} getLinks={getLinks} />
    </div>
  );
}
export default Main;
