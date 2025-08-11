<template>
  <div class="contact">
    <section class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get in Touch</h2>
          <p class="section-subtitle">Questions, feedback, or collaboration inquiries</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <p>kangy@big.ac.cn</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-building"></i>
              </div>
              <div class="contact-details">
                <h3>Institution</h3>
                <p>Beijing Institute of Genomics, Chinese Academy of Sciences</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-globe"></i>
              </div>
              <div class="contact-details">
                <h3>Website</h3>
                <p>www.big.ac.cn</p>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" id="name" v-model="form.name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" v-model="form.email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" :disabled="submitting">
                <i class="fas fa-paper-plane"></i>
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false
    }
  },
  methods: {
    submitForm() {
      this.submitting = true
      // 这里可以添加实际的表单提交逻辑
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.')
        this.form = { name: '', email: '', message: '' }
        this.submitting = false
      }, 1000)
    }
  }
}
</script> 