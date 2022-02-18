import "./App.css";
import JournalEntry from "./components/JournalEntry";
import NavBar from "./components/NavBar";
import data from "./data";

export default function App() {
  const entries = data.map((entry, index, entries) => {
    console.log(index);
    return (
      <>
        <JournalEntry
          key={entry.id}
          hr={index + 1 != entries.length ? true : false}
          entry={entry}
        />{" "}
      </>
    );
  });
  return (
    <div>
      <NavBar /> <section>{entries}</section>
    </div>
  );
}
