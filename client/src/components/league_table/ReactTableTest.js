import React, { useEffect, useState, Fragment } from 'react';
import { useTable } from 'react-table';

function ReactTableTest({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// const ReactTableTest = () => {
//   const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     async function getPosts() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       res
//         .json()
//         .then(res => setPosts(res))
//     };

//     getPosts();
//   }, []);

//   const columns = [
//     {
//       Header: "User ID",
//       accessor: "userId"
//     },
//     {
//       Header: "ID",
//       accessor: "id"
//     },
//     {
//       Header: "Title",
//       accessor: "title"
//     },
//     {
//       Header: "Body",
//       accessor: "body"
//     }
//   ]

//   return (
//     <Fragment>
//       <h4>ReactTableTest</h4>
//       <ReactTable
//         columns={columns}
//       >

//       </ReactTable>
//     </Fragment>
//   );
// };

export default ReactTableTest;