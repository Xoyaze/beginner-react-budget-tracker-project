import { faBook, faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, NavLink } from "react-router-dom";

const Header = (props) => {

    const handleSubmit = (e) => {
        if(!confirm('Are you sure you want to delete this user ?')){
            e.preventDefault();
        }
    }

  return (
    <div className='h-[12%] w-full bg-theme-200 text-3xl flex justify-around'>
        <div className="h-full w-[20%]  flex items-center justify-start text-black">
            <NavLink className="flex justify-center items-center gap-2 text-4xl hover:text-white transition-hover duration-200" to='/'>
                <FontAwesomeIcon icon={ faHouse } />
                <h1>Home</h1>
            </NavLink>
        </div>
        <div className="h-full w-[70%] flex justify-end items-center">
            {props.username && (
                <NavLink to="expenses" className='flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-hover duration-200'>
                    <FontAwesomeIcon icon={faBook} />
                    <span>Expenses</span>
                </NavLink>
            )}
            {props.username && (
                <Form method="post" action="/logout" onSubmit={handleSubmit} className="h-full w-4/12 flex justify-end items-center gap-2">
                <button type="submit" className="flex justify-center items-center gap-2 cursor-pointer hover:text-white transition-hover duration-200">
                    <FontAwesomeIcon icon={ faTrash } />
                    <h1>Delete User</h1>
                </button>
                </Form>
            )}
        </div>
    </div>
  )
}

export default Header;
