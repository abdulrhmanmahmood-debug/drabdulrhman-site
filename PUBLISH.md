# 🚀 دليل النشر — خطوة واحدة

## النشر التلقائي من GitHub

ملفات المشروع موجودة في جذر المستودع، لذلك يجب أن يكون مجلد البناء الأساسي هو الجذر (`.`)، وليس `drabdulrhman-site`. يحدد ملف `netlify.toml` هذا المسار، وأمر النشر `npm ci --include=dev && npm run build`، ومجلد النشر `dist`، وإصدار Node.js 22. يثبت الأمر الاعتماديات من ملف القفل، بما فيها أدوات التطوير المطلوبة مثل Vite، قبل بدء البناء.

عند نشر التغييرات من الفرع `main`، يبني Netlify الموقع وينشر محتويات `dist` تلقائياً.

## الرفع اليدوي

موقعك جاهز. الملف المطلوب رفعه هو:

```
dist/index.html
```

يحتوي هذا الملف HTML وCSS وJavaScript. يجب رفع مجلد `dist` بالكامل أيضاً ليشمل الصور، بينما تُحمّل الخطوط من Google Fonts.

---

## الطريقة: Netlify Drop (مجاني · دقيقتان · بدون تسجيل)

### 1️⃣ ادخل الموقع
👉 **[app.netlify.com/drop](https://app.netlify.com/drop)**

### 2️⃣ اسحب المجلد
افتح مجلد المشروع، واسحب مجلد **`dist`** بالكامل وأفلته داخل الصفحة.

### 3️⃣ خذ الرابط
سيظهر رابطك فوراً، مثل:

```
https://abdulrhman-photo.netlify.app
```

### ✅ انتهيت — موقعك علني الآن

---

## تخصيص الرابط المجاني

بعد الرفع، من لوحة تحكم Netlify:

`Site configuration` → `Change site name`

أمثلة متاحة عادةً:
```
abdulrhman-photo.netlify.app
abdulrhmanhussien.netlify.app
ahphotography.netlify.app
```

---

## ربط نطاق مدفوع لاحقاً (اختياري)

1. اشترِ النطاق (مثل `abdulrhman.photo`) من Namecheap أو GoDaddy
2. في Netlify: `Domain settings` → `Add a domain`
3. أدخل النطاق واتبع تعليمات DNS

**لن تفقد أي شيء** — نفس الموقع يستمر على النطاق الجديد.

---

## ⚠️ قبل الرفع — تأكد من

- [ ] وضعت صورتك في `public/images/portrait.jpg`
- [ ] وضعت صور البودكاست في `public/images/podcast-1/2/3.jpg`
- [ ] مجلد Google Drive **عام** (خاص) وإلا اختفت الأعمال
- [ ] شغلت `npm run build` بعد أي تعديل

---

## 🔄 لتحديث الموقع بعد أي تعديل

```bash
npm run build
```

ثم اسحب مجلد `dist` من جديد إلى نفس الموقع في Netlify (سيُحدَّث تلقائياً).

---

## 📞 للدعم

- راسل الاستوديو: `abdulrhman.mahmood@gmail.com`
- دليل التعديل الكامل: `EDITING-GUIDE.md`
