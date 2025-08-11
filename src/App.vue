<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <i class="fas fa-dna"></i>
          <span>T2T-YAO</span>
        </div>
        <div class="nav-menu">
          <router-link to="/" class="nav-link">Overview</router-link>
          <router-link to="/downloads" class="nav-link">Downloads</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
        <div class="nav-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Page Decoration -->
    <div class="page-decoration"></div>

    <!-- Router View -->
    <router-view />

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <i class="fas fa-dna"></i>
              <span>T2T-YAO</span>
            </div>
            <p>Advancing Chinese genomics through the first high-quality T2T reference genome</p>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><router-link to="/">Overview</router-link></li>
              <li><router-link to="/downloads">Downloads</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 T2T-YAO Consortium. All rights reserved.</p>
          <p>Data released to the public domain under CC0 license</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleMobileMenu() {
      const navMenu = document.querySelector('.nav-menu')
      navMenu.classList.toggle('active')
    }
  }
}
</script>

<style>
@import './assets/styles.css';
</style> 