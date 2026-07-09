import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <main>
      <section>
        <h1>كورسات الخوارزمي</h1>

        <CourseCard
          title="رياضيات أولى ثانوي"
          description="شرح المنهج كامل بطريقة سهلة"
        />

        <CourseCard
          title="رياضيات ثانية ثانوي"
          description="شرح وتمارين واختبارات"
        />

        <CourseCard
          title="رياضيات ثالثة ثانوي"
          description="مراجعات وحل أسئلة"
        />

      </section>
    </main>
  );
}
