export default function Register() {
  return (
    <main>
      <section>
        <h1>إنشاء حساب جديد</h1>

        <input
          type="text"
          placeholder="الاسم بالكامل"
        />

        <br /><br />

        <input
          type="text"
          placeholder="رقم الهاتف"
        />

        <br /><br />

        <input
          type="password"
          placeholder="كلمة المرور"
        />

        <br /><br />

        <select>
          <option>اختر المرحلة والصف</option>

          <optgroup label="المرحلة الابتدائية">
            <option>رابعة ابتدائي</option>
            <option>خامسة ابتدائي</option>
            <option>سادسة ابتدائي</option>
          </optgroup>

          <optgroup label="المرحلة الإعدادية">
            <option>أولى إعدادي</option>
            <option>ثانية إعدادي</option>
            <option>ثالثة إعدادي</option>
          </optgroup>

          <optgroup label="المرحلة الثانوية">
            <option>أولى ثانوي</option>
            <option>ثانية ثانوي</option>
            <option>ثالثة ثانوي</option>
          </optgroup>

        </select>

        <br /><br />

        <select>
          <option>اختر نوع الاشتراك</option>
          <option>اشتراك شهري</option>
          <option>اشتراك ترم</option>
        </select>

        <br /><br />

        <button>
          إنشاء الحساب
        </button>

      </section>
    </main>
  );
}
