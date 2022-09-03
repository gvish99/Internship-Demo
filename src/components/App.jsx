import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const url = "https://api.facthunt.in/fostergem/v1/post/list/public";
  const [apidata, setApi] = React.useState([{}]);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setApi(response.data.content);
    });
  }, [url]);

  function createCard(item) {
    return <CreateArea title={item.title} src={item.coverImageUrl} />;
  }

  return (
    <div className="all">
      <Header />

      <div className="card-item">{apidata.map(createCard)}</div>
      <Footer />
    </div>
  );
}

export default App;
