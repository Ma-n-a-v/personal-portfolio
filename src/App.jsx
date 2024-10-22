import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Tech, Hero, Navbar, Works, StarsCavas } from './components';
//import { div } from 'framer-motion/client';

const App = () => {
  return (
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCavas />
        </div>
    </div>
  </BrowserRouter>
  )
}

export default App
