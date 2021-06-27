import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar, Footer } from './components';
import Meteorologi from './pages/Meteorologi/Meteorologi';
import Pelayanan from './pages/Pelayanan/Pelayanan';
import Daftar from './pages/Daftar/Daftar';
import Pengaduan from './pages/Pengaduan/Pengaduan';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/meteorologi" exact component={Meteorologi} />
      </Switch>
      <Switch>
        <Route path="/pelayanan" exact component={Pelayanan} />
      </Switch>
      <Switch>
        <Route path="/daftar" exact component={Daftar} />
      </Switch>
      <Switch>
        <Route path="/pengaduan" exact component={Pengaduan} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
