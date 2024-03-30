import { ButtonHTMLAttributes } from "react";

type ButtonPropsType = {
  callBack: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
}
// & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({callBack,name}:ButtonPropsType) => {
 
  const callBackHandler = () => {
    callBack() // НУЖНО ДОПИСАТЬ
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler} >
      {name}
    </button>
  );
};


//-------------------------------------------
//type ButtonPropsType = {
 // callBack: ()=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
//  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
//};

//export const Button:React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  //const callBackHandler = () => {
    //props.callBack() // НУЖНО ДОПИСАТЬ
  //};

  //return (
  //  <button id={'hw04-button'} onClick={callBackHandler}>
  //    {props.name}
 //   </button>
//  );
//};