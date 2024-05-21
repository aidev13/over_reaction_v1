import '../sections/sections.css'

const Card = props => {
   return (
      <div className="card" id='cardOne'>
         <div className="text-container">
            {props.catogory}
            <br />
            <p className='p_Size'>
               {props.about}
            </p>
         </div>
      </div>
   )
}

export default Card;