import React from 'react';

// components
import InfoSection from 'components/InfoSection';
import IconHyperlink from 'components/IconHyperlink';

const ContactMeSection: React.FC = () => {
  return (
    <InfoSection title={'Contact Me'} sectionId={'contact'}>
      <div className="flex-fill">
        <article>
            <h2 className="text-center mt-5">Feel free to email me</h2>
            <a className="text-center mt-2" href="mailto:ericdongcannn@gmail.com"><h2>ericdongcannn@gmail.com</h2></a>
            <h2 className="text-center mt-5">Socials</h2>
            <div className="d-flex justify-content-center">
                <IconHyperlink link={'mailto:ericdongcannn@gmail.com'} icon={'envelope'}/>
                <IconHyperlink link={'https://github.com/GoodestUsername'} icon={'github'}/>
                <IconHyperlink link={'https://www.linkedin.com/in/eric-dong-0797611ab/'} icon={'linkedin'}/>
            </div>
        </article>
      </div>
    </InfoSection>
  )
};

export default ContactMeSection;