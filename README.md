# Satisfaction survey

It's a satisfaction survey in a multi-step form with dark mode.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [How to run the code](#How-to-run-the-code)
- [Author](#author)

## Overview

### Screenshot

![tablet](https://github.com/alexandreSouza31/satisfaction-survey/assets/112407769/be0e71f1-5540-41e1-b4b2-f8cef39baaef)
![mobile phone](https://github.com/alexandreSouza31/satisfaction-survey/assets/112407769/69c6f74a-cbed-413f-9371-3acbbd1127b8)
![pc](https://github.com/alexandreSouza31/satisfaction-survey/assets/112407769/c8b9fa53-55ad-431a-bdc1-21695b445d02)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- mobile first
- JSX
- ReactJS
- dark mode



### What I learned


```css
/*tilde refers to the sibling, because in this case the input and the emoji are siblings*/
.score-container input:checked ~ svg{...}

/*references two classes together in the same tag*/
.form-control.score-container{...}
```
```jsx
// component build

const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>...</div>
    );
};

// import and export components
import React from "react";

const UserForm =...

export default UserForm
```

### Continued development

```
Mobile first, clean code, refactoring, ReactJS, dark mode.
```


### Useful resources

- [React-icons](https://react-icons.github.io/react-icons/) - used for icons.
- [Professor-Matheus-Battisti](https://youtu.be/PRSruHX_eig) - It was where I started my knowledge in ReactJS, and I was inspired.

### How to run the code? 


1 - Cloning/downloading the project

Enter the command```git clone https://github.com/alexandreSouza31/satisfaction-survey``` in the terminal, or if you prefer, download it by clicking on the green button called "Code" in this project's repository, and then, "Download zip.

2 - Open the code editor terminal, go into the root folder of the project and type npm run dev. Wait for the terminal to complete and as soon as an address like 'localhost:5500/' or equivalent is shown, copy and paste that address into your browser.

#### Deploy

If you want to test the app without downloading the code:
- [Vercel](https://satisfaction-survey.vercel.app/)

 :)
## Author

- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)
