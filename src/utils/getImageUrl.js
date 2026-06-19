const apiHost = import.meta.env.VITE_API_HOST || "";

// Default the asset host to the API origin (drop the "/api/..." path segment).
const imageHost = (
  import.meta.env.VITE_IMAGE_HOST || apiHost.replace(/\/api\/.*$/, "")
).replace(/\/$/, "");

/**
 * Resolves a stored image reference into a usable URL.
 *
 * Absolute URLs (Cloudinary, used in production) pass through untouched; relative
 * paths like "images/foo.jpg" (local disk storage) are prefixed with the asset
 * host so they load from the backend rather than the client's own origin.
 */
export default function getImageUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return `${imageHost}/${String(path).replace(/^\//, "")}`;
}
