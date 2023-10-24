import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

import { getUserAuthData } from 'entitie/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: {children: JSX.Element}) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ form: location }} replace />;
  }

  return children;
}
