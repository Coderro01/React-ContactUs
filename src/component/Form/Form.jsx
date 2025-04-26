import React from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { MdMessage } from 'react-icons/md';

import Button from '../Button/Button';
import styles from './Form.module.css';

import { useState } from 'react';

function Form() {
	const [name, setName] = useState('YourName ');
	const [email, setEmail] = useState(' | YourEmail@gmail.com ');
	const [text, setText] = useState(' | YourComment');

	const onSubmit = function (event) {
		event.preventDefault(); // br br refresh na ho jisse.
		setName(event.target[0].value); //0 bcz of the console i/p position
		setEmail(event.target[1].value); //1 bcz of the console i/p position
		setText(event.target[2].value); //2 bcz of the console i/p position
	};

	return (
		<section className={styles.container}>
			<div className={styles.Form_div}>
				<div className={styles.top_btn}>
					<Button
						text="VIA SUPPORT CHAT"
						icon={<MdMessage fontSize="26px" />} //caseSensitive & also can give fontSize and other here as well as on the css file upto us
					/>

					<Button
						text="VIA CALL"
						icon={<TbPhoneCall fontSize="26px" />}
					/>
					{/*using text prop & icon prop (from Button) */}
				</div>

				<Button
					isOutline={true}
					text="VIA EMAIL FORM"
					icon={<MdOutlineEmail fontSize="26px" />}
				/>

				<form onSubmit={onSubmit}>
					<div className={styles.form_control}>
						<label htmlfor="name">Name</label>
						<input
							type="text"
							name="name"
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlfor="name">Email</label>
						<input
							type="email"
							name="email"
						/>
					</div>
					<div className={styles.form_control}>
						<label htmlfor="name">Text</label>
						<textarea
							type="text"
							rows="8"
						/>
					</div>
					<div style={{ display: 'flex', justifyContent: 'end' }}>
						<Button text="SUBMIT BUTTON" />
					</div>
					<div>{name + '' + email + '' + text}</div>{' '}
					{/*this is the o/p of what we fill in the form*/}
				</form>
			</div>

			<div className="{styles.Form_image}">
				<img
					src="/src/component/image/contact.svg"
					alt="Form Image"
				/>
			</div>
		</section>
	);
}

export default Form;
