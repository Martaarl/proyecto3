import './footer.css';

export const paintFooter = () => {
    const footer = document.querySelector('footer');

    const submitForm = document.createElement('form');
    submitForm.id = 'submitFormulary';
    
    const labelForm = document.createElement('label');
    const inputForm = document.createElement('input');
    inputForm.placeholder= ' ✉️ Descubre más introduciendo tu email';

    submitForm.append(labelForm, inputForm)

    footer.appendChild(submitForm);

    return footer

};