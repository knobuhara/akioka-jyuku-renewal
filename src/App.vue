<template>
  <div id="app" class="app-container">
    <!-- Header/Navigation -->
    <header class="header">
      <nav class="navbar">
        <RouterLink to="/" class="nav-brand">
          <img src="/resource/akioka.jpg" alt="秋岡塾" class="logo-image">
        </RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">ホーム</RouterLink></li>
          <li><RouterLink to="/admission">入会案内</RouterLink></li>
          <li><RouterLink to="/instructors">指導者紹介</RouterLink></li>
          <li><RouterLink to="/pricing">料金案内</RouterLink></li>
          <li><RouterLink to="/news">ニュース</RouterLink></li>
          <li><RouterLink to="/faq">FAQ</RouterLink></li>
          <li><RouterLink to="/contact">お問い合わせ</RouterLink></li>
        </ul>
      </nav>
    </header>

    <!-- Page Content -->
    <RouterView />

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2026 秋岡塾. All rights reserved.</p>
        <p>熊本県内で唯一全国制覇を4回成し遂げている 統一世界武道空手道連盟 秋岡塾</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  overflow-x: hidden;
}

/* Header & Navigation */
.header {
  background: #95654F;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  flex: 1;
  text-decoration: none;
}

.logo-image {
  height: 60px;
  object-fit: contain;
  object-position: left;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #ff6b6b;
}

.nav-links a:hover::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ff6b6b;
}

.nav-links a.router-link-active {
  color: #ff6b6b;
}

/* Footer */
.footer {
  background: #0a0a0a;
  color: white;
  text-align: center;
  padding: 2rem;
  border-top: 2px solid #ff6b6b;
}

.footer-content p {
  font-size: 0.95rem;
  margin: 0.5rem 0;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-brand {
    text-align: center;
  }
}
</style>
