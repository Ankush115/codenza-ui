const Table = ({ headings, data, coloumn }) => {
  return (
    <div>
      <table className="table table-bordered border-dark text-start table-info">
        <thead>
          <tr>
            {headings?.map?.((val, ind) => {
              return <th key={ind}>{val}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          
            {
                data?.map?.((obj,ind)=>{
                    return <tr key={ind}>{
                        coloumn?.map?.((key,ind)=>{
                            return <td key={ind}>{obj[key]}</td>
                        })
                    } </tr>
                })
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
