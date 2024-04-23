import { useLocation, useNavigate } from 'react-router-dom';

function useBreadcrumb() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToParentPath = () => {
    const locationText = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
    navigate(locationText, { state: location.state });
  };

  return navigateToParentPath;
}

export { useBreadcrumb };
