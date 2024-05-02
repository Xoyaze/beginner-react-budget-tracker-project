import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const getUsername = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    return {username}
}


export const getDashboardData = () => {
    const username = JSON.parse(localStorage.getItem('username'));
    
    return {username};
} 

export async function logOut(){

    localStorage.removeItem('username');
    localStorage.removeItem('expenses');
    localStorage.removeItem('categories');
    toast.success("Your account has been deleted successfully.");
    return redirect('/');
}

export async function logIn({request}){
    const data = await request.formData();
    const username = data.get("username");
    localStorage.setItem('username', JSON.stringify(username));
    toast.success("Created account successfully.");
    return redirect('/');
}

