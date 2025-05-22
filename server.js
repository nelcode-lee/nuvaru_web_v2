const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      // Custom 404 handling
      const validPaths = [
        "/",
        "/services",
        "/case-studies",
        "/chat",
        "/custom-404",
        // Add all your valid routes here
        "/services/ai-readiness-assessment",
        "/services/custom-ai-solutions",
        "/services/process-automation",
        "/services/data-analysis-optimization",
        "/services/gdpr-compliance-solutions",
        "/services/ai-implementation-training",
      ]

      // Check if path starts with any valid path
      const isValidPath = validPaths.some(
        (path) =>
          pathname === path ||
          pathname.startsWith(`${path}/`) ||
          pathname.startsWith("/_next/") ||
          pathname.startsWith("/api/") ||
          pathname.startsWith("/images/") ||
          pathname.startsWith("/fonts/") ||
          pathname.startsWith("/favicon"),
      )

      if (!isValidPath) {
        // Redirect to custom 404 page
        app.render(req, res, "/custom-404", query)
        return
      }

      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error("Error occurred handling", req.url, err)
      res.statusCode = 500
      res.end("Internal Server Error")
    }
  })
    .once("error", (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
