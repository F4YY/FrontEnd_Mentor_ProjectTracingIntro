import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    Buttonschedule,
    Buttontosee,
    Closeicon,
    Desktopimage,
    Hstack,
    Leftsider,
    Logo,
    Menuicon,
    Menulist,
    Overlayscreen,
    Rightsider,
    Stylednavbar,
    StyledProjecttracking
} from './styled/Projecttrackingintro.styled';
import logo from './images/logo.svg';
import device from './images/illustration-devices.svg';
import menuicon from './images/icon-hamburger.svg';
import closeicon from './images/icon-close.svg';

export const ProjectTrackingIntro = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Container>
        <StyledProjecttracking>
            <Logo src={logo} alt='logo'/>
            <Leftsider>
                <Hstack>
                    <p className='new_projecttracking'>
                        New
                    </p>
                    <p className='monograph_projecttracking'>
                        Monograph Dashboard
                    </p>
                </Hstack>
                <h1>
                    Powerful insights into your team
                </h1>
                <h2>
                    Project planning and time tracking for agile teams
                </h2>
                <Hstack>
                    <Buttonschedule>
                        Schedule a demo
                    </Buttonschedule>
                    <Buttontosee>
                        to see a live preview
                    </Buttontosee>
                </Hstack>
            </Leftsider>
            <Rightsider>
                <Stylednavbar>
                    <ul>
                        <li>Product</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>.</li>
                        <li>Login</li>
                    </ul>
                    <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
                    {toggleMenu && (
                        <>
                        <Overlayscreen/>
                        <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
                        <Menulist>
                            <ul>
                                <li>Product</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Login</li>
                            </ul>
                        </Menulist>
                        </>
                    )}
                </Stylednavbar>
                <Desktopimage src={device} alt='device'/>
            </Rightsider>
        </StyledProjecttracking>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Project Tracking Intro.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
