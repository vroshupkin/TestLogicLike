import { FC } from 'react'
import './ThemeCard.sass'



// TODO Сделать shadow-course
type PropsThemeCard = {
    imgUrl: string,
    name: string,
    bgColor: string
}
export const ThemeCard: FC<PropsThemeCard> = ({imgUrl, name, bgColor}) => {

    const img_container = document.querySelector('.theme-card-img-container') as HTMLDivElement
    if(img_container)
    {
        img_container.style.backgroundColor = bgColor
    }

    
  return (
    <div className='theme-card'>

        <div className='theme-card-img-container'>
            <div>
                <img src={imgUrl} alt="" />
            </div>
            
        </div>

        <div className='theme-card-name'>
            <div>
                <span>{name}</span>
            </div>
            
        </div>
    
    </div>
  )
}
