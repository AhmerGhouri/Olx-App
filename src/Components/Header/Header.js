import React from 'react';
import logo from '../../image/logo.png';
import '../../App.css';
import SearchIcon from '@material-ui/icons/Search';
import { ExpandMore, Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { set_data } from '../../Redux store/action';




class Header extends React.Component {


  render() {
    return (


      <div className="first fixed-top" >

        <div>
          <img src={logo} className="logo" alt="logo" />

        </div>


        <div className="seacrhBar">
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          <input type="text" className="input" placeholder="Search" value="Pakistan" />
          <ExpandMoreIcon style={{ fontSize: 50 }} />

        </div>


        <div className="longSearch">

          <input type="text" placeholder="Find Cars, Mobile Phone and more..." className="long" />



        </div>
        <div className="SearchBtn">

          <IconButton className="btn">
            <SearchIcon style={{ fontSize: 35 }} />
          </IconButton>

          <button className="log" onClick={() => this.props.set_data()}>Login</button>

        </div>

        <div className="SearchBtn">

          <button className="sell"><AddIcon style={{ fontSize: 20 }} /> SELL</button>

        </div>





      </div >






    );
  }
}

const mapStateToProps = (state) => ({

  users : state.users

})

const mapDispatchToProp = (dispatch) => ({

  set_data : (data) => dispatch(set_data(data))


})

export default connect(mapStateToProps , mapDispatchToProp) (Header);



