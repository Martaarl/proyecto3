export const paintFooter = () => {
    const footer = document.querySelector('footer');

    const footerDiv = document.createElement('div');
    footerDiv.className = 'submit';

    const submitForm = document.createElement('form');
    submitForm.className = 'submitFormulary';
    
    const labelForm = document.createElement('label');
    const inputForm = document.createElement('input');
    inputForm.placeholder= 'Descubre más introduciendo tu email';

    submitForm.appendChild(labelForm, inputForm)

    footerDiv.appendChild(submitForm);

    footer.appendChild(footerDiv);

    return 

};