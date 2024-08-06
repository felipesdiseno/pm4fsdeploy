import Caurosel from "@/components/Caurosel";
import OpinionComponent from "@/components/OpinionComponent";
function LandingPage() {
  return (
    <div>
      <Caurosel />
      <div className="mb-6 mt-1p-2 flex justify-center items-center space-x-4">
        <OpinionComponent />
      </div>
    </div>
  );
}

export default LandingPage;
