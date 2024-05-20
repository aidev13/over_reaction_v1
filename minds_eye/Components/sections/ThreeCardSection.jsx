import './sections.css'
import Card from '../Cards';

function ThreeCardSection() {
   return (
      <>
         <div className='panel'>
            <Card>
               <div className="text-container bg">CCTV Installation</div>
            </Card>
            <Card>
               <div className="text-container bg">Access Control</div>
            </Card>
            <Card>
               <div className="text-container bg">Customer Focused</div>
            </Card>
         </div>
      </>
   )
}

export default ThreeCardSection;