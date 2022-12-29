import React from 'react';

//components
import InfoSection from 'components/InfoSection';
import InfoCard from 'components/InfoCard';

// images
import ServicelinkLogo from 'assets/images/ServiceLinkLogo.svg';
import ReframeLogo from 'assets/images/reframe_group_logo.jpg';
import LeblancLeadershipLogo from 'assets/images/leblancLogo.jpg';

const CareerSection: React.FC = () => {
  return (
    <InfoSection title={'Career'} sectionId={'career'}>
        <InfoCard
            title={'LeBlanc Leadership Group'}
            imageSrc={LeblancLeadershipLogo}
            imageAlt={'Re/Frame group logo'}>
            <p>Software Engineer Coop</p>
            <p>September 2021 - December 2021</p>
            <p>• Utilized flutter to create a cross platform mobile reminder application.</p>
            <p>• Used various libraries to create custom notifications on both IOS and android platforms</p>
            <p>• Created a hackintosh in 2 days to test on ios platforms when we did not have access to macs due to covid.</p>
        </InfoCard>
        <InfoCard
            title={'The Re/Frame Group'}
            imageSrc={ReframeLogo}
            imageAlt={'Re/Frame group logo'}>
            <p>Software Engineer Coop</p>
            <p>September 2021 - December 2021</p>
            <p>• Worked with the reframe group to create typescript react pages that displays the user's net worth overtime.</p>
        </InfoCard>
        <InfoCard
            title={'ServiceLink'}
            imageSrc={ServicelinkLogo}
            imageAlt={'Service-Link Logo'}>
            <p>Junior Software Engineer</p>
            <p>August 2022 - November 2022</p>
            <p>• Worked full time for a probation period until the company got purchased.</p>
            <p>• Develop features and maintaining/debugging a legacy javascript (JQuery) front end website with tens of thousands of lines of JS code and a Java Backend during a transition to a react website,</p>
            <p>• Handled bugs and customer support with major customers using Jira.</p>
            <p>• Used SSH to debug and perform local changes to their system on test and production.</p>
        </InfoCard>
    </InfoSection>
  )
};

export default CareerSection;