import './NavBar.css';
import Lines from './icons8-menu.svg'
import Logo_dark from './logo_light.png'
import Cart from './cart.png'

function NavBar(){
    console.log("Pizda")
 return(<div className='navbar'>
            <div className='layout'>
                <div className='more'>
                    <img className='lines' src={Lines}/>
                </div>
                    <div className='logo'>
                        <img src={Logo_dark} width='60px' height='60px'/>
                        <h4>Dark Academy</h4>
                    </div>               
                    <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit"  class="searchButton">
                                Найти
                            </button>
                        </div>
                    </div>
                    <div className='ln-select'>
                    <span className='sp1'>Ru</span>
                    <span>En</span>
                    </div>
            </div>
            <div className='cart'>
                <div className='more'>
                        <img className='lines' src={Cart}/>
                </div>   
            </div>
        </div>)
}

export default NavBar;