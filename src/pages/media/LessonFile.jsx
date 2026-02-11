import pdf from "../../assets/files/Assignments.docx.pdf";
function LessonFile() {
  return (
    <div
      id="pdf"
      className="flex flex-col items-center justify-center content-section max-w-4xl mx-auto w-full text-center"
    >
      <h2 className="text-3xl font-bold mb-10 mt-5">ملف الحصة</h2>
      <iframe src={pdf} className="w-full h-[80vh] rounded border"></iframe>
    </div>
  );
}
export default LessonFile;
