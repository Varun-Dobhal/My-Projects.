import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-800 hover:underline';

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <button>
      <Link to={to} className={className}>
        {children}
      </Link>
    </button>
  );
}

export default LinkButton;
