import { flexAlignCenter, flexAround, flexBtween, margin } from 'style/common'
import styled from 'styled-components'

const Footer = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.CopyRight>&copy; 2023 GitHub, Inc.</S.CopyRight>
				<S.FNav>
					<ul>
						<li>Terms</li>
						<li>Privacy</li>
						<li>Security</li>
						<li>Status</li>
						<li>Docs</li>
						<li>Contact GitHub</li>
						<li>API</li>
						<li>Training</li>
						<li>Blog</li>
						<li>About</li>
					</ul>
				</S.FNav>
			</S.Container>
		</S.Wrapper>
	)
}

export default Footer

const Wrapper = styled.div`
	width: 100%;
	${flexAlignCenter}
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	border-bottom: 1px dotted #999;
	padding: 8px 16px;

	//모바일
	@media only screen and (max-width: 600px) {
		width: 100%;
		height: 60px;
	}
	//중간사이즈
	@media only screen and (min-width: 600px) {
		width: 100%;
		height: 60px;
	}
	//컴퓨터
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
const CopyRight = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	//모바일
`

const FNav = styled.div`
	display: block;
	//모바일
	@media only screen and (max-width: 600px) {
		display: none;
	}
	//중간사이즈
	@media only screen and (min-width: 600px) {
		display: none;
	}
	@media only screen and (min-width: 992px) {
		display: block;
	}
	& ul {
		${flexAround}
		color: ${({ theme }) => theme.PALETTE.white};
		& li {
			margin-left: 15px;
			cursor: pointer;
			:hover {
				color: ${({ theme }) => theme.PALETTE.red};
				transition: 0.5s;
			}
		}
	}
`

const S = {
	Wrapper,
	Container,
	CopyRight,
	FNav,
}
