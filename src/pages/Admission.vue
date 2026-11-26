<template>
  <div class="admission-page">
    <section class="admission">
      <div class="container">
        <h1 class="page-title">入会案内</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>入会案内</span>
        </div>

        <div class="admission-content">
          <div class="admission-info">
            <h3>秋岡塾の空手とは</h3>
            <ul class="admission-list">
              <li>✓ 空手の基本を身につけます</li>
              <li>✓ 無理無駄のない自然な動きを目指します</li>
              <li>✓ 3歳〜65歳の幅広い年齢が在籍</li>
              <li>✓ 和気あいあいとしたアットホームな雰囲気</li>
            </ul>
          </div>
          <div class="admission-info">
            <h3>こんな目的の方が参加しています</h3>
            <ul class="admission-list">
              <li>🎯 仲間づくり・コミュニケーション能力向上</li>
              <li>💪 体力づくり・健康維持</li>
              <li>🏆 全国大会出場を目指す</li>
              <li>😊 楽しく強くなりたい</li>
            </ul>
          </div>
        </div>

        <div class="admission-benefits">
          <h3>秋岡塾を選ぶメリット</h3>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🏆</div>
              <h4>実績のある指導</h4>
              <p>JKJO全日本ジュニア空手道選手権大会での多数の優勝実績</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">👥</div>
              <h4>年齢層が豊富</h4>
              <p>3歳から65歳まで、仲間づくりが楽しい</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🎓</div>
              <h4>丁寧な指導</h4>
              <p>初心者から上級者まで、目的に応じた指導</p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">😊</div>
              <h4>楽しい雰囲気</h4>
              <p>強制ではなく、自分のペースで参加できます</p>
            </div>
          </div>
        </div>

        <div class="admission-cta">
          <h2>一歩踏み出そう</h2>
          <p>只今塾生募集中！</p>
          <p>運動経験がない方でも大歓迎です。</p>
          <p>自分のペースで参加できる環境を提供します。</p>
          <RouterLink to="/contact" class="cta-btn-large">無料体験申込</RouterLink>
        </div>

        <div class="entry-steps">
          <h3>入会までの流れ</h3>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <h4>無料体験に申し込む</h4>
              <p>お気軽にお問い合わせください</p>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <h4>体験稽古に参加</h4>
              <p>道場の雰囲気を感じてください</p>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <h4>入会申し込み</h4>
              <p>気に入ったら入会手続き</p>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <h4>稽古スタート</h4>
              <p>自分のペースで始めましょう！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.admission-page {
  min-height: calc(100vh - 200px);
}

.admission {
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

.admission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.admission-info {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #ff6b6b;
}

.admission-info h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.admission-list {
  list-style: none;
  padding: 0;
}

.admission-list li {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
}

.admission-benefits {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 3rem 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.admission-benefits h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1a1a1a;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.benefit-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.benefit-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.benefit-card p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.admission-cta {
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 3rem;
}

.admission-cta h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
}

.admission-cta p {
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

.entry-steps {
  background: white;
  padding: 3rem 2rem;
  border-radius: 10px;
  border: 2px solid #f0f0f0;
}

.entry-steps h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1a1a1a;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.step {
  text-align: center;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.step h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.step p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .admission-content,
  .benefits-grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .admission-cta {
    padding: 2rem;
  }
}
</style>
