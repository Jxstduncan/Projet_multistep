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
                    <div className='information'>
                        <h1 className='perso'>Personal Info</h1>
                        <p className='perso p'>Please provide your name,email address,and your phone number.</p>
                        <p className='form' >Your name is : {props.text} </p>
                        <input type="text" placeholder='Name' id='name' className='text ' onChange={props.changeText} />
                        <p className='form'>Your email is {props.text}:</p>
                        <input type="text" placeholder='Ton_email@gmail.com' className='text' onChange={props.changeText} />
                        <p className='form'>Your phone number is {props.text}:</p>
                        <input type="text" placeholder='Ton_numéro' className='text' onChange={props.changeText} />
                        <div className='steps'>
                    <button className='next'>Next Step</button>
                </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Card