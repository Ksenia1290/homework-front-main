import { ChangeEvent, InputHTMLAttributes } from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (currentText:string)=>void
	//React.Dispatch<React.SetStateAction<string>> 
	// НУЖНО ПРОТИПИЗИРОВАТЬ
} & InputHTMLAttributes<HTMLButtonElement>

export const Input = ({currentText,setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value)// НУЖНО ДОПИСАТЬ
	};

	 return (
	   <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler}/>
	 );
};
