import React from 'react';
import './App.css';
import {Layout, Content, Drawer, Navigation, Header} from 'react-mdl';
import Main from './components/main';
import{Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
    <Layout style={Style}>
        <Header transparent title="TMD" style={{color: 'white'}}>
            <Navigation>
              <Link to ="/">Main Page</Link>
              <Link to ="/about">About</Link>
              <Link to ="/docs">Docs/Code Links</Link>
              <Link to ="/others">Others</Link>
            </Navigation>
        </Header>
        <Drawer title="TMD">
            <Navigation>
              <Link to ="/">Main Page</Link>
              <Link to ="/about">About</Link>
              <Link to ="/codes">Docs/Code Links</Link>
              <Link to ="/others">Others</Link>
            </Navigation>
        </Drawer>
        <Content> 
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

const Style={
  background: ' center / cover',
  backgroundImage: ' linear-gradient(to right top, rgb(247, 248, 246), rgba(40, 89, 180, 0.801)), url(https://i.postimg.cc/13TrM03r/9-F1-B358-F-89-F9-489-B-9-F32-C3324656-F251.jpg)',
  position: 'relative'
}

export default App;
