import React from 'react'
import {
  LinkedinShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  TelegramIcon,
  LinkedinIcon,
  WhatsappIcon,
  ViberIcon,
} from 'react-share'

import './Share.scss'

export const Share: React.FC = () => {
  return (
    <div className="share">
      <TelegramShareButton
        url={'https://github.com/NicolaiBondarenco'}
        className="share__btn"
      >
        <TelegramIcon size={40} />
      </TelegramShareButton>
      <LinkedinShareButton
        url={'https://github.com/NicolaiBondarenco'}
        className="share__btn"
      >
        <LinkedinIcon size={40} />
      </LinkedinShareButton>
      <ViberShareButton
        url={'https://github.com/NicolaiBondarenco'}
        className="share__btn"
      >
        <ViberIcon size={40} />
      </ViberShareButton>
      <WhatsappShareButton
        url={'https://github.com/NicolaiBondarenco'}
        className="share__btn"
      >
        <WhatsappIcon size={40} />
      </WhatsappShareButton>
    </div>
  )
}
