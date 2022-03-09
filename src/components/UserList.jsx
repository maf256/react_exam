import styled from 'styled-components'
import { useTasks, useTasksDispatch } from '../TasksContext.js';

export default function UserList() {
    const { users } = useTasks()
    const dispatch = useTasksDispatch()

    const handleRemove = (e, user) => {
        e.stopPropagation();
        dispatch({ type: 'delete', user })
    }

    const handleOnClick = (e, user) => {
        dispatch({ type: 'edit', user })
    }

    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHeader>ID</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>UserName</TableHeader>
                    <TableHeader>Password</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                {users.map(user => (
                    <TableRow key={user.id} onClick={(e) => handleOnClick(e, user)}>
                        <TableData>{user.id}</TableData>
                        <TableData>{user.name}</TableData>
                        <TableData>{user.email}</TableData>
                        <TableData>{user.username}</TableData>
                        <TableData>{user.password}</TableData>
                        <TableData onClick={(e) => handleRemove(e, user)}>X</TableData>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const TableData = styled.td`
    padding: 8px;
    cursor: pointer;
    ${({ children }) => children === 'X' && 'font-weight: bold;'}
    :hover {
        ${({ children }) => children === 'X' && 'color: red;'}
    }
`
const TableRow = styled.tr`
    border: 1px solid #dddddd;
    text-align: left;
    :nth-child(even) {
        background-color: #dddddd;
    }
`
const TableHeader = styled.th`
    padding: 8px;
`