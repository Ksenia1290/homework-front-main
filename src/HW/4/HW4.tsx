import { ChangeEvent, SetStateAction, useState } from 'react';
import s from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {

  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
 ]);

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setCurrentText (event.currentTarget.value)
 };

  const handleSave = () => {
    setTexts([ ...texts,currentText]);
    setCurrentText('');
  };

  return (
    <div id={'hw04'}>
      {currentText ? (
        <h1 id={'hw04-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
      )}

      <Input id={'hw04-input'} type="text" value={currentText} onChange={()=>{handleChange}} currentText={''} setCurrentText={function (value: SetStateAction<string>): void {} } />

      <Button id={'hw04-button'} onClick={() => { handleSave(); } } name={''} callBack={function (): void {
      } }/>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw04-tasks'}>
       {texts.map((el, index) => {
          return (
            <li key={index} id={`hw04-task-${index}`} className={el ? s.chetNechet : ''}>
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

