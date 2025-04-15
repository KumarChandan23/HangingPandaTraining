
# Syllabus

🧠 1. Introduction to TanStack Query
- What is TanStack Query (formerly React Query)?
- Why use it?
- Benefits over manual fetching or Redux (caching, auto-retry, stale data, etc.)
- Installation and setup

🧱 2. Core Concepts
- QueryClient and QueryClientProvider
- Queries and Mutations
- Query keys
- Caching & background refetching
- Auto retries and exponential backoff
- Devtools integration (@tanstack/react-query-devtools)

🟢 3. Queries
- useQuery() basic syntax
- Query key structure (string, array, dynamic keys)
- Fetching lists and individual records
- Handling loading, error, and success states
- Refetching manually (refetch)
- enabled: false queries (lazy loading)
- Polling with refetchInterval

✏️ 4. Mutations
- useMutation() basic syntax
- Triggering updates (POST, PUT, DELETE)
- Accessing mutation states: isLoading, isSuccess, isError
- Optimistic updates
- Rolling back on error
- Invalidating queries after mutation

🗂️ 5. Query Invalidation & Refetching
- queryClient.invalidateQueries() to refresh after mutation
- queryClient.refetchQueries() for manual control
- Refetch on window focus and network reconnect
- Stale time (staleTime) vs cache time (cacheTime)

🧮 6. Query Key Management
- Importance of structured query keys
- Nested keys (e.g., ['users', userId])
- Global cache key naming strategy

📦 7. Query Caching & Performance
- How caching works
- Persistent cache with localStorage or IndexedDB
- Hydration/dehydration for SSR/Next.js
- Memory vs persistent cache

🔁 8. Dependent Queries
- Chaining queries
- enabled flag for conditional fetching
- Wait for previous query to complete

🧪 9. Pagination & Infinite Queries
- Traditional pagination with pageParam
- Infinite scroll with useInfiniteQuery
- Fetching next/prev pages

🧰 10. React Query Devtools
- Installation & usage
- Inspect cache, queries, mutations in devtools panel

🧠 11. Advanced Features
- Prefetching queries (for better UX)
- Background sync
- Placeholders & initial data
- Select, transform and memoize query data
- Retry strategies & error boundaries
- Custom hooks with query logic
- Suspense integration

⚙️ 12. Server-Side Rendering (SSR)
- Hydration & dehydration for Next.js
- Setup for SSR prefetching
- Persist and restore cache

🔒 13. Authentication with TanStack
- Protected API routes
- Injecting auth token in headers
- Handling 401 errors
- Logout on token expiry

📈 14. Best Practices & Optimization
- Avoid over-fetching
- Shared query keys
- Modular custom hooks
- Query key naming patterns
- UI updates without refetching (optimistic update)

📚 15. Real-world Examples
- Todo App
- E-commerce product catalog
- Admin dashboard with user editing
- Blog with pagination and nested comments



# What is React Query
- React query is powerfull data fetching and state management library.
- It is design to simplyfiy handling of server side state.
- It is mainly usefull for Data fetning, Create Data,  Updating Data, Deleting Data, Caching, background updates, pagination, etc...

▶️ In React
- Manually we have to manage state like- loading, error, success.
- Manually refetching data after mutations.
- Manually state syncing between components.
- No built-in caching
- Need Redux and Context APi for state management

✅ In React Query
- Automatic caching
- Background refetching
- Smart re-fetch on window focus
- Polling. -> this ensures that the you always get most up-to-date data
- Passination and Infinite Scroll
- Retry on failuar.
- Quer invalidation.
- Works with all api(axios , fetch, etc...)

# Automatic Caching
- caching is the process of storing fetched data remporarily.So that next time, If you need that same data you can easily retrive it without making another network request.
- React Query automatically handles this for you when you use useQuery hook.
- This is called automatic caching.
- when you call the useQuery
    -- it checks first in cache memory
    -- if not found then it makes network call and stores that in cache.
    -- next it provide same data from caches without making network call.

# Pagination and Infinite Scroll
- pagination is a technique where the data is split into multiple pages, and user can naginate between these pages to view differenct chunks of data.

# Setup
=> Installation : npm install @tanstack/react-query 

=> main.jsx
- import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
- const queryClient = new QueryClient() // instance of tenStack
- <QueryClientProvider client={queryClient}> <App /> </QueryClientProvider>

=> compnent.jsx
- {data, isError, isLoading, error} = useQuery({ queryKey:["products"], queryFn: ()=>{}})


# Queries
- A query is used to fetch data from API.
- A query key is unique identifire wich can be string or an array.
- A query is used internally to cache the result and identify the query.
- Example:
         const { data, isLoading, error } = useQuery('todos', fetchTodos);
    Here todos is the key and fetchTodos is the function which fetches the data.

# Query results: 
- data : resource
- isLoading: A flag that indicates query is still loading.
- isError: A boolean indicating if an error occured.
- isSuccess: A boolean indicating if query was successfull.
- error: Error object, if any.  
- Query Pagination:

# useQuery()
- It is used for Read means fetch data

# useMutation()
- It is used for Write means create, update, delete