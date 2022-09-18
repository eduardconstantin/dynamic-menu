import { DynamicMenu } from './components/DynamicMenu/DynamicMenu';

export default function App() {
	const menuItems = [
		<a href='#'>Item 1</a>,
		<a href='#'>Item 2</a>,
		<a href='#'>Item 3</a>,
		<a href='#'>Item 4</a>,
		<a href='#'>Item 5</a>,
	];
	return (
		<div className='App'>
			<DynamicMenu menuItems={menuItems} openDirection='up' />
		</div>
	);
}
