import React from "react";
import SearchBar from "../components/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* name of this prop can be anything on this custom element */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
