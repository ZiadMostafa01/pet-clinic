function Wallet() {
  return (
    <div className="my-10">
      <div className="text-center mt-10 mx-auto w-[300px] sm:w-[500px] md:w-[600px] space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">شحن الكود</h2>
          <p>
            اكتب الكود هنا علشان تشحن الرصيد في محفظتك وتبدأ تشتري باكدجات أو
            كورسات بسهولة، اكتب الكود هنا وهنضيفلك الرصيد فورًا
          </p>
        </div>
        <div className="space-y-6">
          <form action="">
            <div className="w-full">
              <input
                placeholder="اكتب الكود هنا"
                type="text"
                className="w-full border-2 border-gray-300 rounded-md px-4 py-3 focus:outline-green-600"
              />
            </div>
          </form>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-transparent hover:text-green-600 border-2 border-green-600 text-white font-semibold py-2 px-12 rounded-md transition duration-300"
            >
              شحن الكود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wallet;
