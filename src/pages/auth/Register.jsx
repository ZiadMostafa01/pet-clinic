import logo from "../../assets/images/logo.jpg";
import main from "../../assets/images/hero-photo.png";
import bg from "../../assets/images/funky-lines.webp";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row py-12 sm:py-0"
      style={{ background: `url(${bg})` }}
    >
      <div className="w-full md:w-3/4 mx-auto my-auto flex flex-col justify-center px-6 py-8 lg:px-16">
        <img src={logo} alt="Logo" width="400px" className="mb-6 self-center" />

        <h2 className="text-3xl font-bold text-black mb-1 text-center md:text-right">
          أنشئ <span className="text-[#3fc7f3]">حسابك الآن :</span>
        </h2>
        <p className="text-gray-600 mb-6 text-center md:text-right">
          ادخل بياناتك بشكل صحيح للحصول على أفضل تجربة داخل الموقع
        </p>

        <form id="registerForm" className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative h-12 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="firstName"
                  type="text"
                />

                <label className="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  الاسم كامل
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-1/2 w-full space-y-4">
              <div className="flex-1">
                <div className="relative h-12 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full text-right rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    id="phone"
                    type="tel"
                  />

                  <label className="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    رقم الهاتف
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative h-12 w-full min-w-[200px] text-right">
                  <input
                    className="peer h-full w-full text-right rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    id="parentPhone"
                    type="tel"
                  />

                  <label className="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    رقم هاتف ولي الأمر
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="fileInput"
                className="w-full cursor-pointer flex justify-center items-center text-center mt-4 sm:mt-0 px-4 py-4 h-full bg-blue-500 text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:text-blue-500 hover:border-blue-500 transition duration-500"
              >
                ارفع البطاقة الشخصية
              </label>
              <input type="file" id="fileInput" className="hidden" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              defaultValue=""
              id="governorate"
              className="flex-1 p-3 border border-gray-200 text-gray-400 bg-white rounded-md text-right focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                نوع التسجيل
              </option>
              <option value="online">أونلاين</option>
              <option value="center">سنتر</option>
            </select>

            <select
              defaultValue=""
              id="grade"
              className="flex-1 p-3 border rounded-md border-gray-200 bg-white text-gray-400 text-right focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                اختر الصف الدراسي
              </option>
              <option value="1">الصف الأول الثانوي</option>
              <option value="2">الصف الثاني الثانوي</option>
              <option value="3">الصف الثالث الثانوي</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative h-12 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="Password"
                  type="password"
                />

                <label className="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  كلمة السر
                </label>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative h-12 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-[7px] border border-gray-200 bg-white px-3 py-2.5 !pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="confirmPassword"
                  type="password"
                />

                <label className="before:content[' '] after:content[' '] pointer-events-none text-gray-400 absolute right-0 -top-1 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:ml-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tr-md before:border-t before:border-r before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:mr-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tl-md after:border-t after:border-l after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-r-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-l-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  تأكيد كلمة السر
                </label>
              </div>
            </div>
          </div>

          <p className="text-red-500 text-sm hidden" id="emptyError">
            يرجى ملء جميع الحقول المطلوبة.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 cursor-pointer text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            أنشئ الحساب!
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            يوجد لديك حساب بالفعل؟
            <Link
              to="/login"
              className="text-orange-500 font-semibold hover:underline mr-1"
            >
              ادخل إلى حسابك الآن!
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-center min-h-screen">
        <div className="w-[0.25vw] h-[75vh] bg-[#3fc7f3]"></div>
      </div>

      <div className="w-1/2 hidden md:flex items-center justify-center relative bg-cover bg-center">
        <img
          src={main}
          alt="شخص"
          className="w-[100vw] h-[60vh] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
export default Register;
