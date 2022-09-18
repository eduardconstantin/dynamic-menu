# Dynamic Menu
Introducing Dynamic Menu, a revolutionary innovative navigation menu.

<h2 align="center">:arrow_up_small: With two opening states :arrow_down_small:</h2>
<table align="center">
    <tr><td valign="center" width="100px"><b>DOWN<b></td>
    <td valign="center" width="100px"><b>UP<b></td></tr>
     <tr><td valign="center" width="100px"><img src="https://raw.githubusercontent.com/eduardconstantin/dynamic-menu/main/gifs/down.gif" width="460"/></td>
    <td valign="center" width="100px"><img src="https://raw.githubusercontent.com/eduardconstantin/dynamic-menu/main/gifs/up.gif" width="460"/></td></tr>
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
## Props
* menuName - The name of the menu - default is Dynamic Menu
* menuItems - An array containing all links (use this to add react router)
* openDirection - Opening direction of the menu (up or down) - default is down
