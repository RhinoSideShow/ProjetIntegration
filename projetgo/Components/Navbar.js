import styled from 'styled-components'
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`;

const Image = styled.image`
    width: 0px;
    height: 0px;
    margin-left: 20px;
`;

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/'passHref>
                    <Image>
                        <img src="/Image/logoMoon.png" alt="nope"/>
                    </Image>
                </Link>
            </div>
            <div>
                <Link href='/'passHref>
                    <StyledLink>Home</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/About'passHref>
                    <StyledLink>About</StyledLink>
                </Link>
            </div>
            <div>
                <Link href='/Contact'passHref>
                    <StyledLink>Contact</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar