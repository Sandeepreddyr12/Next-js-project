import Link from 'next/link';

/* --todo

better layout & dynamic paths,

protected routes,


*/

export default function page(props) {
  const { payment } = props.searchParams;

  let description;

  if (!payment) {
    description = (
      <div className=" flex flex-col justify-between items-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
          Order Placed
        </h1>
        <p className="font-bold mb-4">Payment method : cash on delivery </p>
        {/* <p className="font-bold mb-4">amount to be paid <span className ="text-red-600 mr-5 font-extrabold">&#x20B9; 600</span> </p> */}
        <p className="font-extrabold text-gray-600 mb-4">Items Ordered - 1</p>
        <p className="font-bold mb-4">Thank you for your Purchase!</p>
      </div>
    );
  } else {
    if (payment === 'success') {
      description = (
        <div className=" flex flex-col justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Payment Success
          </h1>
          <p className="font-extrabold text-gray-600 mb-4">Items Ordered - 1</p>
          <p className="font-bold mb-4">Thank you for your Purchase!</p>
        </div>
      );
    } else {
      description = (
        <div className=" flex flex-col justify-between items-center">
          <h1 className="text-4xl font-extrabold text-red-600 mb-6">
            Payment Failed
          </h1>
          <p className="font-extrabold text-gray-600 mb-4">
            Error occurred, please re-intiate the process
          </p>
        </div>
      );
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 ">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          {!payment || payment === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f44336"
                d="M36,8.4l3.5,3.5L12,39.6L8.4,36L36,8.4z"
              ></path>
              <path
                fill="#f44336"
                d="M39.6,36L36,39.6L8.4,12L12,8.4L39.6,36z"
              ></path>
            </svg>
          )}
          {description}
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
