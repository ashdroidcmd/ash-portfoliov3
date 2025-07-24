interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer rounded border border-gray-500 px-3 py-1 text-white hover:bg-gray-700 disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded border px-3 py-1 ${
            currentPage === page
              ? "bg-white text-black"
              : "cursor-pointer border-gray-500 text-white hover:bg-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border border-gray-500 px-3 py-1 text-white hover:bg-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
