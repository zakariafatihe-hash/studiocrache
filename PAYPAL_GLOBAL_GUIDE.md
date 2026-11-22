# PayPal Integration Guide - Accepting Global Payments

## 🎯 **الحل الكامل لـ PayPal فقط - استلام من جميع أنحاء العالم**

### ✅ **الأخبار الجيدة:** PayPal Business يدعم **جميع دول العالم** تقريباً!

---

## 📋 **الخطوة 1: إنشاء حساب PayPal Business**

### المتطلبات:
1. **حساب PayPal Business** (ليس Personal)
   - اذهب إلى: `paypal.com/business`
   - اختر "Business Account"
   - سجل ببياناتك الحقيقية

2. **تفعيل الحساب بالكامل:**
   - ✅ تأكيد البريد الإلكتروني
   - ✅ ربط الحساب البنكي
   - ✅ تأكيد الهوية (إرسال وثائق)
   - ✅ ربط بطاقة ائتمان/خصم

---

## 💳 **الخطوة 2: تفعيل المدفوعات العالمية**

### في لوحة تحكم PayPal:
```
Settings (الإعدادات) > Account Settings (إعدادات الحساب) > 
Payment Preferences (تفضيلات الدفع) > 
Block Payments (حظر المدفوعات)
```

**إعدادات مهمة:**
- ❌ **لا تحظر** أي دول
- ✅ **قبول المدفوعات من:** "Any country"
- ✅ **العملات:** تفعيل "Accept payments in multiple currencies"
- ✅ **تحويل العملة التلقائي:** ON

---

## 🌍 **الدول المدعومة في PayPal (200+ دولة)**

| المنطقة | أمثلة دول |
|----------|-----------|
| **أمريكا الشمالية** | 🇺🇸 US، 🇨🇦 Canada، 🇲🇽 Mexico |
| **أوروبا** | 🇩🇪 Germany، 🇫🇷 France، 🇬🇧 UK، 🇮🇹 Italy، 🇪🇸 Spain، 🇳🇱 Netherlands |
| **الشرق الأوسط** | 🇸🇦 Saudi، 🇦🇪 UAE، 🇶🇦 Qatar، 🇰🇼 Kuwait، 🇧🇭 Bahrain، 🇴🇲 Oman |
| **آسيا** | 🇯🇵 Japan، 🇸🇬 Singapore، 🇭🇰 Hong Kong، 🇰🇷 Korea، 🇦🇺 Australia |
| **أفريقيا** | 🇿🇦 South Africa، 🇳🇬 Nigeria، 🇰🇪 Kenya، 🇲🇦 Morocco، 🇩🇿 Algeria |
| **أمريكا الجنوبية** | 🇧🇷 Brazil، 🇦🇷 Argentina، 🇨🇱 Chile، 🇨🇴 Colombia |

---

## 💡 **الحلول للدول غير المدعومة مباشرة**

### 1. **PayPal Guest Checkout** (أهم ميزة!)
- العملاء **لا يحتاجون لحساب PayPal**
- يدفعون **بالبطاقة مباشرة** (Visa, Mastercard, Amex, Discover)
- يعمل في **جميع الدول تقريباً**

### 2. **PayPal Credit/Debit Card Processing**
```
Settings > Payment Preferences > 
"Allow customers to pay with debit/credit card without PayPal account"
= تفعيل هذا الخيار!
```

### 3. **للدول العربية المحدودة:**
- **السعودية، الإمارات، قطر، الكويت، البحرين، عمان** - مدعومة بالكامل
- **مصر، المغرب، تونس، الجزائر** - مدعومة (مع قيود بسيطة)
- **باقي الدول العربية** - عبر Guest Checkout بالبطاقة

---

## 🛠️ **التكامل التقني لموقعك**

### ملف `js/paypal-integration.js`:

```javascript
// PayPal Smart Buttons Integration
class PayPalCheckout {
    constructor(clientId, currency = 'USD') {
        this.clientId = clientId;
        this.currency = currency;
        this.loadPayPalSDK();
    }

    loadPayPalSDK() {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}&currency=${this.currency}&intent=capture&components=buttons,marks`;
        script.onload = () => this.initButtons();
        document.head.appendChild(script);
    }

    initButtons() {
        // زر الدفع الذكي
        paypal.Buttons({
            style: {
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal'
            },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: this.currency,
                            value: this.getAmount(),
                            breakdown: {
                                item_total: { currency_code: this.currency, value: this.getAmount() }
                            }
                        },
                        description: this.getProductTitle(),
                        custom_id: this.getProductId()
                    }],
                    application_context: {
                        brand_name: 'StudioCrache',
                        locale: this.getUserLocale(),
                        shipping_preference: 'NO_SHIPPING',
                        user_action: 'PAY_NOW'
                    }
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    this.onPaymentSuccess(details);
                });
            },
            onError: (err) => {
                console.error('PayPal Error:', err);
                this.onPaymentError(err);
            }
        }).render('#paypal-button-container');

        // علامات البطاقات المقبولة
        paypal.Marks({
            fundingSource: paypal.FUNDING.CARD
        }).render('#paypal-card-marks');
    }

    getAmount() { return '29.99'; }
    getProductTitle() { return 'Digital Product'; }
    getProductId() { return 'prod_123'; }
    getUserLocale() { return navigator.language || 'en_US'; }

    onPaymentSuccess(details) {
        console.log('Payment completed:', details);
        // إرسال رابط التحميل
        this.sendDownloadLink(details.payer.email_address);
    }

    onPaymentError(err) {
        alert('Payment failed. Please try again.');
    }

    sendDownloadLink(email) {
        // تكامل مع Formspree أو Backend
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                product: this.getProductTitle(),
                download_link: `https://studiocrache.com/download/${this.getProductId()}`
            })
        });
    }
}

