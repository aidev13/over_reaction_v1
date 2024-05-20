import '../sections/sections.css'

const Card = props => {
   return (
      <div className="card" id='cardOne'>
        <div className="text-container">
        {props.catogory}
        <br />
        {props.about}
         </div> 
      </div>
   )
}

export default Card;