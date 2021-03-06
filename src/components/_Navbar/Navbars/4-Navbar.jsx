import { React, Logo, Wrapper, SocialMediaIcons, Links } from './base';

const BaseFifthNavbar = ({ className }) => (
  <Wrapper className={className}>
    <Links />
    <a href="/home">
      <Logo />
    </a>
    <div className="relative top-1.5">
      <SocialMediaIcons />
    </div>
  </Wrapper>
);

export default BaseFifthNavbar;
