import React from 'react';

function ReactTest () {
    const [users, setUsers] = React.useState([]);
    const [filter, setFilter] = React.useState('');
    const [tableHeads, setTableHeads] = React.useState([]);
    
    React.useEffect(() => {
        fetch('https://random-data-api.com/api/v2/users?size=10')
          .then(data => data.json())
        .then(date => {
            setUsers(date);
          setTableHeads(Object.keys(date[0]))
        }) 
    }, []);
    
    const handleChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    } 
    
      return (
      <div>
        <h1>YOUR CODE HERE</h1>
        <input type='text' label='first_name' onChange={handleChange}/>
        {/* <ul>
          {users.map((user) => (<li key={`${user.id}_${user.uid}`}>{JSON.stringify(user.address)}</li>))}
        </ul> */}
        <table>
          <thead>
            <tr>
            {tableHeads.map((item) => (<th key={item} style={{padding: '5px', border: '1px solid black'}}>{item}</th>))}
            </tr>
          </thead>
          <tbody>
            {
             users.filter(user => user.first_name.toLowerCase().includes(filter)).map((user) => (<tr key={`${user.id}_${user.uid}`}>
                   {tableHeads.map((userKey) => (<td key={`${user[userKey]}_12`} style={{padding: '5px', border: '1px solid black'}}>{JSON.stringify(user[userKey])}</td>))}
                 </tr>))
            }
          </tbody>
        </table>
      </div>
    )
  }
  
  export default ReactTest;
  















// import React from 'react';

// const ReactTest = () => {

//     console.log("App");

//     function A({children}) {
//       console.log("-> A");
//       return (<div>11{children} </div>);
//     }
//     // const A = ({ children }) => {
//     //   console.log("-> A");
//     //   return (<div>11{children}</div>);
//     // }
    
//     function B() {
//       console.log("-> B");
//       return <C />;
//       // return (<p>222</p>);
//     }
    
//     function C() {
//       console.log("-> C");
//       return <p>333</p>
//     }
    
//     function D() {
//       console.log("-> D");
//       return null;
//     }

//     return (
//         <div>
//             <A>
//                 <B />
//             </A>
//             <D />
//         </div>
//     );
// };

// export default ReactTest;