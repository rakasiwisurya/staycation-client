import { useNavigate, useLocation, useParams } from "react-router-dom";

/**
 * Bridges react-router v6 hooks to the v5-style `history` / `location` / `match`
 * props that the remaining class components were written against. Keeps those
 * components untouched while the app runs on the current router.
 */
export default function withRouter(Component) {
  return function WithRouter(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const history = {
      push: (to) => navigate(to),
      replace: (to) => navigate(to, { replace: true }),
      goBack: () => navigate(-1),
    };

    return (
      <Component
        {...props}
        history={history}
        location={location}
        match={{ params }}
      />
    );
  };
}
