import { DeleteOne, FetchData, UpdateTodo } from "./api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useFetchData = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: FetchData,
    });
};

export const useUpdateTodo = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: UpdateTodo,
        onSuccess: (updatedTodo) => {
            console.log("Todo updated:", updatedTodo);

            queryClient.setQueryData(["todos"], (oldData) => {
                if (!oldData || !Array.isArray(oldData.todos)) return oldData;

                return {
                    ...oldData,
                    todos: oldData.todos.map((todo) =>
                        todo.id === updatedTodo.id
                            ? { ...todo, completed: updatedTodo.completed }
                            : todo
                    ),
                };
            });
        },
        onError: (error) => {
            console.error("Error occurred while updating", error);
        },
    });
};

export const useDeleteOne = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: DeleteOne,
        onSuccess: (deletedTodo,variables) => {
            console.log(" Todo deleted successfully",variables.id);

            queryClient.setQueryData(["todos"],(oldTodo)=>{
                if(!oldTodo || !Array.isArray(oldTodo.todos)) return oldTodo;
                return {
                    ...oldTodo,
                    todos: oldTodo.todos.filter((todo)=> todo.id !== variables.id)
                }
            }); 
        },
        onError: (error) => {
            console.error("Error occurred while deleting todo", error);
            alert("Failed to delete todo. Please try again.");
        },
    });
};

