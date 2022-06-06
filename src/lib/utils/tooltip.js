// import 'tippy.js/animations/perspective-subtle.css';
// import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/shift-toward-subtle.css';
import { createTippy } from 'svelte-tippy';

export const tippy = createTippy({
	animation: 'shift-toward-subtle',
	arrow: true,
	allowHTML: true
});
