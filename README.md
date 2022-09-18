# Dynamic Menu
Introducing Dynamic Menu, a revolutionary and innovative navigation menu.

<h2 align="center">:arrow_up_small: With two opening states :arrow_down_small:</h2>
<table align="center">
    <tr width="100%">
   	<td valign="center" width="50%"><b>DOWN<b></td>
    	<td valign="center" width="50%"><b>UP<b></td>
    </tr>
    <tr width="100%">
    	<td valign="center"><img src="https://raw.githubusercontent.com/eduardconstantin/dynamic-menu/main/gifs/down.gif"/></td>
   	<td valign="center"><img src="https://raw.githubusercontent.com/eduardconstantin/dynamic-menu/main/gifs/up.gif"/></td>
    </tr>
</table>

## :eyes: Usage
``` javascript
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
```

## :dart: Props
* menuName - The name of the menu - default is Dynamic Menu
* menuItems - An array containing all links (use this to add react router)
* openDirection - Opening direction of the menu (up or down) - default is down

## :space_invader: Tech Stack

<ul>
	<li><a href="https://reactjs.org">React.js</a></li>
	<li><a href="https://www.typescriptlang.org">Typescript</a></li>
	<li><a href="https://vitejs.dev">Vite</a></li>
	<li><a href="https://styled-components.com">Styled Components</a></li>
	<li><a href="https://www.framer.com/motion">Framer Motion</a></li>
</ul>
