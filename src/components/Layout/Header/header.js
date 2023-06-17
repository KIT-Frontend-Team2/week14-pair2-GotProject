import { flexAlignCenter,flexBtween,h1Text, margin } from 'style/common'
import styled from 'styled-components'
import logoImage1 from "../../../images/git.png"

const Header = () => {


	return (
		// <div>header</div>
	<S.Wrapper>
			<S.Container>
				<S.Left>
					<S.logoImage src={logoImage1}/>
				</S.Left>
				<S.Middle>
					<S.Logo>Git Issues </S.Logo>
				</S.Middle>
				<S.Right>
						<S.MenuItem>Home</S.MenuItem>
						<S.MenuItem>Repository</S.MenuItem>
				</S.Right>
    </S.Container>
	</S.Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
	width: 100%;
	${flexAlignCenter}
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	border-bottom: 1px dotted #999;
	padding: 8px 16px;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 120px;
	}
`

const Container = styled.div`
${margin}
	width: 100%;
	${flexBtween}
`

const Left = styled.div`


`
const Logo = styled.h1`
	color: ${({ theme }) => theme.PALETTE.white};
	${h1Text};
`

const Middle = styled.div`
	display: block;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    display: none;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
		display: none;
  }

	  //for laptops and desktops
		@media only screen and (min-width: 992px) {
    display: block;
	}
`

const MenuItem = styled.li`
	cursor: pointer;
	margin-left: 15px;
	color: ${({ theme }) => theme.PALETTE.white};
	:hover {
				color: ${({ theme }) => theme.PALETTE.red};
				transition: 0.5s;
			}

`

const Right = styled.ul`
		${flexBtween}
`

const logoImage = styled.img`
    width: 48px;
    height: 48px;
		object-fit: cover;
`

const S = {
	Wrapper,
	Container,
	Left,
	Logo,
	Middle,
	Right,
	MenuItem,
	logoImage
}

