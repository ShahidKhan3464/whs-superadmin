export const dateFormatter = (
  inputDate = '',
  isTime = false,
  inputFormat = 'dd/mm/yyyy'
) => {
  // Check if inputDate is null or undefined
  if (!inputDate) {
    return '';
  }

  // Create a Date object from the input date string
  const date = new Date(inputDate);
  // Convert the date format to lowercase
  const format = inputFormat && inputFormat.toLowerCase();
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return '';
  }

  // Extract day, month, and year components
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = date.getFullYear();
  const yy = String(date.getFullYear()).slice(-2);

  // Extract time components
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  const time = `${hours}:${minutes} ${ampm}`;

  // Format the date based on the specified format
  switch (format) {
    case 'mm/dd/yyyy':
      return isTime ? `${mm}/${dd}/${yyyy} ${time}` : `${mm}/${dd}/${yyyy}`;
    case 'dd/mm/yyyy':
      return isTime ? `${dd}/${mm}/${yyyy} ${time}` : `${dd}/${mm}/${yyyy}`;
    case 'mm/dd/yy':
      return isTime ? `${mm}/${dd}/${yy} ${time}` : `${mm}/${dd}/${yy}`;
    case 'dd/mm/yy':
      return isTime ? `${dd}/${mm}/${yy} ${time}` : `${dd}/${mm}/${yy}`;
    case 'yyyy/mm/dd':
      return isTime ? `${yyyy}/${mm}/${dd} ${time}` : `${yyyy}/${mm}/${dd}`;
    case 'mm-dd-yyyy':
      return isTime ? `${mm}-${dd}-${yyyy} ${time}` : `${mm}-${dd}-${yyyy}`;
    case 'dd-mm-yyyy':
      return isTime ? `${dd}-${mm}-${yyyy} ${time}` : `${dd}-${mm}-${yyyy}`;
    case 'mm-dd-yy':
      return isTime ? `${mm}-${dd}-${yy} ${time}` : `${mm}-${dd}-${yy}`;
    case 'dd-mm-yy':
      return isTime ? `${dd}-${mm}-${yy} ${time}` : `${dd}-${mm}-${yy}`;
    case 'yyyy-mm-dd':
      return isTime ? `${yyyy}-${mm}-${dd} ${time}` : `${yyyy}-${mm}-${dd}`;
    default:
      return 'Invalid Format';
  }
};
