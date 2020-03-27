// BEGIN
const render = (element, data) => {
    const div = document.createElement('div');
    const { email, name, comment } = data;
    div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    `;
    element.replaceWith(div);
  };
  
  export default () => {
    const formElement = document.querySelector('.feedback-form');
    const handle = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
  
      render(formElement, Object.fromEntries(formData));
    };
    formElement.addEventListener('submit', handle);
  };
// END