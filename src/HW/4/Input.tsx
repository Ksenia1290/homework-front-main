import { ChangeEvent } from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: React.Dispatch<React.SetStateAction<string>> // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.currentText// НУЖНО ДОПИСАТЬ
	};

	 return (
	   <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
	 );
};
