import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

let formData = {};
feedbackFormRef.addEventListener('input', throttle(localData, 500));
function localData() {
  formData = {
    email: emailRef.value,
    message: messageRef.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getLocalData() {
  let localData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localData) {
    emailRef.value = localData.email;
    messageRef.value = localData.message;
  }
  formData = localData;
}
getLocalData();

feedbackFormRef.addEventListener('submit', submitData);
function submitData(e) {
  e.preventDefault();
  if (emailRef.value.trim() !== '' && messageRef.value.trim() !== '') {
    console.log(formData);
    feedbackFormRef.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
