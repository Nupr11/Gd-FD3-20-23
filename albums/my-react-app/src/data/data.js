import SVG_FB from "../assets/svg/facebook.svg";
import SVG_YOUTUBE from "../assets/svg/youtube.svg";
import SVG_GITHUB from "../assets/svg/github.svg";
import SVG_TWITTER from "../assets/svg/twitter.svg";
import SVG_INSTAGRAM from "../assets/svg/instagram.svg";

const SITE_NAME = {
  title: "Test Site",
  path: "/intro",
};

const NAV_LINKS = [
  {
    title: "albums",
    path: "/albums",
  },
  {
    title: "users",
    path: "/users",
  },
];

const SOCIAL_LINK = [
  {
    title: "github",
    path: SVG_GITHUB,
    to: "youtube.com",
    id: 1,
  },
  {
    title: "facebook",
    path: SVG_FB,
    to: "facebook.com",
    id: 2,
  },
  {
    title: "twitter",
    path: SVG_TWITTER,
    to: "twitter.com",
    id: 3,
  },
  {
    title: "instagram",
    path: SVG_INSTAGRAM,
    to: "instagram.com",
    id: 4,
  },
  {
    title: "youtube",
    path: SVG_YOUTUBE,
    id: 5,
  },
];

export { SITE_NAME, NAV_LINKS, SOCIAL_LINK };
