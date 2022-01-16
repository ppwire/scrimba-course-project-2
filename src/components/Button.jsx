import MailLogo from '../svg/Mail.svg';
export default function Button(props) {
   return (
      <button className={props.color}>
         <img src={props.logo} alt="" />
         {props.name}
      </button>
   )
}