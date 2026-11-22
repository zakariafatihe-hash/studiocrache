# StudioCrache - PowerShell Commands
# افتح هذا الملف كلاستر للنسخ واللصق

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "StudioCrache - Quick Commands" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan

# القائمة A: git operations
Write-Host "`n[Git Operations]":ForegroundColor Green

# 1. رفع تغييرات
Write-Host "# رفع PayPal Integration" -ForegroundColor DarkGray
'git add .'
'git commit -m "Add PayPal Sandbox integration"'
'git push -u origin main'

# 2. الانتقال للمجلد
Write-Host "`n# الانتقال للمجلد" -ForegroundColor DarkGray
'cd "C:\Users\DeLL\Documents\New folder\studiocrache"'

# 3. رفع الموقع الجديد
Write-Host "`n# رفع تحديثات الموقع" -ForegroundColor DarkGray
'git add .'
'git commit -m "Update checkout page with PayPal integration"'
'git push -u origin main'

Write-Host ""
Write-Host "[PayPal Testing]";
Write-Host "# اختبار حساب PayPal Sandbox" -ForegroundColor DarkGray;
'curl -X POST "https://api.sandbox.paypal.com/v1/oauth2/token" -H "Accept: application/json" -H "Accept-Language: en_US" -d "grant_type=client_credentials" -u "BAA_rXNEfSDVXCKEMpjSRe_bbL9BjekKbwKav_2q6WNWAgHfYPECCc4s347A-3P4yvpeBmel99KZGUY6vM:"';

Write-Host "";
Write-Host "[DNS Verification]" -ForegroundColor Green;
'nslookup studiocrache.com';
'dig studiocrache.com +short';

Write-Host "";
Write-Host "[Product List]" -ForegroundColor Green;
'$products = @"
{
  "products": [
    {"id":1,"title":"Dashboard Template","price":29.99,"category":"Templates"},
    {"id":2,"title":"Python Scripts","price":24.99,"category":"Scripts"},
    {"id":3,"title":"Icons Pack","price":15.99,"category":"Graphics"},
    {"id":4,"title":"SEO Guide","price":19.99,"category":"Guides"},
    {"id":5,"title":"Excel Macros","price":12.99,"category":"Tools"},
    {"id":6,"title":"Business Cards","price":9.99,"category":"Templates"},
    {"id":7,"title":"React Library","price":49.99,"category":"Code"},
    {"id":8,"title":"Notion Templates","price":22.99,"category":"Templates"}
  ]
}
"@;
$products | ConvertFrom-Json | Select-Object title,price,category | Format-Table -AutoSize';

Write-Host "";
Write-Host "[Site Status]" -ForegroundColor Green;
'curl -I https://studiocrache.com';
'curl -I https://zakariafatihe-hash.github.io/studiocrache/';

Write-Host "";
Write-Host "[========================================]" -ForegroundColor Cyan;
Write-Host "Use: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned" -ForegroundColor Yellow;
Write-Host "Then run this script: .\commands.ps1" -ForegroundColor Yellow;
Write-Host "[========================================]" -ForegroundColor Cyan;