### Screenshot

![Desktop responsive](<Screenshot 2025-08-05 100147.png>)
![Mobile responsive](<Screenshot 2025-08-05 100216.png>)

### Built with

Throughout the exercise, I used the div, and input tags.
I used CSS styles such as:
*grid
*animations (keyframes)
\*transitions, etc.

### What I learned

throughout the exercice i learn new concepts about DOM manipulation, adapt my site to different mobile and desktop devices, use events and target HTML elements in JavaScript, use functions(foreach) to manipulate large elements with the same class defined in HTML to simplify the code

`````html
<div class="toggle-switch">
  <input type="checkbox" id="switch" class="tggl" data-content="content1" />
  ````css .cellcontainer { padding: 10px; width: 35%; height: 50dvh; background:
  hsla(223, 100%, 22%, 1.00); /* border: 1px solid; */ display: grid;
  grid-template-columns: repeat(4, 2fr); } ````javascript button.forEach((bt) =>
  { bt.addEventListener("click", function () { const val =
  bt.textContent.trim(); if (val === "=") { try { input.value =
  eval(input.value) || "0"; } catch (error) { input.value = ""; } } else if (val
  === "RESET") { input.value = ""; // Correction pour vider l'input } else if
  (val === "DEL") { input.value = input.value.slice(0, -1); } else { input.value
  += val; } }); }); ### Useful resources -[Documentation javascript
  MDN](https://developer.mozilla.org/en-US/): I used the MDN documentation to
  have a clear idea of the notion of transition and its different meanings.
  ###difficulty encountered during## During the exercise I did not understand
  the importance of using or how to implement tables to simplify code and also
  how to implement the logic hidden behind each project. exercise Author -
  github - (https://github.com/Dongmo2007) - Frontend Mentor -
  [@Dongmo2007](https://www.frontendmentor.io/profile/Dongmo2007)
</div>
`````
