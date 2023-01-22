import React from 'react';

function UserList({ users }) {
  return (
    <table className='table-auto w-full'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='px-4 py-2'>Name</th>
          <th className='px-4 py-2'>Username</th>
          <th className='px-4 py-2'>Image</th>
          <th className='px-4 py-2'>Email</th>
          <th className='px-4 py-2'>Role</th>
          <th className='px-4 py-2'>Password</th>
          <th className='px-4 py-2'>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className='px-4 py-2'>{user.name}</td>
            <td className='px-4 py-2'>{user.username}</td>
            <td className='px-4 py-2'>
              <img
                src={user.image}
                alt={user.name}
                className='w-8 h-8 rounded-full'
              />
            </td>
            <td className='px-4 py-2'>{user.email}</td>
            <td className='px-4 py-2'>{user.email}</td>
            <td className='px-4 py-2'>{user.email}</td>
            <td className='px-4 py-2'>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
