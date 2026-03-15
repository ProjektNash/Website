// EmailJS contact form
const EMAILJS_SERVICE_ID  = 'service_sn3mbqp'
const EMAILJS_TEMPLATE_ID = 'template_fmyozvb'
const EMAILJS_PUBLIC_KEY  = 'l0tTXm_IoG3CTTcLj'

const form = document.getElementById('contact-form')
const successMsg = document.getElementById('form-success')
const submitBtn = document.getElementById('submit-btn')

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true

    const templateParams = {
      from_name:  form.name.value,
      from_email: form.email.value,
      company:    form.company?.value || '',
      service:    form.service?.value || '',
      message:    form.message.value,
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      form.style.display = 'none'
      successMsg.style.display = 'block'
    } catch (err) {
      console.error('EmailJS error:', err)
      submitBtn.textContent = 'Something went wrong — try emailing us directly'
      submitBtn.disabled = false
    }
  })
}