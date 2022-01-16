import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Button from './components/Button'
import Content from './components/Content'
import MailLogo from './svg/Mail.svg';
import LinkedInLogo from './svg/Linkedin.svg'

import ProfilePicture from './images/me.jpg'

function App() {

  return (
    <div className="container">
      <Card>
        <img src={ProfilePicture} className="card-profile" ></img>
        <div className="card-body">
          <Header></Header>
          <div className="button-group">
            <Button name="Email" color="button-white" logo={MailLogo}></Button>
            <Button name="Linkedin" color="button-blue" logo={LinkedInLogo}></Button>
          </div>
          <section>
            <Content title="About" description="I'm poom a full-stack javascript developer."></Content>
            <Content title="Interests" description="Sexy stuff. Ninja. Anime. Comic. ETC."></Content>
          </section>
        </div>
      </Card>
    </div>
  )
}

export default App
