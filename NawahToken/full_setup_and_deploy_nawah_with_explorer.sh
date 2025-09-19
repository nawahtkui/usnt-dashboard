#!/bin/bash
echo "🔹 بدء إعداد ونشر NawahToken..."

# الانتقال إلى مجلد المشروع
cd "$(dirname "$0")" || exit

# تحميل متغيرات البيئة
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo "🔹 إنشاء ملف .env..."
  touch .env
fi

# إدخال PRIVATE_KEY
if [ -z "$PRIVATE_KEY" ]; then
  read -p "🔹 أدخل PRIVATE_KEY: " PRIVATE_KEY
  echo "PRIVATE_KEY=$PRIVATE_KEY" >> .env
fi

# إدخال RPC_TESTNET
if [ -z "$RPC_TESTNET" ]; then
  read -p "🔹 أدخل RPC_TESTNET: " RPC_TESTNET
  echo "RPC_TESTNET=$RPC_TESTNET" >> .env
fi

# إدخال RPC_MAINNET (اختياري)
if [ -z "$RPC_MAINNET" ]; then
  read -p "🔹 أدخل RPC_MAINNET (يمكن تركه فارغًا): " RPC_MAINNET
  echo "RPC_MAINNET=$RPC_MAINNET" >> .env
fi

echo "🔹 تثبيت الحزم اللازمة..."
npm install --legacy-peer-deps

echo "🔹 تجميع العقد..."
npx hardhat compile

echo "🔹 نشر العقد على Testnet..."
TESTNET_OUTPUT=$(npx hardhat run deploy.js --network testnet)

# استخراج عنوان العقد من المخرجات
CONTRACT_ADDRESS=$(echo "$TESTNET_OUTPUT" | grep -oE "0x[a-fA-F0-9]{40}")

echo "🎉 تم نشر العقد بنجاح على Testnet!"
echo "🔹 عنوان العقد: $CONTRACT_ADDRESS"

if [ ! -z "$RPC_MAINNET" ]; then
  echo "🔹 بعد التأكد من Testnet، يمكنك نشر العقد على Mainnet:"
  echo "npx hardhat run deploy.js --network mainnet"
fi

echo "🔹 روابط Explorer:"
echo "Testnet: https://testnet.bscscan.com/address/$CONTRACT_ADDRESS"
if [ ! -z "$RPC_MAINNET" ]; then
  echo "Mainnet: https://bscscan.com/address/$CONTRACT_ADDRESS"
fi

echo "✅ انتهى النشر."

