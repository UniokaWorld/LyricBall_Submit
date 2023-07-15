mergeInto(LibraryManager.library, {
  SongSetSend: function (id, url) {
    const url_str = UTF8ToString(url);
    SongSet(id, url_str);
  },
});
