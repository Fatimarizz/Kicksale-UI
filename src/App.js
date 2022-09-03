import {Grid, Container} from '@mui/material'

import './App.css';
import Header from './components/header';
import Hero_section from './components/hero_section';
import Card from './components/projects';
import About from './components/about';
import Table from './components/table';
import Faqs from './components/faq';
import Subscibe from './components/subsrcibe';
import Footer from './components/footer';
function App() {
  return (
    
    <Grid  >
      <div className='bg_hero'>
        <Header/>
      <Hero_section />
      </div>
      <Card/>
      <About/>
      <Table/>
      <Faqs/>
      <Subscibe/>
      <Footer/>
    </Grid>   
     
    
  );
}

export default App;
