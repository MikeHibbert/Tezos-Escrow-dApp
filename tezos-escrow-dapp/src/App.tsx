import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [pageTitle, setPageTitle] = useState<string>('My Tournaments')

  const OnSetCollapsedHandler = (collapsed: boolean) => {
    setCollapsed(collapsed);
  }

  

  return (
    <Layout collapsed={collapsed} setCollapsed={OnSetCollapsedHandler} pageTitle={pageTitle} />
  );
}

export default App;
