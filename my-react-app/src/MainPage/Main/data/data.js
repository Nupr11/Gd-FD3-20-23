import { GENERATE_CONTENT } from "../../../utils";

const SITE_TITLE = "Test Site";

const CONTENT_PARTS = [
  {
    title: "intro",
    content: GENERATE_CONTENT(40),
  },
  {
    title: "info",
    content: GENERATE_CONTENT(50),
  },
  {
    title: "questions",
    content: GENERATE_CONTENT(30),
  },

  {
    title: "end",
    content: GENERATE_CONTENT(50),
  },
];

export { CONTENT_PARTS, SITE_TITLE };
