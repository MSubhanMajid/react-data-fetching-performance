import { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import NoteCard from "./NoteCard";

const PAGE_SIZE = 6;

function NotesList({
  refreshTrigger,
  onNoteDeleted,
  onEditClick,
  searchTerm,
  sortOrder,
}) {
  const [allNotes, setAllNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true);
    axiosClient
      .get("/notes")
      .then((response) => {
        setAllNotes(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load notes.");
        setLoading(false);
      });
  }, [refreshTrigger]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, sortOrder]);

  if (loading) return <p className="text-gray-500">Loading notes...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  // 1. Filter by search term (title or content)
  let filteredNotes = allNotes.filter((note) => {
    const term = searchTerm.toLowerCase();
    return (
      note.title.toLowerCase().includes(term) ||
      note.content.toLowerCase().includes(term)
    );
  });

  // 2. Sort
  if (sortOrder === "title") {
    filteredNotes = [...filteredNotes].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  } else if (sortOrder === "-title") {
    filteredNotes = [...filteredNotes].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
  }

  // 3. Paginate
  const totalPages = Math.ceil(filteredNotes.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedNotes = filteredNotes.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  return (
    <div>
      {paginatedNotes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onNoteDeleted={onNoteDeleted}
              onEditClick={onEditClick}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default NotesList;


// import { useState, useEffect } from 'react';
// import axiosClient from '../api/axiosClient';
// import NoteCard from './NoteCard';

// const PAGE_SIZE = 6;

// function NotesList({ refreshTrigger, onNoteDeleted, onEditClick, searchTerm, sortOrder }) {
//   const [notes, setNotes] = useState([]);
//   const [totalCount, setTotalCount] = useState(0);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axiosClient
//       .get("/notes", {
//         params: {
//           q: searchTerm || undefined,
//           _sort: sortOrder,
//           _page: page,
//           _per_page: PAGE_SIZE,
//         },
//       })
//       .then((response) => {
//         setNotes(response.data.data);
//         setTotalCount(response.data.items);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load notes.");
//         setLoading(false);
//       });
//   }, [refreshTrigger, searchTerm, sortOrder, page]);

//   useEffect(() => {
//     setPage(1);
//   }, [searchTerm, sortOrder]);

//   const totalPages = Math.ceil(totalCount / PAGE_SIZE);

//   if (loading) return <p className="text-gray-500">Loading notes...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div>
//       {notes.length === 0 ? (
//         <p className="text-gray-500">No notes found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {notes.map((note) => (
//             <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} onEditClick={onEditClick} />
//           ))}
//         </div>
//       )}

//       {totalPages > 1 && (
//         <div className="mt-6 flex items-center justify-center gap-2">
//           <button
//             onClick={() => setPage((p) => Math.max(p - 1, 1))}
//             disabled={page === 1}
//             className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
//           >
//             Prev
//           </button>
//           <span className="text-sm text-gray-600">
//             Page {page} of {totalPages}
//           </span>
//           <button
//             onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//             disabled={page === totalPages}
//             className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NotesList;