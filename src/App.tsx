
import { FC, useEffect, useState } from 'react'
import './App.sass'
import { ThemeCard } from './components/ThemeCard'


type TApi = {
  id: number,
  name: string,
  image: string,
  bgColor: string,
  tags: string[]
}

const api = async () => 
{
  const res = await fetch('https://logiclike.com/docs/courses.json')

  return await res.json() as TApi[];
}




type PropsThemeRow = {children: string, selectValue: string, onClick: (val: string) => void}
export const ThemeRow: FC<PropsThemeRow> = ({children, selectValue, onClick}) => 
{
  
  return(
     <div onClick={_ => onClick(children)}
      className={'theme-row ' + (selectValue === children ? 'theme-row-select' : 'theme-row-non_select')}>
        <div>
          <span>{children}</span>
        </div>
      </div>
  )
}

type PropsThemeSelector = {
  onChange?: (v: string) => void  
}
export const ThemeSelector: FC<PropsThemeSelector> = () => {

  const [selectVal, setSelectVal] = useState('Все темы')
  
  const imgUrl =
   'https://s3.logiclike.com/s3/logic-training/side-courses/files/e6Prc6SlewvdmDhdvQgZiZkddqdLAhr1UPfVm366.png'
  return (
    <>
    
      <div className='theme-selector-container'>
        {[
          'Все темы', 'Логика и мышление', 'Загадки', 'Головоломки', 'Путешествия'
        ].map(str => 
          <ThemeRow onClick={setSelectVal} selectValue={selectVal}>{str}</ThemeRow>)
        }
      </div>

      <ThemeCard 
        imgUrl={imgUrl}
        name='Угадай предмет'
        bgColor='#977BEC'
        />
         

    </>
  )
}


function App() {


  const [val, setVal] = useState<TApi[]>([])

  useEffect(() => 
  {
    console.log(val);
    api().then(setVal);
  }, [])


  return (
    <>
      <div className='app-container'>
        <ThemeSelector/>
      </div>
    </>
  )
}

export default App
