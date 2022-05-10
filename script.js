console.log('It is working!')

function doStuff() {
    const cta = document.querySelector('.cta-button'); // go get that cta button
    cta.style.display='none'; // set the display property in style to none. (hides it)
    let message = document.createElement('p'); // goes into document, creates an element called p which is paragraph. assign this action to the word message
    message.innerHTML = 'You order has been placed!'; // go to message, go into the inner html, and insert this string. <p>your order has been placed</p> 
    document.querySelector('section').appendChild(message);// go to the section in the doc where its <section> h1 we love cookies etc. and add the message in a paragraph. after the button. 
}
