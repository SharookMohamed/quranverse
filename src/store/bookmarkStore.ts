import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bookmark {
  surahNumber: number;
  ayahNumber: number;
  note?: string;
}

interface BookmarkState {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (surahNumber: number, ayahNumber: number) => void;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarks: [],
      addBookmark: (bookmark) =>
        set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),
      removeBookmark: (surahNumber, ayahNumber) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter(
            (b) => !(b.surahNumber === surahNumber && b.ayahNumber === ayahNumber)
          ),
        })),
    }),
    { name: 'quranverse-bookmarks' }
  )
);