// images
import image from '@/assets/images/footer.png'

// constants
import { COPYRIGHT_SYMBOL } from '../../../constants/constants'

// styles
import { Wrapper, FooterText, LinkComponent, Img } from './footer.styles'

export const Footer = () => {
  return (
    <Wrapper>
      <FooterText>
        Команда разработки: &nbsp;
        <LinkComponent to="https://github.com/oalbukova" target="_blank">
          oalbukova
        </LinkComponent>
        |
        <LinkComponent to="https://github.com/alheym" target="_blank">
          alheym
        </LinkComponent>
        |
        <LinkComponent to="https://github.com/Lobanovk" target="_blank">
          Lobanovk
        </LinkComponent>
        |
        <LinkComponent to="https://github.com/ErikKhasanov" target="_blank">
          ErikKhasanov
        </LinkComponent>
        |
        <LinkComponent to="https://github.com/leopard-work" target="_blank">
          leopard-work
        </LinkComponent>
      </FooterText>
      <FooterText>{COPYRIGHT_SYMBOL} Джунглевая опасность 2023</FooterText>
      <Img src={image} alt="профиль" />
    </Wrapper>
  )
}
