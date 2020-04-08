export default () => {

    
  
    const elements = {
      form: document.querySelector('[data-form="sign-up"]'),
      email: document.querySelector('#sign-up-email'),
      password: document.querySelector('#sign-up-password'),
      confirmPassword: document.querySelector('#sign-up-password-confirmation'),
      button: document.querySelector('.btn-primary'),
    }
  
    
  
    const elements = {
        form: document.querySelector('[data-form="sign-up"]'),
        name: document.querySelector('#sign-up-name'),
        email: document.querySelector('#sign-up-email'),
        password: document.querySelector('#sign-up-password'),
        passwordConfirmation: document.querySelector('#sign-up-password-confirmation'),
        button: document.querySelector('.btn-primary'),
      }
    
      const state = {
        email: '',
        password: '',
        passwordConfirmation: '',
        error: [],
        state: ''
      }
    
      watch(state, 'state', () => {
        if (state.state === 'invalidGenerate') {
          console.log(state.error);
          state.error.map((err) => {
            elements[err].classList.add('is-invalid');
          });
        } else if (state.state === 'valid') {
          elements.password.classList.remove('is-invalid');
          elements.email.classList.remove('is-invalid');
          elements.passwordConfirmation.classList.remove('is-invalid');
          elements.button.removeAttribute('disabled');
    
        }
      });
    
    
    
      elements.form.addEventListener('input', (e) => {
        if (e.target === elements.email) {
          state.email = e.target.value;
        } else if (e.target === elements.password) {
          state.password = e.target.value;
        } else if (e.target === elements.passwordConfirmation) {
          state.passwordConfirmation = e.target.value;
        }
    
        try {
          schema.validateSync(state, {abortEarly: false});
          if (elements.name.value !== '') {
            state.state = 'valid';
          }
        } catch (err) {
          err.inner.map((e) => state.error.push(e.path));
          state.state = 'invalidGenerate';
        }
    
      });
    
      elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        axios.post('/user', {
          name: elements.name.value,
          email: state.email,
          password: state.password,
        })
        .then(() => console.log('отправлено'));
      });
  
    
  
  }