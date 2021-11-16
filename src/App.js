import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import CollectionsView from './views/CollectionsView/CollectionsView';
import RootView from './views/RootView/RootView';

const debugColection = [
  {
    id: 1,
    nativeLang: 'Polski',
    foreignLang: 'Angielski',
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
    nativeLang: 'Polski',
    foreignLang: 'Hiszpański',
    description: `Curabitur pulvinar dictum lacus, aliquet accumsan urna 
    suscipit at. Suspendisse quam ipsum, ullamcorper a volutpat vel, 
    hendrerit vitae mi. Nullam viverra dolor vel felis suscipit tempus. Sed mauris nisi, 
    pretium id est vitae, condimentum fermentum ligula. Curabitur non nisl varius, dignissim 
    enim et, pretium justo. Duis at eros non nibh sodales ultrices. Ut feugiat, odio vel tincidunt 
    pellentesque, orci lorem eleifend est, sed interdum eros justo sed massa. Suspendisse feugiat est ut ex ornare, eget condimentum ante mattis.`,
    items: [],
  },
  {
    id: 3,
    nativeLang: 'Polski',
    foreignLang: 'Japoński',
    description: `Curabitur pulvinar dictum lacus, aliquet accumsan urna 
    suscipit at. Suspendisse quam ipsum, ullamcorper a volutpat vel, 
    hendrerit vitae mi. Nullam viverra dolor vel felis suscipit tempus. Sed mauris nisi, 
    pretium id est vitae, condimentum fermentum ligula. Curabitur non nisl varius, dignissim 
    enim et, pretium justo. Duis at eros non nibh sodales ultrices. Ut feugiat, odio vel tincidunt 
    pellentesque, orci lorem eleifend est, sed interdum eros justo sed massa. Suspendisse feugiat est ut ex ornare, eget condimentum ante mattis.`,
    items: [],
  }
]

class App extends React.Component {
  state = {
    collections: [...debugColection],
  }

  addCollection = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.collections[this.state.collections.length-1].id + 1,
      nativeLang: e.target[1].value,
      foreignLang: e.target[0].value,
      description: e.target[2].value,
    }

    this.setState(prevState => ({
      collections: [...prevState.collections, newItem],
    }));
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            exact path='/' 
            element={<RootView />} 
          />
          <Route 
            path='/collections' 
            element= {<CollectionsView 
              collections={this.state.collections} 
              addCollectionFn={this.addCollection}
            />} 
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
