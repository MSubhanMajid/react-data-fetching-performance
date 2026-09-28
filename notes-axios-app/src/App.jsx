import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { useState } from "react";

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  function handleNoteSaved() {
    setRefreshTrigger((prev) => prev + 1);
    setEditingNote(null);
  }
  function handleNoteDelete() {
    setRefreshTrigger((prev) => prev + 1);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="mb-6 text-2xl font-bold">My Notes</h1>
        <NoteForm
          onNoteSaved={handleNoteSaved}
          editingNote={editingNote}
          onCancelEdit={() => setEditingNote(null)}
        />
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Notes..."
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="">Default Order</option>
            <option value="title">Title (A - Z)</option>
            <option value="-title">Title (Z - A)</option>
          </select>
        </div>
        <NotesList
          refreshTrigger={refreshTrigger}
          onNoteDeleted={handleNoteDelete}
          onEditClick={setEditingNote}
          searchTerm={searchTerm}
          sortOrder={sortOrder}
        />
      </div>
    </>
  );
}

export default App;
