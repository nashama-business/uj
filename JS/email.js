// بيانات الأسماء والبريد الإلكتروني
const data = [
    { name: "د.هاني حامد الضمور", email: " dmourh@ju.edu.jo" },
    { name: "د.طالب محمد وراد", email: "t.awad@ju.edu.jo" },
    { name: "د.سلطان نايف ابو تايه", email: "s.abutayeh@ju.edu.jo" },
    { name: "د.محمد حسين ابونصار", email: "abunaser@ju.edu.jo" },
    { name: "د.غسان محمد أومت", email: "gomet@ju.edu.jo" },
    { name: "د.علي عبد القادر الذنيبات", email: "aaaldu@ju.edu.jo" },
    { name: "د.سعيد محمود الطراونه", email: "s.tarawneh@ju.edu.jo" },
    { name: "د.مأمون محمد الدبعي", email: "mamoun@ju.edu.jo" },
    { name: "د.فايز سليم حداد", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },
    { name: "د.", email: "" },

];

// استخراج العناصر من DOM
const toggleSearchButton = document.getElementById('toggleSearch');
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const copyMessage = document.getElementById('copyMessage');

// دالة عرض جميع البيانات
function displayAllData() {
    resultsList.innerHTML = '';
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="name">${item.name}</span>
            <div>
                <span class="email">${item.email}</span>
                <button class="copy-button" data-email="${item.email}">📋</button>
            </div>
        `;
        resultsList.appendChild(listItem);

        // إضافة وظيفة النسخ عند النقر على زر النسخ
        const copyButton = listItem.querySelector('.copy-button');
        copyButton.addEventListener('click', () => {
            const email = copyButton.getAttribute('data-email'); // استخراج البريد الإلكتروني

            // إنشاء عنصر textarea مؤقت لتحديد النص ونسخه
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = email;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy'); // نسخ النص
            document.body.removeChild(tempTextArea); // إزالة العنصر المؤقت

            // عرض رسالة تأكيد النسخ
            showCopyMessage(`تم نسخ: ${email}`);
        });
    });
}

// دالة البحث
function search() {
    const query = searchInput.value.toLowerCase().trim();
    resultsList.innerHTML = '';

    if (query === '') {
        // إذا كان مربع البحث فارغًا، عرض جميع البيانات
        displayAllData();
        return;
    }

    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(query);
    });

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="name">${item.name}</span>
                <div>
                    <span class="email">${item.email}</span>
                    <button class="copy-button" data-email="${item.email}">📋</button>
                </div>
            `;
            resultsList.appendChild(listItem);

            // إضافة وظيفة النسخ عند النقر على زر النسخ
            const copyButton = listItem.querySelector('.copy-button');
            copyButton.addEventListener('click', () => {
                const email = copyButton.getAttribute('data-email'); // استخراج البريد الإلكتروني

                // إنشاء عنصر textarea مؤقت لتحديد النص ونسخه
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = email;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy'); // نسخ النص
                document.body.removeChild(tempTextArea); // إزالة العنصر المؤقت

                // عرض رسالة تأكيد النسخ
                showCopyMessage(`تم نسخ: ${email}`);
            });
        });
    } else {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'لا توجد نتائج.';
        resultsList.appendChild(noResultsItem);
    }
}

// دالة عرض رسالة النسخ
function showCopyMessage(message) {
    copyMessage.textContent = message;
    copyMessage.classList.add('active');
    setTimeout(() => {
        copyMessage.classList.remove('active');
    }, 2000); // إخفاء الرسالة بعد ثانيتين
}

// عرض جميع البيانات عند التحميل
displayAllData();

// تتبع الكتابة مباشرة في مربع البحث
searchInput.addEventListener('input', () => {
    search();
});

// إظهار/إخفاء مربع البحث عند النقر على الزر 🔍
toggleSearchButton.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
        searchInput.focus(); // تركيز الماوس على مربع البحث
    } else {
        searchInput.style.display = 'none';
    }
});