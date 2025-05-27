import './Card.css'
import sidebar from '../../../img/sidebar.svg'
import Button from '../Buttons/Button'
function Card(props) {
    return (
        <div className="bgc">
            <div>
                <div className='info'>
                   <div className='img'>
                    <Button/>
                   </div>
                    <div>
                        <h1 className='perso'>Personal Info</h1>
                        <p className='perso p'>Please provide your name,email address,and your phone number.</p>
                        <p className='form' onKeyDown={props.text}>Your name is :  </p>
                        <input type="text" placeholder='Name' id='name' className='text violet'  />
                        <p className='form'>Your email is :</p>
                        <input type="text" placeholder='Ton_email@gmail.com' className='text' />
                        <p className='form'>Your phone number is :</p>
                        <input type="text" placeholder='Ton_numéro' className='text' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card