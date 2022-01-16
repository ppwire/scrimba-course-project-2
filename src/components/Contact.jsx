import Twitter from '../svg/Twitter_Icon.svg'
import Facebook from '../svg/Facebook_Icon.svg'
import Instagram from '../svg/Instagram _Icon.svg'
import LinkedIn from '../svg/Linkedin_Icon.svg'
import GitHub from '../svg/GitHub_Icon.svg'
export default function Contract(props) {
   return (
      <div className="card-footer">
         <img src={Twitter} alt="" />
         <img src={Facebook} alt="" />
         <img src={Instagram} alt="" />
         <img src={LinkedIn} alt="" />
         <img src={GitHub} alt="" />
      </div>
   )
}