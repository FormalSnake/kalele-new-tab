import React from "react";

function SearchBox() {
  return (
    <form method={"get"} id="knopkes" action="https://google.com/search?q=">
      <input id="textBox" size="40" name="q" />
    </form>
  );
}
export default SearchBox;
