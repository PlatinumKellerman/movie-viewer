function MyComponent() {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  const pageCount = 20;
  const offset = pageNumber * itemsPerPage;

  // Функція, яка викликається при зміні сторінки
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // Отримуємо дані для відображення на поточній сторінці
  const dataToShow = getData().slice(offset, offset + itemsPerPage);

  return (
    <div>
      {/* Відображення даних на поточній сторінці */}
      {dataToShow.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}

      {/* Відображення пагінації */}
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}
