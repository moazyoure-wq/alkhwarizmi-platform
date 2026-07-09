import Link from "next/link";

export default function Courses() {

  const courses = [
    {
      id: 1,
      title: "رياضيات الصف الرابع الابتدائي",
      desc: "شرح المنهج + تدريبات"
    },
    {
      id: 2,
      title: "رياضيات الصف الأول الإعدادي",
      desc: "شرح كامل وحل امتحانات"
    },
    {
      id: 3,
      title: "رياضيات الصف الثالث الثانوي",
      desc: "شرح متقدم ومراجعات نهائية"
    }
  ];


  return (
    <main className="page">

      <section className="container">

        <h1 className="title">
          📚 الكورسات
        </h1>

        <p className="subtitle">
          اختر الكورس المناسب وابدأ التعلم
        </p>


        <div>

          {courses.map((course)=>(

            <div 
              className="card"
              key={course.id}
              style={{marginTop:"20px"}}
            >

              <h2>
                {course.title}
              </h2>

              <p>
                {course.desc}
              </p>


              <Link href={`/courses/${course.id}`}>
                <button className="btn">
                  دخول الكورس
                </button>
              </Link>


            </div>

          ))}

        </div>


      </section>

    </main>
  );
}
