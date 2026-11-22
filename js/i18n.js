// StudioCrache - Internationalization (i18n) System
// Supports multiple languages based on user's country/preference

const translations = {
    en: {
        // General
        "site.title": "StudioCrache - Digital Assets Marketplace",
        "site.tagline": "Professional Digital Assets",

        // Navigation
        "nav.products": "Products",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.login": "Login",
        "nav.register": "Register",

        // Hero
        "hero.title": "Professional Digital Assets",
        "hero.subtitle": "Download ready-to-use templates, scripts, and tools for your projects",
        "hero.shop": "Shop Now",
        "hero.demo": "View Demo",

        // Products
        "products.title": "Featured Products",
        "products.subtitle": "High-quality digital assets created by experts",
        "products.buy": "Buy Now",
        "products.add_to_cart": "Add to Cart",
        "products.rating": "Rating",
        "products.category": "Category",

        // Features
        "features.secure": "Secure Checkout",
        "features.secure_desc": "256-bit SSL encryption for all transactions",
        "features.instant": "Instant Delivery",
        "features.instant_desc": "Get your files immediately after payment",
        "features.global": "Global Payments",
        "features.global_desc": "PayPal, Cards, Apple Pay, Google Pay accepted",

        // Checkout
        "checkout.title": "Secure Checkout",
        "checkout.step1": "1. Cart",
        "checkout.step2": "2. Payment",
        "checkout.step3": "3. Confirmation",
        "checkout.cart_title": "Your Cart",
        "checkout.subtotal": "Subtotal",
        "checkout.tax": "Tax",
        "checkout.total": "Total",
        "checkout.payment_method": "Payment Method",
        "checkout.email": "Email Address",
        "checkout.pay_button": "Complete Payment",
        "checkout.success_title": "Thank You!",
        "checkout.success_desc": "Your order has been placed successfully.",
        "checkout.download_info": "Your download link will be sent to your email within 5 minutes.",
        "checkout.continue_shopping": "Continue Shopping",

        // Footer
        "footer.brand": "Professional digital assets marketplace",
        "footer.links": "Quick Links",
        "footer.payment": "We Accept",
        "footer.copyright": "All rights reserved.",

        // Product Details
        "product.files_included": "Files Included",
        "product.description": "Description",
        "product.features": "Features",
        "product.requirements": "Requirements",
        "product.changelog": "Changelog",

        // Messages
        "msg.added_to_cart": "Added to cart!",
        "msg.payment_processing": "Processing payment...",
        "msg.payment_success": "Payment successful!",
        "msg.payment_failed": "Payment failed. Please try again.",
        "msg.email_required": "Email is required",
        "msg.invalid_email": "Invalid email address"
    },

    ar: {
        "site.title": "ستوديو كراش - سوق الأصول الرقمية",
        "site.tagline": "أصول رقمية احترافية",

        "nav.products": "المنتجات",
        "nav.about": "من نحن",
        "nav.contact": "تواصل معنا",
        "nav.login": "تسجيل الدخول",
        "nav.register": "إنشاء حساب",

        "hero.title": "أصول رقمية احترافية",
        "hero.subtitle": "حمّل قوالب، سكريبتات، وأدوات جاهزة للاستخدام في مشاريعك",
        "hero.shop": "تسوق الآن",
        "hero.demo": "عرض تجريبي",

        "products.title": "منتجات مميزة",
        "products.subtitle": "أصول رقمية عالية الجودة تم تطويرها من قبل خبراء",
        "products.buy": "اشتري الآن",
        "products.add_to_cart": "أضف للسلة",
        "products.rating": "التقييم",
        "products.category": "الفئة",

        "features.secure": "دفع آمن",
        "features.secure_desc": "تشفير SSL 256-bit لجميع المعاملات",
        "features.instant": "تسليم فوري",
        "features.instant_desc": "احصل على ملفاتك فوراً بعد الدفع",
        "features.global": "مدفوعات عالمية",
        "features.global_desc": "مقبول: PayPal، البطاقات، Apple Pay، Google Pay",

        "checkout.title": "إتمام الدفع بأمان",
        "checkout.step1": "1. السلة",
        "checkout.step2": "2. الدفع",
        "checkout.step3": "3. التأكيد",
        "checkout.cart_title": "سلة مشترياتك",
        "checkout.subtotal": "المجموع الفرعي",
        "checkout.tax": "الضريبة",
        "checkout.total": "الإجمالي",
        "checkout.payment_method": "طريقة الدفع",
        "checkout.email": "البريد الإلكتروني",
        "checkout.pay_button": "إتمام الدفع",
        "checkout.success_title": "شكراً لك!",
        "checkout.success_desc": "تم طلبك بنجاح.",
        "checkout.download_info": "رابط التحميل سيُرسل لبريدك الإلكتروني خلال 5 دقائق.",
        "checkout.continue_shopping": "متابعة التسوق",

        "footer.brand": "سوق أصول رقمية احترافية",
        "footer.links": "روابط سريعة",
        "footer.payment": "نقبل الدفع بـ",
        "footer.copyright": "جميع الحقوق محفوظة.",

        "product.files_included": "الملفات المضمنة",
        "product.description": "الوصف",
        "product.features": "المميزات",
        "product.requirements": "المتطلبات",
        "product.changelog": "سجل التغييرات",

        "msg.added_to_cart": "تمت الإضافة للسلة!",
        "msg.payment_processing": "جاري معالجة الدفع...",
        "msg.payment_success": "تم الدفع بنجاح!",
        "msg.payment_failed": "فشل الدفع. يرجى المحاولة مرة أخرى.",
        "msg.email_required": "البريد الإلكتروني مطلوب",
        "msg.invalid_email": "بريد إلكتروني غير صالح"
    },

    fr: {
        "site.title": "StudioCrache - Marché d'Actifs Numériques",
        "site.tagline": "Actifs Numériques Professionnels",

        "nav.products": "Produits",
        "nav.about": "À Propos",
        "nav.contact": "Contact",
        "nav.login": "Connexion",
        "nav.register": "S'inscrire",

        "hero.title": "Actifs Numériques Professionnels",
        "hero.subtitle": "Téléchargez des modèles, scripts et outils prêts à l'emploi pour vos projets",
        "hero.shop": "Acheter Maintenant",
        "hero.demo": "Voir la Démo",

        "products.title": "Produits en Vedette",
        "products.subtitle": "Actifs numériques de haute qualité créés par des experts",
        "products.buy": "Acheter",
        "products.add_to_cart": "Ajouter au Panier",
        "products.rating": "Note",
        "products.category": "Catégorie",

        "features.secure": "Paiement Sécurisé",
        "features.secure_desc": "Chiffrement SSL 256-bit pour toutes les transactions",
        "features.instant": "Livraison Instantanée",
        "features.instant_desc": "Obtenez vos fichiers immédiatement après le paiement",
        "features.global": "Paiements Mondiaux",
        "features.global_desc": "PayPal, Cartes, Apple Pay, Google Pay acceptés",

        "checkout.title": "Paiement Sécurisé",
        "checkout.step1": "1. Panier",
        "checkout.step2": "2. Paiement",
        "checkout.step3": "3. Confirmation",
        "checkout.cart_title": "Votre Panier",
        "checkout.subtotal": "Sous-total",
        "checkout.tax": "Taxes",
        "checkout.total": "Total",
        "checkout.payment_method": "Méthode de Paiement",
        "checkout.email": "Adresse Email",
        "checkout.pay_button": "Finaliser le Paiement",
        "checkout.success_title": "Merci !",
        "checkout.success_desc": "Votre commande a été passée avec succès.",
        "checkout.download_info": "Votre lien de téléchargement sera envoyé par email sous 5 minutes.",
        "checkout.continue_shopping": "Continuer les Achats",

        "footer.brand": "Marché d'actifs numériques professionnels",
        "footer.links": "Liens Rapides",
        "footer.payment": "Nous Acceptons",
        "footer.copyright": "Tous droits réservés.",

        "product.files_included": "Fichiers Inclus",
        "product.description": "Description",
        "product.features": "Fonctionnalités",
        "product.requirements": "Exigences",
        "product.changelog": "Journal des Modifications",

        "msg.added_to_cart": "Ajouté au panier !",
        "msg.payment_processing": "Traitement du paiement...",
        "msg.payment_success": "Paiement réussi !",
        "msg.payment_failed": "Échec du paiement. Veuillez réessayer.",
        "msg.email_required": "L'email est requis",
        "msg.invalid_email": "Email invalide"
    },

    es: {
        "site.title": "StudioCrache - Mercado de Activos Digitales",
        "site.tagline": "Activos Digitales Profesionales",

        "nav.products": "Productos",
        "nav.about": "Nosotros",
        "nav.contact": "Contacto",
        "nav.login": "Iniciar Sesión",
        "nav.register": "Registrarse",

        "hero.title": "Activos Digitales Profesionales",
        "hero.subtitle": "Descarga plantillas, scripts y herramientas listas para usar en tus proyectos",
        "hero.shop": "Comprar Ahora",
        "hero.demo": "Ver Demo",

        "products.title": "Productos Destacados",
        "products.subtitle": "Activos digitales de alta calidad creados por expertos",
        "products.buy": "Comprar",
        "products.add_to_cart": "Añadir al Carrito",
        "products.rating": "Valoración",
        "products.category": "Categoría",

        "features.secure": "Pago Seguro",
        "features.secure_desc": "Cifrado SSL de 256 bits para todas las transacciones",
        "features.instant": "Entrega Instantánea",
        "features.instant_desc": "Obtén tus archivos inmediatamente después del pago",
        "features.global": "Pagos Globales",
        "features.global_desc": "PayPal, Tarjetas, Apple Pay, Google Pay aceptados",

        "checkout.title": "Pago Seguro",
        "checkout.step1": "1. Carrito",
        "checkout.step2": "2. Pago",
        "checkout.step3": "3. Confirmación",
        "checkout.cart_title": "Tu Carrito",
        "checkout.subtotal": "Subtotal",
        "checkout.tax": "Impuestos",
        "checkout.total": "Total",
        "checkout.payment_method": "Método de Pago",
        "checkout.email": "Correo Electrónico",
        "checkout.pay_button": "Completar Pago",
        "checkout.success_title": "¡Gracias!",
        "checkout.success_desc": "Tu pedido se ha realizado con éxito.",
        "checkout.download_info": "Tu enlace de descarga se enviará a tu email en 5 minutos.",
        "checkout.continue_shopping": "Seguir Comprando",

        "footer.brand": "Mercado de activos digitales profesionales",
        "footer.links": "Enlaces Rápidos",
        "footer.payment": "Aceptamos",
        "footer.copyright": "Todos los derechos reservados.",

        "product.files_included": "Archivos Incluidos",
        "product.description": "Descripción",
        "product.features": "Características",
        "product.requirements": "Requisitos",
        "product.changelog": "Registro de Cambios",

        "msg.added_to_cart": "¡Añadido al carrito!",
        "msg.payment_processing": "Procesando pago...",
        "msg.payment_success": "¡Pago exitoso!",
        "msg.payment_failed": "Pago fallido. Inténtalo de nuevo.",
        "msg.email_required": "El email es obligatorio",
        "msg.invalid_email": "Email inválido"
    }
};

