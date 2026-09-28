import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
function NoteForm({ onNoteSaved, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setSubmitting(true);
    setError(null);

    const request = editingNote
      ? axiosClient.put(`/notes/${editingNote.id}`, { title, content })
      : axiosClient.post("/notes", { title, content });

    request
      .then(() => {
        setTitle("");
        setContent("");
        setSubmitting(false);
        onNoteSaved();
      })
      .catch((err) => {
        const serverMessage = err.response?.data?.message;
        setError(serverMessage || "Failed To Add Note. Try Again.");
        setSubmitting(false);
      });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-3 rounded-xl border border-gray-500 bg-gray-100 p-4 shadow-sm"
    >
      <h3 className="text-sm font-semibold text-gray-500">
        {editingNote ? "Editing Note" : "New Note"}
      </h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full rounded-lg border border-gray-700 px-3 py-2 text-sm"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        rows={3}
        className="w-full rounded-lg border border-gray-700 px-3 pu-2 shadow-sm"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting ? "Saving..." : editingNote ? "Update Note" : "Add Note"}
        </button>
        {editingNote && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
