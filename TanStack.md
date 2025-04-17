
# Syllabus TanStack

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
- Memory vs persistent cache


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



# What is TanStack or React Query
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



# 🔍 1. What is queryClient?
- QueryClient is an instance of queryClient class
- QueryClient is like a brain that stores and manages all the server states
- server states like data fetching, caching, mutation, etc.
- It caches the query result
- It tracks the status of requests (like- loading, error, success)
- Automatically refetches slate data.
- It handle retry, background updates and more.
- Syntax: const queryClient = new QueryClient();

# Queries
- A query is used to fetch data from API.
- A query is used internally to cache the result and identify the query.
- A query key is unique identifire wich can be string or an array.
- Example:
         const { data, isLoading, error } = useQuery('todos', fetchTodos);
    Here todos is the key and fetchTodos is the function which fetches the data.

# What is query key ?
- query key is unique indentifire for each query
- query is used for fetching data, invalidating cache, refetching menually.
- query type is  array (["key"]) or dynamic key with parameters (["key", userId]) 
- query help to identify when query is considered as slate or fresh.

# What is queryFn (query function)
- queryFn is the function which is used to fetch make network call for fetching data.

# What is Caching
- caching is the process of storing fetched data temporarily in cache memory.So that next time, If you need that same data you can easily retrive from cache without making another network request.
- React Query automatically handles this for you when you use useQuery hook.
- This is called automatic caching.
- when you call the useQuery
1. It checks first in cache memory
2. If not found then it makes network call and stores that in cache.
3. Next it provide same data from caches without making network call.

# What is Backgrund refetching
- Background refetching means automatically updating data in the background without disrupting UI.
- Simply it means data is re-fetched without -
1. showing loading snniper on userInterface
2. old data is shown untill the new data is successfully fetched.
3. user can still intract with UI.

# ⚙️ How does background refetching work in TanStack Query?
- It refetches data when window refocuses (refetchOnWindowFocus)
- It refetches data when network reconnects (refetchOnReconnect)
- It refetches data at interval
- Syntax: 
            useQuery({
                queryKey: ["key"],
                queryFn:()=>{},
                slateTime: 1000 * 60, // 1 minut
                refetchOnWindowFocus:true,
                refetchIntervalTime:5000 / 5 second
            })
- Old data is still shown
- we can check isFetching === true(it won't trigger isLoadin again).
- when new data comes, cache and UI updates automatically.


# 📦 2. What is QueryClientProvider?
- QueryClientProvider is React context provider
- we wrap QueryClientProvier around root component
- It provides access of Queryclient to all our applications component
- It helps our application to share state with different - different components
- Syntax <QuetyClientProvier> <App /> </QueryClientProvier>

# Mutations
- It is used for creating, updating, and delete data on the server
- 👜 TanStack provides useMutation hook.
- useMutation hook triggers network request on user actions
- useMutation hook is used to handle create, update, and delete data on server. 
- useMutation hook also handles state like error, loading and success.
- useMutation hook also updates the cache memory so to provide latest data.
- useMutation hook is use full for submitting form , updating userProfile, deleting prodcuts 
- Syntax: const mutation = useMutation({
    mutationFn:()=>{},
    onSuccess:(data)=>{},
    onError:(error)=>{}
})
 
# 🛞 Mutation results: 
-  useMutation retuns value like
- data : resource
- isLoading: A flag that indicates query is still loading.
- isError: A boolean indicating if an error occured.
- isSuccess: A boolean indicating if query was successfull.
- error: Error object, if any.  
- Query Pagination:

# What is Auto Retries.
- when a query fails due to network error, Tanstack query automatically retries to fetch data without writing extray logic for this.
- Syntax: useQuery({
    queryKey:["key"],
    queryFn:()=>{},
    retry: true // 3 time by default
    retrydelay:  attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
})
- retry:true // 3 times retry by default
- retry: false // disable retry. fetch data only once
- retry:5 // 5 times retries only

# What is useQuery()
- It is Tanstack hook that allows you to fetch, cache and synchronize data in react components.
- It is used when we want to Read data (get request) from api.
- syntax: 
    import {useQuery} from "@tanstack/react-query"
    const {data, isLoading, isError, error, refetch} = useQuery({ queryFn:()=>{},queryKey:['key'],})
- ▶️ useQuery() all states
1. data : type any and get data using queryFn.
2. error: type Error and throw error if query fails.
6. isError: type boolean and true if query errored.
3. isLoading: type boolean and true during initial load (no cache yet).
4. isFetching: type boolean and true whene ever query is fetching.
5. isSuccess: type boolean and true when data is fetched successfully.
7. isPending: type boolean and true while loading or refetching.
8. isFetchedAfterMount: type boolean and true if it was fetched after component mount.
9. isSlate: type boolean and true if data is slate.
10. refetch: type promise and Manually refetch the query.
11. fetchStatus: type "idle" and "fetching".
12. status: type "loading" and "error"

- ▶️ useQuery() all parameters
1. queryKey: type Array and it is unique indentifire for fetching, cacheing, etc...
2. queryFn: a function which is used to fetch data using api.
3. enabled: type boolean and it deside wheather a query run automatically. default true
4. retry: type boolan and default retry 3 but we chage it with anu number.
5. retryDelay : type number and used for delaying refetching data.
6. refetchOnWindowFocus: type boolean and default is true and used when window/tab regains focus.
7. refetchInterval: 
8. refetchIntervalInBackground: type boolean allow pooling background tab default false.
9. staleTime: 
10 cacheTime: data is store in cache for 5 (300000 ms) minuts in default but you can change. 

# useMutation()
- It is used for Write means create, update, delete