// تهيئة
document.addEventListener('DOMContentLoaded', () => {
    // ضع Client ID الخاص بك هنا
    window.paypalCheckout = new PayPalCheckout('YOUR_PAYPAL_CLIENT_ID');
});
```

---

## 🔧 **إعدادات PayPal Developer Dashboard**

### 1. **إنشاء App:**
```
developer.paypal.com > My Apps & Credentials > Create App
- App Name: StudioCrache
- App Type: Merchant
- Sandbox: ON (للاختبار)
- Live: ON (للإنتاج)
```

### 2. **الحصول على Client ID:**
- **Sandbox Client ID:** للاختبار
- **Live Client ID:** للإنتاج (استخدم هذا في الموقع)

### 3. **Webhooks (للإنتاج):**
```
Dashboard > Webhooks > Add Webhook
- URL: https://studiocrache.com/api/paypal-webhook
- Events: PAYMENT.CAPTURE.COMPLETED
```

---

## 💰 **الرسوم والتحويل**

### رسوم PayPal القياسية:
| نوع المعاملة | الرسوم |
|--------------|--------|
| **داخل الولايات المتحدة** | 2.9% + $0.30 |
| **دولية (Cross-border)** | 4.4% + ثابت (حسب العملة) |
| **تحويل عملة** | 3-4% فوق سعر السوق |

### نصائح لتقليل الرسوم:
1. **استخدم عملة واحدة** (USD) - تجنب تحويل العملة
2. **PayPal Balance** - إذا كان لديك رصيد، استخدمه
3. **Mass Pay** - للمدفوعات بالجملة (إذا بعت لبلدان كثيرة)

---

## 📧 **نظام التسليم التلقائي (مهم!)**

### باستخدام Formspree (بسيط، لا يحتاج Backend):
```html
<!-- في checkout.html -->
<form id="paypal-form" action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="hidden" name="email" id="customer-email">
    <input type="hidden" name="product" id="product-name">
    <input type="hidden" name="download_link" id="download-link">
</form>

<script>
function sendDownloadEmail(details) {
    document.getElementById('customer-email').value = details.payer.email_address;
    document.getElementById('product-name').value = 'Product Name';
    document.getElementById('download-link').value = 'https://studiocrache.com/download/PRODUCT_ID';
    document.getElementById('paypal-form').submit();
}
</script>
```

### باستخدام SendGrid (احترافي):
```python
# backend/send_email.py
import sendgrid
from sendgrid.helpers.mail import Mail

sg = sendgrid.SendGridAPIClient('YOUR_API_KEY')

def send_download(email, product_id):
    download_url = f"https://studiocrache.com/download/{product_id}?token={generate_token()}"
    mail = Mail(
        from_email='noreply@studiocrache.com',
        to_emails=email,
        subject='Your StudioCrache Download',
        html_content=f'<a href="{download_url}">Download your purchase</a>'
    )
    sg.send(mail)
```

---

## ✅ **قائمة التحقق للإطلاق (Launch Checklist)**

- [ ] **PayPal Business Account** مفعل بالكامل
- [ ] **Guest Checkout** مفعل (مهم جداً!)
- [ ] **Accept cards without PayPal account** مفعل
- [ ] **Multiple currencies** مفعلة
- [ ] **Client ID (Live)** مضاف للموقع
- [ ] **Webhook URL** مضاف في Dashboard
- [ ] **Test transactions** ناجحة (Sandbox)
- [ ] **Email delivery** يعمل
- [ ] **Download links** آمنة (مع token)
- [ ] **Refund policy** واضحة في الموقع
- [ ] **Privacy Policy** و **Terms of Service** منشورة

---

## 🚨 **تنبيهات مهمة**

### ما يجب تجنبه:
- ❌ **لا تستخدم** حساب Personal
- ❌ **لا تترك** الحساب غير مفعل (Verification)
- ❌ **لا تحظر** دول معينة في Settings
- ❌ **لا تنس** تفعيل Guest Checkout

### للدول ذات القيود:
| الدولة | الحل |
|---------|------|
| **إيران، سوريا، كوريا الشمالية، كوبا** | محظورة من PayPal - استخدم Crypto أو تحويل بنكي |
| **بعض الدول الأفريقية** | Guest Checkout بالبطاقة يعمل |
| **دول الخليج** | مدعومة بالكامل |

---

## 📞 **الدعم والمساعدة**

- **PayPal Merchant Support:** متاح 24/7 للعملاء التجاريين
- **Developer Documentation:** developer.paypal.com/docs
- **Community:** community.developer.paypal.com

---

**🎉 مع هذا الإعداد، ستتمكن من استلام المدفوعات من 200+ دولة حول العالم باستخدام PayPal فقط!**