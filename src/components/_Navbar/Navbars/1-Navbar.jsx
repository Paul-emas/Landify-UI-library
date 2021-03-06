import { React, Logo, Wrapper, Links, CustomButton } from './base';

const BaseSecondNavbar = ({ className }) => (
  <Wrapper className={className}>
    <a href="/home">
      <Logo />
    </a>
    <div className="ml-auto px-8">
      <Links />
    </div>
    <CustomButton primary>Buy Now</CustomButton>
  </Wrapper>
);

export default BaseSecondNavbar;
