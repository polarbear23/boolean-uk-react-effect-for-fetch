import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
function AdviceSection() {
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        setAdvice(result.slip.advice);
      });
  }, []);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        setAdvice={setAdvice}
        setFavouriteAdvice={setFavouriteAdvice}
        favouriteAdvice={favouriteAdvice}
      />
      <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  );
}

export default AdviceSection;
