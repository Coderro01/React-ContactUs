import { MdMessage } from 'react-icons/md'; {/*icon*/}


import styles from './Button.module.css';

function Button(props) {
	return (
		<>
			<button
				className={props.isOutline ? styles.second_btn : styles.primary_btn}
			>
				{props.icon}
				{props.text} 
				{/* <MdMessage font-size="60px" /> */}
				{/*this will increase the size of icon only*/}
				{/* VIA SUPPORT CHAT */}
			</button>
		</>
	);
}

export default Button;
