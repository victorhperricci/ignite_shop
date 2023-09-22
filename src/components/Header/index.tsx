import { styled } from '@/styles'
import LogoImg from '../../assets/logo.svg'
import Image from 'next/image'
import { HeaderContainer } from '@/styles/pages/app'


export const Header = () => {
  return (
    <HeaderContainer>
      <Image src={LogoImg} alt="Logo" />
    </HeaderContainer>
  )
}