// Country to Language Mapping
const countryLanguageMap = {
    // Arabic speaking
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'MA': 'ar', 'DZ': 'ar', 'TN': 'ar', 'LY': 'ar',
    'JO': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'KW': 'ar', 'QA': 'ar', 'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'PS': 'ar',

    // French speaking
    'FR': 'fr', 'CA': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr',
    'DZ': 'fr', 'MA': 'fr', 'TN': 'fr', 'CI': 'fr', 'SN': 'fr', 'ML': 'fr', 'BF': 'fr', 'NE': 'fr', 'TG': 'fr', 'BJ': 'fr',

    // Spanish speaking
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
    'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',

    // English speaking (default)
    'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en', 'SG': 'en', 'HK': 'en',
    'PH': 'en', 'MY': 'en', 'PK': 'en', 'NG': 'en', 'KE': 'en', 'GH': 'en', 'TZ': 'en', 'UG': 'en', 'RW': 'en'
};

// Default language
const DEFAULT_LANGUAGE = 'en';

// i18n Class
class I18n {
    constructor() {
        this.currentLang = DEFAULT_LANGUAGE;
        this.translations = translations;
        this.init();
    }

    async init() {
        // 1. Check saved preference
        const saved = localStorage.getItem('language');
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
        } else {
            // 2. Try to detect from browser
            await this.detectLanguage();
        }

