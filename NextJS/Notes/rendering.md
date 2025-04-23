
# Client Side Rendering (CSR)
- CSR is a method where the browser downloads minimal HTML file and jS file.
- when user requets a page 
1. browser loads a blank HTML shell.
2. JavaScript is downloaded and runs.
3. React renders the content in browser.

# Props of CSR
- Fast transition between pages (once js is loaded).
- Great for single page application.

# Cons of CSR
- Slower first load (blank page unitl js is loaded).
- poor SEO because search bot checks in html page
- in CSR intially HTML page is empty utill js is loaded
- Search bot may not wait to load the js.
- if serach bot does not find any thing, it can not recognize our page.
- thats why CSR is not SEO firendly. 

# Server Side Rendering (SSR)
- in SSR, server generates full HTML page on each request and sends it to the browser.
- When User requests a page:
1. Server runs React and generates HTML.
2. Browser recieves the full HTML page.
3. Then js loads and Hybrates the page (adds Intrativity).

# Props of SSR
- Faster first load, user sees content immediately.
- SEO firendly , Search engines sees actual html page. because server sends full html page on first load.
- Good for dynamic data per request.
# Cons of SSR
- Slightly slower for page transition.
- 