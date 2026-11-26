<template>
  <div class="instructors-page">
    <section class="instructors">
      <div class="container">
        <h1 class="page-title">指導者紹介</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>指導者紹介</span>
        </div>

        <div class="instructors-intro">
          <p>秋岡塾では、豊富な経験と実績を持つプロの指導者が、</p>
          <p>初心者から上級者まで、丁寧にサポートします。</p>
        </div>

        <div class="instructors-grid">
          <div v-for="instructor in instructors" :key="instructor.id" class="instructor-card">
            <div class="instructor-image">{{ instructor.emoji }}</div>
            <h3>{{ instructor.name }}</h3>
            <p class="instructor-title">{{ instructor.title }}</p>
            <p class="instructor-bio">{{ instructor.bio }}</p>
            <div class="instructor-classes">
              <strong>担当クラス:</strong>
              <p>{{ instructor.classes }}</p>
            </div>
            <div class="instructor-experience">
              <strong>経歴:</strong>
              <ul>
                <li v-for="exp in instructor.experience" :key="exp">{{ exp }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="instructors-message">
          <h2>指導方針</h2>
          <p>秋岡塾では「楽しく強くなれること」を大切にしています。</p>
          <p>各指導者は、生徒一人ひとりの目的やレベルに合わせた指導を心がけています。</p>
          <p>初心者から全国大会を目指す選手まで、全員がサポート対象です。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const instructors = [
  {
    id: 1,
    emoji: '🥋',
    name: '秋岡 道場長',
    title: '道場長・主任講師',
    bio: 'JKJO全日本ジュニア空手道選手権大会での多数の優勝実績を持つ。豊富な指導経験と実績で、初心者から上級者まで幅広い指導を行う。',
    classes: '全クラス・選手強化練習',
    experience: [
      'JKJO全日本ジュニア空手道選手権大会 優勝4回',
      '30年以上の指導経験',
      '全国大会出場者多数輩出',
      '統一世界武道空手道連盟認定'
    ]
  },
  {
    id: 2,
    emoji: '👩‍🏫',
    name: '上村 夕貴子',
    title: 'レディース空手講師',
    bio: '女性向け空手クラスを担当。初心者の方への丁寧な指導と、ダイエット・健康維持を目指す女性をサポート。楽しく続けられる雰囲気づくりが得意。',
    classes: 'レディース空手（月・木 20:30-21:50）',
    experience: [
      'レディース空手専門講師',
      'ダイエット・健康指導経験豊富',
      '初心者向け指導が得意',
      '和気あいあいとした雰囲気づくり'
    ]
  },
  {
    id: 3,
    emoji: '👨‍🏫',
    name: 'アシスタント講師',
    title: 'チームアシスタント',
    bio: '道場長をサポートし、各レベルの生徒に対して細かな指導を行う。楽しく安全な環境づくりに務め、全ての塾生の成長を応援します。',
    classes: 'ジュニアクラス・一般クラス',
    experience: [
      '空手教室アシスタント経験多数',
      '児童教育経験有',
      '安全で楽しい環境づくり',
      '丁寧で親身な指導が特徴'
    ]
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.instructors-page {
  min-height: calc(100vh - 200px);
}

.instructors {
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

.instructors-intro {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
}

.instructors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.instructor-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 4px solid #ff6b6b;
}

.instructor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.instructor-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.instructor-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.instructor-title {
  font-size: 0.95rem;
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.instructor-bio {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.instructor-classes {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.instructor-classes strong {
  color: #ff6b6b;
  display: block;
  margin-bottom: 0.5rem;
}

.instructor-experience {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #666;
  text-align: left;
}

.instructor-experience strong {
  color: #ff6b6b;
  display: block;
  margin-bottom: 0.5rem;
}

.instructor-experience ul {
  list-style: none;
  padding: 0;
}

.instructor-experience li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.instructor-experience li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ff6b6b;
  font-weight: 600;
}

.instructors-message {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 3rem 2rem;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
  text-align: center;
}

.instructors-message h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.instructors-message p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .instructors-grid {
    grid-template-columns: 1fr;
  }
}
</style>
