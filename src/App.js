import 'bulma/css/bulma.css';

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import ProfileCard from './ProfileCard';
import SiriImage from './images/siri.png';

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section ">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@Alexa33"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana2023"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri22"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
