import '../../main.css'

const Btn = props => {

   function darkMode() {
      document.body.classList.toggle('dark')
   }

   return (
      <button className={props.className} onClick={darkMode}>Dark</button>
   )

}

export default Btn;