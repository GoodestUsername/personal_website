import React from 'react';
import me_irl from 'assets/images/me_irl.png';

const AboutMeSection: React.FC = () => {
    return (
        <section>
          <h2 className='py-2'>About</h2>
          <div className="d-flex flex-row align-content-center flex-wrap">
            <div className="flex-fill">
              <article>
                <p>Hi, I'm Eric Dong.</p>
                <p>I'm a Software Engineer and a stock nerd.</p>
                <p>I graduated from BCIT in December 2021 with distinction.</p>
                <p>I Won The BCIT Computer Systems Award in Technical Programming <a href="https://www.linkedin.com/posts/bcitcomputing_big-congratulations-to-some-of-our-amazing-activity-6920106584144494592-3vhu"><i className="bi bi-link text-white"></i></a>.</p>
                <p>I have been described as a very mono person by past coworkers.</p>
                <p>I have issues with keeping a conversation going.</p>
                <p>I like to keep things concise.</p>
                <p>No I don't have a better picture of myself.</p>
                <p>plz hire me, ty</p>
              </article>
            </div>
            <div className="flex-fill">
              <picture>
                <img src={me_irl} alt="pic of me"
                 className="img-fluid rounded float-left"
                 style={{maxHeight: "350px"}}/>
              </picture>
            </div>
          </div>
        </section>
    )
};

export default AboutMeSection;