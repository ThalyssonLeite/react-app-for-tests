import './App.css';
import { CommandMenu } from './components/command-menu';

function App() {
	return (
		<>
			<div className="header"></div>
			<div className="content"></div>
			<div className="sidebar">
				<CommandMenu />
			</div>
		</>
	);
}

export default App;
