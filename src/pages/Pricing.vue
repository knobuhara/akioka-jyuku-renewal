<template>
  <div class="pricing-page">
    <section class="pricing">
      <div class="container">
        <h1 class="page-title">料金案内</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>料金案内</span>
        </div>

        <div class="pricing-intro">
          <p>秋岡塾では、幅広い年齢層と様々な目的の方々に対応した、複数のクラスをご用意しております。</p>
          <p>初心者から上級者まで、自分のペースで参加できます。</p>
        </div>

        <div class="pricing-grid">
          <div v-for="plan in pricingPlans" :key="plan.id" class="pricing-card">
            <h3>{{ plan.name }}</h3>
            <div class="pricing-schedule">
              <strong>⏰ 練習日時</strong>
              <p>{{ plan.schedule }}</p>
            </div>
            <div class="pricing-features">
              <p v-for="feature in plan.features" :key="feature">
                ✓ {{ feature }}
              </p>
            </div>
            <div class="pricing-amount">
              <div class="price">¥{{ plan.price }}</div>
              <div class="price-unit">/ 月</div>
            </div>
            <RouterLink to="/contact" class="pricing-btn">詳細を確認</RouterLink>
          </div>
        </div>

        <div class="pricing-notes">
          <h3>重要なご案内</h3>
          <ul>
            <li>🎯 初月は無料体験実施中です（要申し込み）</li>
            <li>💳 月謝は月初めに納入ください</li>
            <li>📋 入会時に入会金が発生する場合があります</li>
            <li>⏳ 曜日の変更・休会については随時相談可能です</li>
            <li>🏆 選手強化クラスはさらなるオプションコースもあります</li>
            <li>👥 兄弟姉妹割引制度あり</li>
          </ul>
        </div>

        <div class="pricing-cta">
          <h2>気になるコースはありましたか？</h2>
          <p>無料体験会のお申し込みもお待ちしています！</p>
          <RouterLink to="/contact" class="cta-btn-large">無料体験申込</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const pricingPlans = [
  {
    id: 1,
    name: 'キッズクラス',
    schedule: '月・水・金 16:30-17:30\n土曜 10:00-11:00',
    features: [
      '3歳～小学6年生対象',
      '基本的な空手技術の習得',
      '楽しく身体を動かす'
    ],
    price: '4,000'
  },
  {
    id: 2,
    name: '一般初級クラス',
    schedule: '月・水・金 18:00-19:30\n土曜 11:00-12:30',
    features: [
      '中学生以上対象',
      '運動経験不問',
      'ゆっくり丁寧な指導'
    ],
    price: '5,000'
  },
  {
    id: 3,
    name: '選手強化クラス',
    schedule: '月・火・水・金・土\n19:00-20:30',
    features: [
      '全国大会を目指す',
      'より高度な技術習得',
      'パーソナルフィードバック'
    ],
    price: '6,000'
  },
  {
    id: 4,
    name: 'レディース空手',
    schedule: '月・木 20:30-21:50',
    features: [
      '女性限定クラス',
      'ダイエット・健康維持',
      '丁寧で楽しい指導'
    ],
    price: '4,000'
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.pricing-page {
  min-height: calc(100vh - 200px);
}

.pricing {
  background: white;
  padding: 3rem 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
  text-align: center;
}

.breadcrumb {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 0.95rem;
  color: #666;
}

.breadcrumb a {
  color: #ff6b6b;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.pricing-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.pricing-intro p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  border-color: #ff6b6b;
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.15);
}

.pricing-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  border-bottom: 2px solid #ff6b6b;
  padding-bottom: 1rem;
}

.pricing-schedule {
  margin-bottom: 1.5rem;
}

.pricing-schedule strong {
  display: block;
  font-size: 0.95rem;
  color: #ff6b6b;
  margin-bottom: 0.5rem;
}

.pricing-schedule p {
  font-size: 0.9rem;
  color: #666;
  white-space: pre-wrap;
  line-height: 1.6;
}

.pricing-features {
  margin-bottom: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.pricing-features p {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.pricing-amount {
  text-align: center;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b6b;
}

.price-unit {
  font-size: 0.95rem;
  color: #666;
  margin-top: 0.5rem;
}

.pricing-btn {
  display: block;
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
}

.pricing-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.pricing-notes {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 2.5rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  border-left: 4px solid #ff6b6b;
}

.pricing-notes h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.pricing-notes ul {
  list-style: none;
  padding: 0;
}

.pricing-notes li {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
  padding-left: 0;
}

.pricing-cta {
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
}

.pricing-cta h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
}

.pricing-cta p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}

.cta-btn-large {
  display: inline-block;
  background: white;
  color: #ff6b6b;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cta-btn-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
