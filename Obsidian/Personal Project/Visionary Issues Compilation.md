Documentation Issues
- Provide documentation for the coverage of the CSS variables for themes. The objective is to have an easy customization in terms of coloring the website.
	- Example:
		- The coverage for the '--lp-color-primary-2' css variable is only the pagination arrows.
- It mentioned, for the rules of using CSS, it is not allowed to use a naked html and children selectors. But upon inspecting the CSS for the other elements of the visionary, it contains selectors for naked HTML and children CSS selectors.

Website Issues
Global
- CTA Block
	- No CSS class name for the contents hence it needs to be manually added in order to apply CSS styles (ex: removing the unnecessary bottom margin).
- Custom Intro
	- There are no settings to change the theme of arrow button manually without using CSS
- Forms
	- There are no dedicated global forms for newsletter and blogs unless the 'custom form' element was 'customized'.
- Instagram Feed
	- There are instances where it does not show up visually in the back-end (while it shows in the order elements settings) but it does visually shows in the front-end.
- Pagination Arrows Slider (pagination without numbers)
	- We have no means of adjusting the themes/color from the element's settings unless it was set in the Global CSS
- Pagination Arrows (pagination with numbers)
	- The button with arrow icon is somehow only in black color and updating through the styling of the global pagination theme

Main Header Navigation
- There are instances where the CSS set in the Global CSS for the Header Navigation does not affect the visual changes in the back-end but the CSS applied shows in the front-end.
- The header navigation uses an !important keyword for its background property 

Floating Mobile Contact Buttons
- The global element does not contain any element specific classes. Hence the need of a parent and child selector in order to fix the global element also the usage for the !important keyword.
- For some reason, the CSS for this element is not yet fixed or it was just intentionally inserted in the template without any modifications.

Side Menu
- It takes up a lot of screen size. Upon investigating, the CSS grid for the side-menu links takes up the space even if the column does not contain any side-menu links.

Footer
- Contains elements where it has no class name hence not in compliance with the template's SOP of 'Do not style “naked” HTML Elements'.

Homepage Opening with Search
- Icons
	- The icons theme are connected with the social icons and has no way of setting it manually in the element settings. Ex: The mute icon in the homepage opening with search.

Neighborhood Slider
- For the non-fullbleed style, the content description 

Properties (Portfolio | Featured Properties | Past Transactions)
- Properties List
	- Pagination
		- The property margin-top for the pagination requires a parent selector 'properties-list' to prevent the usage for the !important keyword. This kind of CSS is not in compliance with the rules for creating CSS for the visionary template.
		- Unlike with the neighborhoods grid, the pagination container does not use the global selector 'lp-pagination' hence resulting to the need of extra selection for the pagination container in global CSS to fix the color of the arrow icon on hover.

Home Valuation
- Instant Home Valuation
	- The title color settings affects the color for the hover color of the address drop-down in the input field of the element. This is recommended to be separated since it could confuse anyone who haven't encountered the issue and haven't managed to fix it.

Neighborhoods
- Neighborhood Grid
	- Add a manual setting for the clamping of the title and description of the neighborhood cards. Since there are instances where the description could reach two-lines of description while the others are not. This results to an uneven height of the neighborhood cards.

Neighborhood Details
- Neighborhood Points and Interest
	- No class names for the popups unlike the neighborhood overview and demographics popup. Hence the need for the child selectors to customize the theme.

Editor Issues
Main Header Navigation
- When setting up the content of the main header navigation, for some reason, the opening element has a large height. Resulting for the browser to consume computer resources and makes the editor sluggish/slow/lag.