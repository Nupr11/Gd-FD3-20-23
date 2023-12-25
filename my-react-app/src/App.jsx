import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";

import { PageNotFound } from "./PageNotFound";
import { PageMain } from "./MainPage/Main";
import { PageAbout, PageStart, PageTerms, PagePost } from "./Pages/index.js";

export const UserId = () => {
  const { userId } = useParams();
  return <h4>user ID:{userId}</h4>;
};

export let routes = [
  {
    path: "/start",
    element: <PageStart />,
    title: "start",
  },
  {
    path: "/about",
    element: <PageAbout />,
    title: "about",
  },
  {
    path: "/terms",
    element: <PageTerms />,
    title: "terms",
  },

  {
    path: "/post",
    element: <PagePost />,
    title: "post",
  },
];

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<PageMain />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/start" element={<PageStart />} />
        <Route path="/terms" element={<PageTerms />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/post" element={<PagePost />}>
          <Route path="/post/:userId" element={<UserId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
