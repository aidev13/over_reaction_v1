import '../sections/sections.css'

const Card = props => {
   return (
      <div className="card" id='cardOne'>
         {props.children}
      </div>
   )
}

export default Card;