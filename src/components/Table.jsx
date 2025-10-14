import React from 'react';

const TableHeader = () => {
  return (
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="px-4 py-3 text-left">Name</th>
        <th className="px-4 py-3 text-left">URL</th>
        <th className="px-4 py-3 text-left">Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index} className="border-b hover:bg-gray-50">
        <td className="px-4 py-3">{row.name}</td>
        <td className="px-4 py-3">
          <a 
            href={row.URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {row.URL}
          </a>
        </td>
        <td className="px-4 py-3">
          <button 
            onClick={() => props.removeLink(index)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { linkData, removeLink } = props;

  return (
    <table className="w-full border">
      <TableHeader />
      <TableBody linkData={linkData} removeLink={removeLink} />
    </table>
  );
};

export default Table;