        this.applyTranslations();
        this.setupLanguageSelector();
    }

    async detectLanguage() {
        // Try to get country from IP API (optional)
        try {
            // Using a free IP geolocation service
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            const country = data.country_code;
            if (country && countryLanguageMap[country]) {
                this.currentLang = countryLanguageMap[country];
                localStorage.setItem('language', this.currentLang);
            }
        } catch (e) {
            // Fallback to browser language
            const browserLang = navigator.language.split('-')[0];
            if (this.translations[browserLang]) {
                this.currentLang = browserLang;
                localStorage.setItem('language', this.currentLang);
            }
        }
    }

    t(key, params = {}) {
        const langTranslations = this.translations[this.currentLang] || this.translations[DEFAULT_LANGUAGE];
        let text = langTranslations[key] || this.translations[DEFAULT_LANGUAGE][key] || key;

        // Replace parameters
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });

        return text;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.applyTranslations();
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    }

    applyTranslations() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Update HTML lang and dir
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    }

    setupLanguageSelector() {
        // Create language selector dropdown
        const selector = document.createElement('select');
        selector.id = 'language-selector';
        selector.className = 'language-selector';

        const languages = [
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ar', name: 'العربية', flag: '🇸🇦' },
            { code: 'fr', name: 'Français', flag: '🇫🇷' },
            { code: 'es', name: 'Español', flag: '🇪🇸' }
        ];

        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = `${lang.flag} ${lang.name}`;
            if (lang.code === this.currentLang) option.selected = true;
            selector.appendChild(option);
        });

        selector.addEventListener('change', (e) => this.setLanguage(e.target.value));

        // Add to header
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.insertBefore(selector, headerActions.firstChild);
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize on DOM ready
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    window.i18n = i18n;
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, translations, countryLanguageMap };
}