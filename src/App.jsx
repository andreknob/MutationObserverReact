import React, { useState, useEffect } from "react";

const MUTATION_OBSERVE_OPTIONS = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
};

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const mutationObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        console.log("mutation:");
        console.log(mutation);
      });
    });

    mutationObserver.observe(
      document.documentElement,
      MUTATION_OBSERVE_OPTIONS
    );

    return () => mutationObserver.disconnect();
  }, []);

  const handleChange = () => setShowText((value) => !value);

  return (
    <div>
      <input type="button" value="button" onClick={handleChange}></input>
      <div style={{ marginTop: "64px" }}>{showText ? "react test" : false}</div>
    </div>
  );
}

export default App;
