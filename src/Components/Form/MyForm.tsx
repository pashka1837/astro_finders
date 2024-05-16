import {type FormEvent} from 'react';
import styles from './MyForm.module.css';
import useStore from '../../feature/store';

export default function MyForm() {
	const {setEmail, isEmailSent} = useStore();
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		setEmail(true);
		form.reset();
	}

	return (
		<form className={styles.myform} onSubmit={handleSubmit}>
			<div>
				<div>
					<p>Email</p>
					<input className={styles.myInput} type='email' required />
				</div>
				<div>
					<p>Age</p>
					<input className={styles.myInput} type='number' required />
				</div>
			</div>
			<button disabled={isEmailSent} className={styles.myBtn} type='submit'>Get Invitation</button>
			{isEmailSent && <div className='container_blur'><p>You have successfully applied for Game Test participation!</p></div> }
		</form>
	);
}
