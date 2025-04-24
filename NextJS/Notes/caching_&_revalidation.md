# Caching
- caching referse to storing data or resource to avoid fetching them repeatedly.
- caching improves the performance of our application.

# In NextJS caching can be handled in several ways.
1. Static File Caching
- when building static file with NextJS like images, css, or js are cached automatically by the browser.
- Nextjs uses HTTP headers for static file caching and it sets by default for 60 seconds.
- We can control caching behavior using custom header in need. 

2. Data caching server side
- When fetchin data we can cach data in differenct layers
    1. ON the server (API level): 
    2. Client side: using  libraries like SWR and TenStack(React Query)

# Revalidation in Next.js
- revalidation is the process of updaingn cached data to ensure it's fresh
- Nextjs provide built-in method for revalidation static content.

1. Static Site Generation (SSG) with Static Site Regeneration (SSR)
    - It allow you to regenerate static pages after initial build.
    - SSR insures that the user gets fresh updated data witout full Rebuild of entire site

2. On-demand Revalidation
    - 