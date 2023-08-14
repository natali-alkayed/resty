import React from 'react';
import './result.scss';
// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

function Results({data}) {
  return (
    <>
      <section>
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      </section>
    </>
  )
}
export default Results;
