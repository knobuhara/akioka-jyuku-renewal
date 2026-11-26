<template>
  <div class="news-page">
    <section class="news">
      <div class="container">
        <h1 class="page-title">ニュース</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>ニュース</span>
        </div>

        <div class="news-grid">
          <div v-for="newsItem in newsItems" :key="newsItem.id" class="news-card">
            <div class="news-date">{{ newsItem.date }}</div>
            <h3>{{ newsItem.title }}</h3>
            <p>{{ newsItem.description }}</p>
            <div class="news-category">
              <span class="category-tag">{{ newsItem.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const newsItems = [
  {
    id: 1,
    date: '2024年11月',
    title: '冬季キャンペーン開催中',
    description: '新規入会者対象の特別キャンペーンが始まりました。この機会にぜひ無料体験にご参加ください。初月の月謝が割引になります。',
    category: 'キャンペーン'
  },
  {
    id: 2,
    date: '2024年10月',
    title: '全国大会出場決定',
    description: '秋岡塾の選手が全国大会への出場を決定しました。皆さんの応援よろしくお願いします。選手強化クラスの生徒が活躍します。',
    category: '大会'
  },
  {
    id: 3,
    date: '2024年09月',
    title: '新しい指導者が加わりました',
    description: '豊富な経験を持つ新しい指導者が秋岡塾のチームに加わりました。より充実した指導体制でお迎えします。',
    category: 'お知らせ'
  },
  {
    id: 4,
    date: '2024年08月',
    title: 'レディース空手クラス開講',
    description: '女性向けの空手教室を始めました。初心者の方も大歓迎です！ダイエットや健康維持に効果的です。',
    category: 'クラス開講'
  },
  {
    id: 5,
    date: '2024年07月',
    title: '全国大会入賞',
    description: 'JKJO全日本ジュニア空手道選手権大会で、秋岡塾の複数の選手が上位入賞を果たしました。',
    category: '実績'
  },
  {
    id: 6,
    date: '2024年06月',
    title: '夏休みイベント予定',
    description: '夏休み期間中の特別練習会と交流会の予定が決まりました。詳細はお問い合わせください。',
    category: 'イベント'
  }
]
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.news-page {
  min-height: calc(100vh - 200px);
}

.news {
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.news-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: 4px solid #ff6b6b;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background: white;
}

.news-date {
  font-size: 0.9rem;
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.news-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  line-height: 1.4;
}

.news-card p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.news-category {
  display: flex;
  gap: 0.5rem;
}

.category-tag {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
