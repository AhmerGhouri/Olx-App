import React from 'react';
import './App.css';
import Home from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Image from './Components/Logo/image'
import Card from './Components/Card/card'
import Top from './Components/End/footer'
import ScrollToTop from './Components/End/Scroll'



class App extends React.Component {
  render() {

    return (

      <div>

        <div>

          <Header />

        </div >

        <div>

          <Home />

        </div>

        <div>

          <Image />

        </div>

        <div>

          <Card />

        </div>

        <div>

          <Top />

        </div>

          <div>

            <ScrollToTop />

          </div>




      </div>



    );
  }
}





// const mapStateToProps = (state) => ({

//   users: state.users

// })

export default App;
