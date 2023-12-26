import { loremIpsum } from "lorem-ipsum";
import DOMPurify from "dompurify";

const GENERATE_CONTENT = (words) => loremIpsum({ count: words });

const SANITIZE_ITEM = (svg) =>
  DOMPurify.sanitize({ USE_PROFILES: { svg: true } });

export { GENERATE_CONTENT, SANITIZE_ITEM };
