import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
function ArtsSection() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/`)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.data);
        setArt(result.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div class="scroll-container">
        <ArtList artworks={art} />
      </div>
    </section>
  );
}

export default ArtsSection;
