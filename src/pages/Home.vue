<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h2>楽しく強くなれること。</h2>
        <p>秋岡塾はあなたの空手道の道を全力でサポートします</p>
        <RouterLink to="/contact" class="cta-btn">無料体験申込</RouterLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <h2 class="section-title">秋岡塾について</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>秋岡塾は直接打撃制（フルコンタクト空手）の空手道場です。</p>
            <p>JKJO全日本ジュニア空手道選手権大会において全国優勝４回、準優勝１回、３位１回の実績を持ちます。</p>
            <p>運動経験がない方でも、自分のペースで参加できる、気軽で楽しい雰囲気の道場です。</p>
            <p>強くなりたい、かっこよくなりたいという気持ちを大事にしながら、楽しく稽古できる環境をサポートします。</p>
          </div>
          <div class="about-image">
            <img src="/resource/jyukucho.jpg" alt="秋岡塾道場長" class="dojo-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Messages/Philosophy Section -->
    <section class="philosophy">
      <div class="container">
        <h2 class="section-title">空手を通じて伝えたい4つのメッセージ</h2>
        <div class="philosophy-grid">
          <div v-for="item in philosophyItems" :key="item.id" class="philosophy-card">
            <div class="card-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose">
      <div class="container">
        <h2 class="section-title">選ばれる理由</h2>
        <div class="features-list">
          <div v-for="feature in features" :key="feature.id" class="feature-item">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const philosophyItems = [
  {
    id: 1,
    icon: '🎯',
    title: '稽古は真剣に楽しく',
    description: '何事も楽しむ気持ちを忘れずに本気で取り組もう'
  },
  {
    id: 2,
    icon: '❤️',
    title: '思いやりの心を養う',
    description: '周りの仲間を大切に'
  },
  {
    id: 3,
    icon: '📈',
    title: '向上心を持つ',
    description: '学ぶ喜び、達成する事の喜びを感じる'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'チャレンジ精神を養う',
    description: '失敗を恐れない、簡単にはあきらめない'
  }
]

const features = [
  {
    id: 1,
    icon: '🏆',
    title: '全国大会の実績',
    description: 'JKJO全日本ジュニア空手道選手権大会での優勝実績'
  },
  {
    id: 2,
    icon: '👥',
    title: '初心者も安心',
    description: 'ほとんどの入会者が運動経験なし。自分のペースで参加できます'
  },
  {
    id: 3,
    icon: '😊',
    title: '楽しい雰囲気',
    description: '仲間とのコミュニケーションを大切にする道場環境'
  },
  {
    id: 4,
    icon: '🎓',
    title: '丁寧な指導',
    description: 'わかりやすく、目的に応じた練習指導'
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #1a1a1a;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b 0%, #d63031 100%);
  border-radius: 2px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.2;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  font-weight: 300;
}

.cta-btn {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  border: none;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

/* About Section */
.about {
  background: white;
  padding: 4rem 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text {
  flex: 1;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.about-text p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.8;
}

.dojo-image {
  width: 60%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  object-fit: contain;
  transition: all 0.3s ease;
}

.dojo-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Philosophy Section */
.philosophy {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 4rem 2rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.philosophy-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.philosophy-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #1a1a1a;
}

.philosophy-card p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* Why Choose Section */
.why-choose {
  background: white;
  padding: 4rem 2rem;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-item {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.feature-item p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .about-grid,
  .philosophy-grid,
  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>
