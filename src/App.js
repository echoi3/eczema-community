import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forum" component={Forum} />
              <Route path="/profile" component={Profile} />
              <Route path="/resources" component={Resources} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
