import { faDollarSign, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify';

const CreateBudgetForm = () => {
    
    //creating the budget category starts here.
    const [newName, setNewName] = useState('');
    const [categories, setCategories] = useState(() => {
        const existingCategories = localStorage.getItem('categories');
        return existingCategories ? JSON.parse(existingCategories) : [];
    });

    const handleCategoryInput = (e) => {
        setNewName(e.target.value);
    }

    useEffect(() => {
        localStorage.setItem('categories',JSON.stringify(categories));
    }, [categories])

    const hanldeAddCategory = (e) => {
        console.log('This is the categories');
        console.log(categories);
        console.log('This is the end');
        e.preventDefault();
        if(newName.trim() === ''){
            toast.error("Type a category first.")
            return;
        }

        const newCategory = {
            id: crypto.randomUUID(),
            name: newName
        }
        
        setCategories(prevCategories => [...prevCategories, newCategory]);
        toast.success("Created a category named: " + newName);
        setNewName('');
    }
    //creating the budget category is done here.

    //creating the budget here
    const [expenses, setExpenses] = useState(() => {
        const storedExpenses = localStorage.getItem('expenses');
        return storedExpenses ? JSON.parse(storedExpenses) : [];
    })

    useEffect(() => {
        localStorage.setItem('expenses',JSON.stringify(expenses));
    }, [expenses])
    
    const [selectedCategory, setSelectedCategory] = useState('default');
    const [amount, setAmount] = useState('');
    const handleSelectCategory = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleAmountInput = (e) => {
        setAmount(e.target.value);
    }


    const handleAddExpense = (e) => {
        e.preventDefault();

        if(amount === '' || selectedCategory === 'default'){
            toast.error("Select a category and type an amount to add an expense.")
            return;
        }

        const newExpense = {
            id: crypto.randomUUID(),
            category: selectedCategory,
            amount: amount
        }

        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
        toast.success("Added the expense.");
        console.log(expenses);

        setAmount('');
        setSelectedCategory('default');
    }


  return (
    <div className='h-[60%] w-full flex justify-around mt-10 '>
        <Form onSubmit={hanldeAddCategory} className='h-full w-[40%] bg-white text-black flex flex-col justify-center border border-dashed border-black rounded-2xl gap-y-8 p-4'>
            <h3 className='text-4xl'>Create a Category</h3>
            <input value={newName} onChange={handleCategoryInput} type="text" name='budgetName' placeholder='Enter a budget category' className='custom-input'/>
            <button type='submit' className='custom-button flex gap-2 justify-center items-center'>
                <FontAwesomeIcon icon={ faPlus } />
                <span>Create</span>
            </button>
        </Form>

        <Form onSubmit={handleAddExpense} className='h-full w-[40%] bg-white text-black flex flex-col justify-center border border-dashed border-black rounded-2xl gap-y-6 p-4'>
            <h3 className='text-4xl'>Add an Expense</h3>
            <select name="budgets" value={selectedCategory} onChange={handleSelectCategory} className='custom-input h-[20%] text-white leading-tight custom-select'>
                <option value="default" disabled>Select a category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <input type="number" value={amount} step='0.01' onChange={handleAmountInput} name='budgetName' placeholder='Enter the amount' className='custom-input h-[20%]'/>
            <button type='submit' className='custom-button flex gap-2 justify-center items-center'>
            <FontAwesomeIcon icon={faDollarSign} />
                <span>Add</span>
            </button>
        </Form>
    </div>
  )
}

export default CreateBudgetForm
