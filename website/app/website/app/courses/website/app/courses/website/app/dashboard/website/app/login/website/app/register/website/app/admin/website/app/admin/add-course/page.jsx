export default function AddCourse() {
  return (
    <main>
      <section>

        <h1>
          إضافة كورس جديد 📚
        </h1>

        <p>
          يا مستر، اكتب بيانات الكورس هنا
        </p>

        <input
          type="text"
          placeholder="اسم الكورس"
        />

        <br /><br />

        <select>
          <option>اختار المرحلة</option>
          <option>ابتدائي</option>
          <option>إعدادي</option>
          <option>ثانوي</option>
        </select>

        <br /><br />

        <select>
          <option>اختار الصف</option>
          <option>رابعة ابتدائي</option>
          <option>خامسة ابتدائي</option>
          <option>سادسة ابتدائي</option>
          <option>أولى إعدادي</option>
          <option>ثانية إعدادي</option>
          <option>ثالثة إعدادي</option>
          <option>أولى ثانوي</option>
          <option>ثانية ثانوي</option>
          <option>ثالثة ثانوي</option>
        </select>

        <br /><br />

        <input
          type="text"
          placeholder="رابط الفيديو"
        />

        <br /><br />

        <input
          type="text"
          placeholder="رابط ملف PDF"
        />

        <br /><br />

        <button>
          حفظ الكورس ✅
        </button>

      </section>
    </main>
  );
}
