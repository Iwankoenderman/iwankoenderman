import React, { Component } from 'react';
import Taalkeuzenl from './taalkeuzenl'
import Taalkeuzeen from './taalkeuzeen'
import Ctamenu from './ctamenu.js'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TopMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu_class: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }


  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      
        <div>
           
            <div className={top_menu_class} >    
            <Ctamenu/>  
            <div className='left'>
                                          
            </div>    
            <div className='right'> 
            
            <Taalkeuzenl/>
            <Taalkeuzeen/>
           
            </div>
            <div className='top-menu-icon' onClick={this.setToggleTopMenuClass} onKeyDown={this.setToggleTopMenuClass}
            role = 'button' aria-label="hamburgermenu om te klikken bij mobiele weergave menu"  tabIndex={0}> <FontAwesomeIcon icon={faBars} size="1x" /></div>
            
            <div className='clear-fix' />
           
          </div>
        </div>
    )
  }
}

export default TopMenu;