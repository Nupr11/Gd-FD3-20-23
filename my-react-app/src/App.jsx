import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";

import {
  PageAbout,
  PageStart,
  PageTerms,
  PagePost,
  PageIntro,
  PageNotFound,
} from "./Pages/index.js";

export const UserId = () => {
  const { userId } = useParams();
  return <h4>user ID:{userId}</h4>;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<PageStart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/intro" element={<PageIntro />} />
        <Route path="/terms" element={<PageTerms />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/post" element={<PagePost />}>
          <Route path="/post/:userId" element={<UserId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
