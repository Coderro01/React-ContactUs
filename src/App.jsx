import Button from './component/Button/Button';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';

import './index.css';

function App() {
	return (
		<>
			<div>
				<Navbar />
				<main className="main_container">
					<Header />
					<Form />
				</main>
			</div>
		</>
	);
}

export default App;
