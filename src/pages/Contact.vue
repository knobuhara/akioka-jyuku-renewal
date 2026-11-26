<template>
  <div class="contact-page">
    <section class="contact">
      <div class="container">
        <h1 class="page-title">お問い合わせ</h1>
        
        <div class="breadcrumb">
          <RouterLink to="/">ホーム</RouterLink> / <span>お問い合わせ</span>
        </div>

        <div class="contact-info">
          <div class="contact-item">
            <h3>📞 電話</h3>
            <a href="tel:096-285-3508" class="contact-link">096-285-3508</a>
            <p class="contact-hours">受付時間: 9:00 - 20:00 (月～土)</p>
          </div>
          <div class="contact-item">
            <h3>📍 所在地</h3>
            <p>熊本市</p>
            <p><a href="https://goo.gl/maps/N4i1LrYufHe7oSxMA" target="_blank" class="contact-link">地図を見る</a></p>
          </div>
          <div class="contact-item">
            <h3>📱 SNS</h3>
            <a href="https://www.instagram.com/akioka_juku/" target="_blank" class="contact-link">Instagram</a>
            <p>DMでもお問い合わせいただけます</p>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>体験申し込み・お問い合わせ</h2>
          <p>以下の情報をご入力の上、送信してください。</p>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">お名前 *</label>
              <input 
                v-model="form.name" 
                type="text" 
                id="name" 
                required 
                placeholder="山田 太郎"
              >
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="age">年齢（またはお子さんの年齢）*</label>
                <select v-model="form.age" id="age" required>
                  <option value="">選択してください</option>
                  <option value="3-5">3～5歳</option>
                  <option value="6-9">6～9歳</option>
                  <option value="10-12">10～12歳</option>
                  <option value="13-15">13～15歳</option>
                  <option value="16-19">16～19歳</option>
                  <option value="20-39">20～39歳</option>
                  <option value="40-59">40～59歳</option>
                  <option value="60+">60歳以上</option>
                </select>
              </div>
              <div class="form-group">
                <label for="gender">性別 *</label>
                <select v-model="form.gender" id="gender" required>
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="phone">電話番号 *</label>
              <input 
                v-model="form.phone" 
                type="tel" 
                id="phone" 
                required 
                placeholder="090-XXXX-XXXX"
              >
            </div>

            <div class="form-group">
              <label for="email">メールアドレス</label>
              <input 
                v-model="form.email" 
                type="email" 
                id="email" 
                placeholder="example@email.com"
              >
            </div>

            <div class="form-group">
              <label for="experience">運動経験 *</label>
              <select v-model="form.experience" id="experience" required>
                <option value="">選択してください</option>
                <option value="none">ない</option>
                <option value="little">少しある</option>
                <option value="some">ある</option>
                <option value="experienced">経験豊富</option>
              </select>
            </div>

            <div class="form-group">
              <label for="class">希望クラス *</label>
              <select v-model="form.class" id="class" required>
                <option value="">選択してください</option>
                <option value="kids">キッズクラス（3～12歳）</option>
                <option value="junior">一般初級クラス</option>
                <option value="advanced">選手強化クラス</option>
                <option value="ladies">レディース空手</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">メッセージ（ご質問など）</label>
              <textarea 
                v-model="form.message" 
                id="message" 
                rows="5" 
                placeholder="ご質問や特別なご要望があればこちらにご記入ください"
              ></textarea>
            </div>

            <div class="form-group checkbox">
              <input 
                v-model="form.agree" 
                type="checkbox" 
                id="agree" 
                required
              >
              <label for="agree">プライバシーポリシーに同意します *</label>
            </div>

            <button type="submit" class="submit-btn">送信</button>
          </form>
        </div>

        <div class="contact-note">
          <h3>ご注意事項</h3>
          <ul>
            <li>送信いただいた内容は、秋岡塾からのご連絡の目的以外に使用いたしません</li>
            <li>営業時間中（9:00～20:00）にご連絡させていただきます</li>
            <li>ご質問の内容によっては、ご回答にお時間をいただく場合があります</li>
            <li>お急ぎの場合は、お電話でのお問い合わせをお勧めします</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = ref({
  name: '',
  age: '',
  gender: '',
  phone: '',
  email: '',
  experience: '',
  class: '',
  message: '',
  agree: false
})

const submitForm = () => {
  if (!form.value.name || !form.value.phone || !form.value.agree) {
    alert('必須項目をすべてご入力ください')
    return
  }

  const message = `
【体験申し込み・お問い合わせ】

お名前: ${form.value.name}
年齢: ${form.value.age}
性別: ${form.value.gender}
電話番号: ${form.value.phone}
メールアドレス: ${form.value.email || '未入力'}
運動経験: ${form.value.experience}
希望クラス: ${form.value.class}
メッセージ: ${form.value.message || 'なし'}
  `

  alert(`以下の内容で送信されました。\n秋岡塾からのご連絡をお待ちください。\n\n電話: 096-285-3508\n\n${message}`)

  // Reset form
  form.value = {
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    experience: '',
    class: '',
    message: '',
    agree: false
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-page {
  min-height: calc(100vh - 200px);
}

.contact {
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

.contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  background: rgba(255, 107, 107, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border-top: 4px solid #ff6b6b;
}

.contact-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.contact-link {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.contact-link:hover {
  color: #d63031;
  text-decoration: underline;
}

.contact-hours {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
}

.contact-form-section {
  background: #f8f9fa;
  padding: 2.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.contact-form-section h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.contact-form-section > p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 2rem;
}

.contact-form {
  display: grid;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.form-group.checkbox input {
  width: 20px;
  height: 20px;
  margin: 0;
}

.form-group.checkbox label {
  margin-bottom: 0;
  cursor: pointer;
}

.submit-btn {
  background: linear-gradient(135deg, #ff6b6b 0%, #d63031 100%);
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

.contact-note {
  background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
}

.contact-note h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.contact-note ul {
  list-style: none;
  padding: 0;
}

.contact-note li {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}

.contact-note li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #ff6b6b;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
