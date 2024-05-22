import './sections.css'
import Card from '../Cards';

const titles = [
   {
      catogory: 'CCTV Installation',
      about: 'With years of experience, we specialize in expert CCTV installation tailored to your needs. Our knowledgeable technicians ensure you get the right system at an affordable cost, providing reliable security and peace of mind. Discover how we can protect your property today.'
   },
   {
      catogory: 'Access Control',
      about: 'With years of experience, we specialize in providing expert access control solutions tailored to your needs. Our knowledgeable technicians ensure you get the right system at an affordable cost, enhancing security and convenience. Discover how we can help you manage and protect access to your property today.'
   },
   {
      catogory: 'Customer expectations',
      about: 'At our core, we\'re dedicated to exceptional service that caters to your unique needs. At Mind\'s Eye Secuirty, we create solutions with your requirements in mind, ensuring security and convenience at a price that fits your budget. Experience the difference with service that\'s all about you.'
   }
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