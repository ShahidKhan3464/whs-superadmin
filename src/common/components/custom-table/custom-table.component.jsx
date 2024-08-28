import React from 'react';
import { CustomLoader } from '../custom-loader/custom-loader.component';

const CustomTable = ({
  data,
  columns,
  payload,
  isLoading,
  setPayload,
  totalRecords,
  renderCellContent
}) => {
  const noResultsFound = !totalRecords;

  return (
    <div className="relative rounded-xl overflow-x-auto border border-solid border-gray200">
      <table className="w-full text-left whitespace-nowrap">
        <thead className="text-base text-gray500 font-semibold text-left">
          <tr>
            {columns.map((column, index) => (
              <th scope="col" key={index} className="px-6 py-2.5">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="p-8">
                <CustomLoader circleColor="#697586" />
              </td>
            </tr>
          ) : noResultsFound ? (
            <tr>
              <td colSpan={columns.length} className="p-10">
                <p className="flex-center text-lg text-gray600 font-medium">
                  No record found
                </p>
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-base text-gray700 font-semibold text-left border-y border-solid border-gray200"
              >
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex} className="px-6 py-[18px]">
                    {renderCellContent(item, column, rowIndex + 1)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
