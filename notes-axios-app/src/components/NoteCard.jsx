import axiosClient from "../api/axiosClient";
function NoteCard({ note, onNoteDeleted, onEditClick }) {
  function handleDelete() {
    const confirmed = window.confirm("Want To Delete This Note?");
    if (!confirmed) return;

    axiosClient
      .delete(`/notes/${note.id}`)
      .then(() => {
        onNoteDeleted();
      })
      .catch(() => {
        alert("Failed To Delete Note");
      });
  }
  return (
    <div className="rounded-xl border border-gray-500 bg-gray-200 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900">{note.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{note.content}</p>
      <div className="mt-4 flex gap-2 border-t border-gray-100 pt-3">
        <button
          onClick={() => onEditClick(note)}
          className="flex-1 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600 hover:bg-blue-100"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
