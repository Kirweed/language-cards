import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./components/context";
import Header from "./components/Header/Header";
import CollectionsView from "./views/CollectionsView/CollectionsView";
import CollectionView from "./views/CollectionsView/CollectionView";

const debugColection = [
  {
    id: 0,
    topic: "Jedzenie",
    nativeLang: "Polski",
    foreignLang: "Angielski",
    description: `Curabitur pulvinar dictum lacus, aliquet accumsan urna 
    suscipit at. Suspendisse quam ipsum, ullamcorper a volutpat vel, 
    hendrerit vitae mi. Nullam viverra dolor vel felis suscipit tempus. Sed mauris nisi, 
    pretium id est vitae, condimentum fermentum ligula. Curabitur non nisl varius, dignissim 
    enim et, pretium justo. Duis at eros non nibh sodales ultrices. Ut feugiat, odio vel tincidunt 
    pellentesque, orci lorem eleifend est, sed interdum eros justo sed massa. Suspendisse feugiat est ut ex ornare, eget condimentum ante mattis.`,
    items: [
      {
        id: 0,
        nativeWord: "banan",
        foreignWord: "banana",
      },
      {
        id: 1,
        nativeWord: "jabłko",
        foreignWord: "apple",
      },
      {
        id: 2,
        nativeWord: "pomarańcza",
        foreignWord: "orange",
      },
      {
        id: 3,
        nativeWord: "winogrona",
        foreignWord: "grapes",
      },
      {
        id: 4,
        nativeWord: "masło",
        foreignWord: "butter",
      },
      {
        id: 5,
        nativeWord: "mleko",
        foreignWord: "milk",
      },
    ],
  },
  {
    id: 1,
    topic: "Rodzina",
    nativeLang: "Polski",
    foreignLang: "Hiszpański",
    description: `Curabitur pulvinar dictum lacus, aliquet accumsan urna 
    suscipit at. Suspendisse quam ipsum, ullamcorper a volutpat vel, 
    hendrerit vitae mi. Nullam viverra dolor vel felis suscipit tempus. Sed mauris nisi, 
    pretium id est vitae, condimentum fermentum ligula. Curabitur non nisl varius, dignissim 
    enim et, pretium justo. Duis at eros non nibh sodales ultrices. Ut feugiat, odio vel tincidunt 
    pellentesque, orci lorem eleifend est, sed interdum eros justo sed massa. Suspendisse feugiat est ut ex ornare, eget condimentum ante mattis.`,
    items: [],
  },
  {
    id: 2,
    topic: "osobowość",
    nativeLang: "Polski",
    foreignLang: "Japoński",
    description: `Curabitur pulvinar dictum lacus, aliquet accumsan urna 
    suscipit at. Suspendisse quam ipsum, ullamcorper a volutpat vel, 
    hendrerit vitae mi. Nullam viverra dolor vel felis suscipit tempus. Sed mauris nisi, 
    pretium id est vitae, condimentum fermentum ligula. Curabitur non nisl varius, dignissim 
    enim et, pretium justo. Duis at eros non nibh sodales ultrices. Ut feugiat, odio vel tincidunt 
    pellentesque, orci lorem eleifend est, sed interdum eros justo sed massa. Suspendisse feugiat est ut ex ornare, eget condimentum ante mattis.`,
    items: [],
  },
];

class App extends React.Component {
  state = {
    collections: [...debugColection],
  };

  addCollection = (e) => {
    e.preventDefault();
    const newItem = {
      id:
        this.state.collections.length == 0
          ? 0
          : this.state.collections[this.state.collections.length - 1].id + 1,
      topic: e.target[0].value,
      nativeLang: e.target[2].value,
      foreignLang: e.target[1].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      collections: [...prevState.collections, newItem],
    }));
  };

  removeCollection = (idToRemove) => {
    const newCollection = this.state.collections.filter(
      (element) => element.id !== idToRemove
    );

    this.setState({
      collections: [...newCollection],
    });
  };

  getCollection = (id) =>
    this.state.collections.filter((col) => col.id == id)[0];

  render() {
    return (
      <BrowserRouter>
        <Header />
        <AppContext.Provider value={this.removeCollection}>
          <Routes>
            <Route
              exact
              path="/collections"
              element={
                <CollectionsView
                  collections={this.state.collections}
                  addCollectionFn={this.addCollection}
                />
              }
            />
            <Route
              exact
              path="collections/:collectionId"
              element={<CollectionView getCollectionFn={this.getCollection} />}
            />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
