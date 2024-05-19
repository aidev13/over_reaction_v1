import './header.css'

const Header = () => {
   return (
      <header className='bgImg'>
         <h1>Mind's Eye Security</h1>
         <div className='emptySpace'></div>
         <div className='headerContainer'>
            <img src="https://placehold.co/300x150" alt="place holder image" className='floatLeft' />


            <p className='textContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas officiis veniam molestiae doloremque enim iure reiciendis in aliquam facilis, totam a deleniti assumenda sapiente facere, quam explicabo pariatur sit.
               Quod consequatur exercitationem non, inventore sed facilis ipsam ad adipisci dignissimos eum qui hic soluta quibusdam ipsum! Aperiam, a? Exercitationem quis nisi ab dolor temporibus natus ullam eius voluptatem culpa.
               Iure atque nisi qui, unde minima magnam, nulla nobis odit autem quod saepe? Eos aliquid quidem, maxime consequuntur sit voluptas. Veritatis illo facilis, mollitia numquam amet voluptatibus at eos quibusdam.
               Repellendus nisi, porro molestiae distinctio ipsa ipsam culpa delectus inventore, hic nemo minus reiciendis, laudantium cumque? Quaerat, officiis blanditiis reiciendis maxime obcaecati distinctio asperiores, error voluptatibus ratione quidem modi nisi!</p>
         </div>
         <div style={{ clear: 'both' }}></div>
      </header>
   )
}

export default Header;