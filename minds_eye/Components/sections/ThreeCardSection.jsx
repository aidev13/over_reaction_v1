import './sections.css'

function ThreeCardSection() {
   return (
      <>
         <div className='panel'>
            <div className="card" id='cardOne'>
               <div className="text-container bg">CCTV Installation</div>
            </div>
            <div className="card" id='cardTwo'>
               <div className="text-container">Access Control</div>
            </div>
            <div className="card" id='cardOThree'>
               <div className="text-container">Selective Customers</div>
            </div>
         </div>
      </>
   )
}

export default ThreeCardSection;