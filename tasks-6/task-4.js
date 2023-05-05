// https://codepen.io/misha_klymenko/pen/Jjabvez
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', (e) => {
    const { value: name } = document.querySelector('.text-data.arr');
    const { value: phone } = document.querySelector('input[name="phone"]');
    const { value: birthday } = document.querySelector('input[name="birthday"]');
    const { value: email } = document.querySelector('input[name="email"]');

    alert(`Your name: ${name}, your phone: ${phone}, your birthday: ${birthday}, your email: ${email}.`);
}); 
