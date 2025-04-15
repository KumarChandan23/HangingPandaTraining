
# What is React Query
- React query is powerfull data fetching and state management library.
- It is design to simplyfiy handling of server side state.
- It is mainly usefull for - 
    -- Data fetning
    -- Create Data
    -- Updating Data
    -- Deleting Data
    -- Caching, background updates, pagination, etc...

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
