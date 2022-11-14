import './Catalog.css';
import Poison from './a89ee443497771.57f21aa3e2560.png'
import Monster from './white.png'
function Catalog(){
    return(<div className='category'>
            <ul className='catalog-grid'>
                <li>
                    <div className='grid-cell'>
                        <div className='img-place'>
                            <img src={Monster} className='promo'/> 
                        </div>
                        <div className='bot-text'>
                        <p className='name'>Monster Energy Drink</p>
                            <div className='review'>
                                <div class="star-ratings-css" title=".750"/>
                                <span className='reviews'>16 reviews</span>
                            </div>
                            <div className='price'>
                                <span>300$</span>
                            </div>
                        </div> 
                    </div>  
                </li>
                
            </ul>
    </div>)
}

export default Catalog;