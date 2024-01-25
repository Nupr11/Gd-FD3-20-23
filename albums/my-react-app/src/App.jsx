import { SITE_NAME } from "./data/data.js";
import { createContext } from "react";
import { User } from "./Pages/Users/components/UserList/components/User/User";
import { Album } from "./Pages/Albums/components/albumList/components/album/Album.jsx";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import {
  PageStart,
  PageAlbums,
  PageUsers,
  PageNotFound,
} from "./Pages/index.js";

export const appInfo = createContext({ site: { SITE_NAME } });

export const App = () => {
  return (
    <appInfo.Provider value={SITE_NAME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="intro" replace />} />
          <Route path="intro" index element={<PageStart />} />
          <Route path="albums" element={<PageAlbums />} />
          <Route path="albums/:id" element={<Album />} />
          <Route path="users" element={<PageUsers />} />
          <Route path="users/:id" element={<User />} />
          <Route path="users/:id/:albumId" element={<Album />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </appInfo.Provider>
  );
};
