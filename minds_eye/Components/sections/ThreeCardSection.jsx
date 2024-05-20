import './sections.css'
import Card from '../Cards';

const titles = [
   {
      catogory: 'CCTV Installation',
      about: 'This is about cctz'
   },
   {
      catogory: 'Access Control',
      about: 'This is about Access Control'
   },
   {
      catogory: 'Costumer expectations',
      about: 'This is about our customers'
   },
]


function ThreeCardSection() {
   return (

      <div className='panel'>
         {
            titles.map(title => {
               return (
                  <Card
                     catogory={title.catogory}
                     about={title.about}
                  />
               )
            })
         }
      </div>

   )
}

export default ThreeCardSection;