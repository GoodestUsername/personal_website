import React from 'react';
import InfoSection from 'components/InfoSection';
import InfoCard from 'components/InfoCard';

// images
import ServicelinkLogo from 'assets/images/sampleEconWebsiteLogo.png';
import GroupceriesLogo from 'assets/images/groupceriesLogo.png';
import TwoOneChessLogo from 'assets/images/twoonechessLogo.png';
import IconHyperlink from 'components/IconHyperlink';

const ProjectSection: React.FC = () => {
  return (
    <InfoSection title={'Projects'} sectionId={'projects'}>
        <InfoCard
            title={'Groupceries'}
            imageSrc={GroupceriesLogo}
            imageAlt={'Groupceries Logo'}>
            <p>School Group Project</p>
            <p>May 2020</p>
            <p>A website that lets you make a grociery list and combine it with your friends/families groceries...<br/>Groupceries</p>
            <IconHyperlink link={'https://github.com/Ishika18/COMP-2800-Team-DTC-19-Groupceries'} icon={'github'}/>
        </InfoCard>
        <InfoCard
            title={'Sample Ecommerce Website'}
            imageSrc={ServicelinkLogo}
            imageAlt={'Sample Ecom'}>
            <p>WIP Personal Project</p>
            <p>A work in progress ecommerce website using .NET MVC</p>
            <IconHyperlink link={'https://github.com/GoodestUsername/sample_ecommerce_website'} icon={'github'}/>
        </InfoCard>
        <InfoCard
            title={'TwoOneChess'}
            imageSrc={TwoOneChessLogo}
            imageAlt={'TwoOneChess Logo'}>
            <p>Personal Project</p>
            <p>2022</p>
            <p>• Created a react ts website for chess with ai suggested moves</p>
            <p>• Made with web workers, express, nodejs, socket io, react, typescript.</p>
            <p>• https://twoonechess.surge.sh/</p>
            <IconHyperlink link={'https://github.com/GoodestUsername/TwoOneChess'} icon={'github'}/>
        </InfoCard>
    </InfoSection>
  )
};

export default ProjectSection;