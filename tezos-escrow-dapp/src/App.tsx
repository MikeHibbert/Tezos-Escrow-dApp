import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout collapsed={collapsed} setCollapsed={setCollapsed} />
  );
}

export default App;
