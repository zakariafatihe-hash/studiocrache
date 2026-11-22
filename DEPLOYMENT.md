# StudioCrache - Deployment & Setup Guide

## 🚀 Quick Start

### 1. Prerequisites
- GitHub account
- Domain: `studiocrache.com` (already owned)
- Stripe account (stripe.com)
- PayPal Business account (paypal.com/business)

### 2. GitHub Pages Deployment (Free)

```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial StudioCrache site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/studiocrache.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to Settings > Pages > Source: Deploy from main branch
```

### 3. Custom Domain Setup
1. In GitHub Pages settings, add custom domain: `studiocrache.com`
2. Add CNAME record in domain DNS:
   ```
   Type: CNAME
   Name: @
   Value: YOUR_USERNAME.github.io
   ```
3. Enable "Enforce HTTPS"

---

## 💳 Payment Integration

### Option 1: Stripe (Recommended)

#### Setup Steps:
1. **Create Stripe Account**: stripe.com/register
2. **Get API Keys**: Dashboard > Developers > API keys
   - Publishable Key (pk_test_xxx / pk_live_xxx)
   - Secret Key (sk_test_xxx / sk_live_xxx)

#### Integration:
```javascript
// js/stripe-checkout.js
const stripe = Stripe('pk_live_YOUR_PUBLISHABLE_KEY');

async function createCheckoutSession(productId) {
    const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId })
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
}
```

#### Backend (Required for production):
```python
# api/create-checkout-session.py (Python Flask example)
import stripe
from flask import Flask, request, jsonify

app = Flask(__name__)
stripe.api_key = 'sk_live_YOUR_SECRET_KEY'

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = request.json
    product = get_product(data['productId'])

    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'usd',
                'product_data': {'name': product['title']},
                'unit_amount': int(product['price'] * 100),  # cents
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='https://studiocrache.com/success.html',
        cancel_url='https://studiocrache.com/cancel.html',
        customer_email=data.get('email'),
        metadata={'product_id': data['productId']}
    )
    return jsonify({'id': session.id})
```

### Option 2: PayPal Integration

```javascript
// js/paypal-checkout.js
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: product.price,
                    currency_code: 'USD'
                },
                description: product.title
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Payment completed
            sendDownloadEmail(details.payer.email_address, product.id);
        });
    }
}).render('#paypal-button-container');
```

---

## 📧 Email Delivery System

### Using Formspree (Simple, No Backend)
1. Create account: formspree.io
2. Create form endpoint
3. In checkout success:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email: customerEmail,
        product: product.title,
        download_link: `https://studiocrache.com/download/${product.id}`
    })
});
```

### Using SendGrid (Production)
```python
# api/send-download-email.py
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content

sg = sendgrid.SendGridAPIClient(api_key='YOUR_SENDGRID_API_KEY')

def send_download_email(email, product_id):
    download_url = f"https://studiocrache.com/download/{product_id}?token={generate_token()}"

    mail = Mail(
        from_email=Email('noreply@studiocrache.com'),
        to_emails=To(email),
        subject='Your StudioCrache Download Link',
        plain_text_content=f'Download your purchase: {download_url}'
    )
    sg.send(mail)
```

---

## 🔒 Security Checklist

- [ ] SSL Certificate (auto with GitHub Pages)
- [ ] Content Security Policy headers
- [ ] Stripe webhook verification
- [ ] Input validation on all forms
- [ ] Rate limiting on API endpoints
- [ ] PCI compliance (handled by Stripe/PayPal)

---

## 📊 Analytics & Monitoring

### Google Analytics 4
```html
<!-- Add to index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (Optional)
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 💰 Pricing Strategy

### Product Pricing Matrix
| Category | Low | Medium | High |
|----------|-----|--------|------|
| Templates | $9.99 | $19.99 | $49.99 |
| Scripts | $9.99 | $24.99 | $39.99 |
| Graphics | $5.99 | $15.99 | $29.99 |
| Guides | $9.99 | $19.99 | $34.99 |
| Tools | $7.99 | $12.99 | $19.99 |
| Code | $29.99 | $49.99 | $99.99 |

### Revenue Projections
- **Month 1**: 10 sales × $20 = $200
- **Month 3**: 50 sales × $20 = $1,000
- **Month 6**: 200 sales × $25 = $5,000
- **Month 12**: 500 sales × $30 = $15,000

---

## 🛠️ Development Commands

```bash
# Local development server
npx serve . -p 3000

# Or Python
python -m http.server 8000

# Build for production (if using build tools)
npm run build

# Deploy
git add .
git commit -m "Update"
git push origin main
```

---

## 📞 Support & Resources

- **Stripe Docs**: https://stripe.com/docs
- **PayPal Docs**: https://developer.paypal.com
- **GitHub Pages**: https://pages.github.com
- **Formspree**: https://formspree.io
- **SendGrid**: https://sendgrid.com

---

## ✅ Launch Checklist

- [ ] Domain configured (DNS propagated)
- [ ] SSL active (HTTPS working)
- [ ] Stripe test mode working
- [ ] PayPal test mode working
- [ ] Email delivery tested
- [ ] Download links working
- [ ] Mobile responsive verified
- [ ] Analytics installed
- [ ] Legal pages (Terms, Privacy, Refund)
- [ ] Support email configured