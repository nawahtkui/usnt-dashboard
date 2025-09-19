#!/bin/bash

# -----------------------------
# سكربت إعداد البيئة والنشر
# -----------------------------

PROJECT_DIR=~/NawahToken
ENV_FILE="$PROJECT_DIR/.env"

echo "🔹 الانتقال إلى مجلد المشروع..."
cd $PROJECT_DIR || { echo "❌ مجلد المشروع غير موجود"; exit 1; }

# إنشاء ملف .env إذا لم يكن موجودًا
if [ ! -f "$ENV_FILE" ]; then
    echo "🔹 إنشاء ملف .env"
    touch "$ENV_FILE"
fi

echo "🔹 يرجى إدخال مفتاح المحفظة (PRIVATE_KEY):"
read -r PRIVATE_KEY
echo "🔹 يرجى إدخال رابط RPC شبكة الاختبار (RPC_TESTNET):"
read -r RPC_TESTNET
echo "🔹 يرجى إدخال رابط RPC الشبكة الرئيسية (RPC_MAINNET):"
read -r RPC_MAINNET

# كتابة القيم في .env
cat > "$ENV_FILE" <<EOL
PRIVATE_KEY=$PRIVATE_KEY
RPC_TESTNET=$RPC_TESTNET
RPC_MAINNET=$RPC_MAINNET
EOL

echo "✅ ملف .env تم إنشاؤه وتحديثه بنجاح."

# تثبيت Hardhat والإضافات إذا لم تكن موجودة
echo "🔹 تثبيت Hardhat والإضافات الأساسية..."
npm install --save-dev hardhat@latest @nomiclabs/hardhat-ethers dotenv

# التحقق من النسخة
npx hardhat --version

# ترجمة العقود
echo "🔹 ترجمة العقود..."
npx hardhat compile

echo "✅ العقود جاهزة للنشر."

# نشر على Testnet
echo "🔹 نشر العقد على Testnet..."
npx hardhat run deploy.js --network testnet

echo "🔹 بعد التأكد من Testnet، يمكن نشر العقد على Mainnet بهذا الأمر:"
echo "npx hardhat run deploy.js --network mainnet"
