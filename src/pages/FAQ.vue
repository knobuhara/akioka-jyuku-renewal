<template>
  <div class="faq-page">
    <section class="faq">
      <div class="container">
        <h1 class="page-title">よくあるご質問</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>FAQ</span>
        </div>

        <div class="faq-list">
          <div v-for="item in faqItems" :key="item.id" class="faq-item">
            <button class="faq-question" @click="toggleFaq(item.id)">
              <span>{{ item.question }}</span>
              <span class="toggle-icon" :class="{ active: expandedFaq === item.id }">▼</span>
            </button>
            <div v-show="expandedFaq === item.id" class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>

        <div class="faq-contact">
          <h3>ご質問・ご相談があれば</h3>
          <p>こちらに記載されていないご質問がございましたら、</p>
          <p>お気軽にお問い合わせください。</p>
          <RouterLink to="/contact" class="cta-btn">お問い合わせ</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const expandedFaq = ref<number | null>(null)

const faqItems = [
  {
    id: 1,
    question: '運動経験がないのですが大丈夫ですか？',
    answer: '入会されるほとんどの人が運動経験の無い方です。性別・年齢に関係なく目的に応じて練習ができます。初心者から上級者まで、みんなで一緒に楽しく稽古しています。段階的に技術を習得できるので、心配はいりません。'
  },
  {
    id: 2,
    question: '練習は毎回出席しないといけませんか？',
    answer: '練習は強制ではありません。学校や仕事の都合で参加できなくても構いません。反復練習という意味を込めて週に2回参加されるのが目安です。自分のペースで続けることが大切です。欠席する場合は事前にご連絡ください。'
  },
  {
    id: 3,
    question: '見学や体験はできますか？',
    answer: '無料体験会を実施しております！道場内の雰囲気を知る事ができますので、お気軽にお問い合わせください。事前にお問い合わせをおくとスムーズに入会まで進める事ができます。見学だけもウェルカムです。'
  },
  {
    id: 4,
    question: '何歳から始められますか？',
    answer: '年齢制限はありません。子どもから大人まで、どなたでも始めることができます。初めての方は無料体験会で指導者にご相談ください。3歳のお子さんからシニアまで、幅広い年齢層が在籍しています。'
  },
  {
    id: 5,
    question: 'キッズクラスで親は見学できますか？',
    answer: 'はい、見学可能です。保護者様の見学はいつでもウェルカムです。お子さんの成長を応援できます。稽古中の体験入学もできますので、お気軽にお問い合わせください。'
  },
  {
    id: 6,
    question: '月謝以外に費用がかかりますか？',
    answer: '入会時に入会金が発生する場合があります。道着などの購入費用も別途必要です。詳細な費用については、お問い合わせ時にお答えします。兄弟姉妹割引もございます。'
  },
  {
    id: 7,
    question: 'レディース空手はどのような内容ですか？',
    answer: '女性向けの空手教室で、初心者の方も大歓迎です。ダイエットや健康維持、ストレス解消に効果的です。丁寧で楽しい指導が特徴。月・木の20:30～21:50で実施しています。見学・体験も可能です。'
  },
  {
    id: 8,
    question: '休会はできますか？',
    answer: 'はい、休会制度があります。一時的に稽古を中止したい場合はご相談ください。事情によっては月謝を減額することも可能です。詳細はお問い合わせ時にお答えします。'
  },
  {
    id: 9,
    question: '全国大会に出場できますか？',
    answer: '選手強化クラスでは、全国大会出場を目指します。過去に多数の全国大会出場者を輩出しています。初心者からでもサポートしますので、夢に向かって頑張りましょう。'
  },
  {
    id: 10,
    question: '道着の準備は必要ですか？',
    answer: 'はい、道着が必要です。初回の体験時は不要ですが、入会後は道着を用意していただきます。購入方法については入会時にご案内します。'
  }
]

const toggleFaq = (id: number) => {
  expandedFaq.value = expandedFaq.value === id ? null : id
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-page {
  min-height: calc(100vh - 200px);
}

.faq {
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

.faq-list {
  margin-bottom: 3rem;
}

.faq-item {
  margin-bottom: 1rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.toggle-icon {
  font-size: 0.8rem;
  color: #ff6b6b;
  transition: transform 0.3s ease;
}

.toggle-icon.active {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  animation: slideDown 0.3s ease;
}

.faq-answer p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.8;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-contact {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  border-left: 4px solid #ff6b6b;
}

.faq-contact h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.faq-contact p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.cta-btn {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .faq-question {
    font-size: 0.9rem;
    padding: 1rem;
  }

  .faq-answer {
    padding: 0 1rem 1rem;
  }
}
</style>
