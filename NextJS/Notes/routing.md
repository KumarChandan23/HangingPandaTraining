
# Routing
- routing means desiding which component should be shown based on the URL path.
- in Nextjs, we do not need to set up manually routes like React.
- there is built in routing.

# Types of Routing
1. Static routing
    - Defined by folder and file name
    - ex: app/contact/page.tsx => /contact

2. Dynamic routing
    - User square brecket [] for dynamic segment
    - ex: app/products/[id]/page.tsx => /products/:id
    - here [id] is folder name and page.tsx is file

3. Nested routing
    - placing folder withing folder is known as nexted routing
    - ex: app/dashboard/settings/page.tsx => dashboard/settings

4. Layout routing
    - It lets you define common UI structure (header, footer, sidebase) just once in layout.tsx file.
    
5. Route Group 
    - it is folder that help to organise routes withou affecting url
    - The folder name must be wrapped into ()
    - ex: app/students/mohan => students/mohan // without route group
    - ex: app/(students)/mohan => /mohan  // with route group

6. Parallel Routes
    - parallel route lets render multiple components at a same time in differenct section of UI.
    - different section means tab, pannel, or sidebars 