import React, {
	useState,
	useEffect,
	useRef,
	TextareaHTMLAttributes,
} from "react";
import { StyledTextArea } from "./style";

const AutoTextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [text, setText] = useState("");
	const [textAreaHeight, setTextAreaHeight] = useState("auto");
	const [parentHeight, setParentHeight] = useState("auto");

	useEffect(() => {
		setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
		setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
	}, [text]);

	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaHeight("auto");
		setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
		setText(event.target.value);

		if (props.onChange) {
			props.onChange(event);
		}
	};

	return (	
		<StyledTextArea
			{...props}
			ref={textAreaRef}
			rows={1}
			border="2px solid rgba(0, 159, 0, 0.15)"
			style={{
				height: textAreaHeight,
			}}
			onChange={onChangeHandler}
		/>
	);
};

export default AutoTextArea;