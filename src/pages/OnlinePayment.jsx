import PagesHeader from "../components/PagesHeader";
function OnlinePayment() {
  return (
    <div>
      <PagesHeader
        title="Online Payment"
        description={
          <>
            Book Your Pet’s Comprehensive <br /> Wellness Appointment Now
          </>
        }
      />
      <div className="h-[500px]"></div>
    </div>
  );
}
export default OnlinePayment;
