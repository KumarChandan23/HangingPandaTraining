import React from 'react'

const Table = () => {
    return (
        <div>
            <h1 className='bg-blue-500 text-white text-center text-2xl'>Table</h1>
            <table className='table border-separate border-red-400 px-1 border-spacing-6 border-3'>
                <caption className='caption-bottom'>Student Report Card</caption>
                <thead>
                    <tr className='hover:bg-amber-300'>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody className='bg-amber-100 border-1 border-red-300'>
                    <tr className='hover:bg-blue-400 hover:text-white border-3 border-blue-600'>
                        <td className='border-2 border-red-600'>Rahul</td>
                        <td>23</td>
                        <td>Male</td>
                    </tr>
                    <tr className='hover:bg-blue-400 hover:text-white'>
                        <td>Manish</td>
                        <td>27</td>
                        <td>Male</td>
                    </tr>
                    <tr className='hover:bg-blue-400 hover:text-white'>
                        <td className='border-2 border-blue-600'>Rina</td>
                        <td>20</td>
                        <td>Female</td>
                    </tr>
                    <tr className='hover:bg-blue-400 hover:text-white'>
                        <td>Karuna</td>
                        <td>25</td>
                        <td>Female</td>
                    </tr>
                </tbody>
            </table>
            <table className="table-auto gap-0 border-fixed ms-2">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">Name</th>
                        <th className="px-4 py-2 border border-gray-300">Email</th>
                        <th className="px-4 py-2 border border-gray-300">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border-x border-gray-200">Alice</td>
                        <td className="px-4 py-2 border-x border-gray-200">alice@example.com</td>
                        <td className="px-4 py-2 border-x border-gray-200">Admin</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-x border-gray-200">Bob</td>
                        <td className="px-4 py-2 border-x border-gray-200">bob@example.com</td>
                        <td className="px-4 py-2  border-x border-gray-200">User</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Table