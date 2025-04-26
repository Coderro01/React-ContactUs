import styles from './Navbar.module.css';

function Navbar() {
	return (
		<>
			<nav className={`${styles.Navbar} container`}>
				<div className="logo">
					<img
						src="/src/component/image/contact1.png"
						alt="logo"
					/>
				</div>

				<ul>
					<li>Home</li>
					<li>About</li>
					<li>contact </li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
