import { SITE_NAME } from "./data/data.js";
import { createContext } from "react";
import {
  Routes,
  Route,
  useParams,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import {
  PageAbout,
  PageStart,
  PageTerms,
  PagePost,
  PageIntro,
  PageNotFound,
} from "./Pages/index.js";

export const UserId = () => {
  const { id } = useParams();
  return <h4>user ID: {id}</h4>;
};

export const appInfo = createContext({ site: { SITE_NAME } });

export const App = () => {
  return (
    <appInfo.Provider value={SITE_NAME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/start" replace />} />
          <Route path="/start" index element={<PageStart />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/intro" element={<PageIntro />} />
          <Route path="/post" element={<PagePost />}>
            <Route path="/post/:id" element={<UserId />} />
          </Route>
          <Route path="/terms" element={<PageTerms />} />
        </Routes>
      </BrowserRouter>
    </appInfo.Provider>
  );
};
