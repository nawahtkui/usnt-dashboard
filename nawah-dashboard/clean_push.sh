#!/bin/bash

# 1️⃣ الانتقال إلى مجلد المشروع
cd ~/nawah-dashboard || { echo "Folder not found!"; exit 1; }

# 2️⃣ عرض جميع remote الحالية
echo "Current remotes:"
git remote -v

# 3️⃣ إزالة كل remote غير origin
for remote in $(git remote); do
    if [ "$remote" != "origin" ]; then
        git remote remove $remote
        echo "Removed remote: $remote"
    fi
done

# 4️⃣ التأكد من الوضع النهائي
echo "Remotes after cleanup:"
git remote -v

# 5️⃣ إضافة كل الملفات الجديدة والمعدلة
git add .

# 6️⃣ حفظ التغييرات برسالة واضحة
git commit -m "Update project files after cleanup" 2>/dev/null || echo "No changes to commit."

# 7️⃣ سحب آخر التحديثات من origin قبل الدفع
git pull origin main --rebase

# 8️⃣ رفع كل التحديثات إلى المستودع الرسمي
git push -u origin main --force

echo "✅ Cleanup and push completed successfully."
