import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

const Dashboard: React.FC = () => {
  const languages = ["JavaScript", "React", "CSS", "TypeScript"];
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-5">
          <h1 className="text-xl font-bold" onClick={handleHomeClick}>
            Choose the language
          </h1>
          {/* <button onClick={handleHomeClick}>Go to main</button> */}

          <nav className="mt-4">
            {languages.length ? (
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index}>
                    <NavLink
                      to={`${language.toLowerCase()}/tasks`}
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      {language}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No languages</i>
              </p>
            )}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
