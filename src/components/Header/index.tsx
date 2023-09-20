import { styled } from '@/styles'
import LogoImg from '../../assets/logo.svg'
import Image from 'next/image'

const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
})

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={LogoImg} alt="Logo" />
    </HeaderContainer>
  )
}
