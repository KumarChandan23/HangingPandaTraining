import { DeleteUser, FetchUser, Login, Signup, UpdateUser} from "./api"
import { useQuery, useMutation} from "@tanstack/react-query"

export const useFetchUser = (userId)=>{
    return useQuery({
        queryKey: userId ? ["user", userId] : ["users"],
        queryFn: FetchUser
    })
}


export const useSignup = () => {
    return useMutation({ mutationFn: Signup })
}

export const useLogin = () => {
    return useMutation({ mutationFn: Login });
}

export const useUpdateUser = ()=>{
    return useMutation({
        mutationFn: UpdateUser,
        onSuccess:(data)=>{
            console.log("User updated successfully", data)
        },
        onError: (error)=>{
            console.error("User Update failed", error)
        }
    })
}

export const useDeleteUser = ()=>{
    return useMutation({
        mutationFn: DeleteUser,
        onSuccess: ()=>{
            console.log("User account deleted successfull");
        },
        onError: (error)=>{
            console.log("Account delete failed!", error)
        }
    })
}