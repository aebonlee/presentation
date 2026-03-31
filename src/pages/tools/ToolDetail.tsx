import { useParams, Navigate } from 'react-router-dom';

const ToolDetail = () => {
  const { toolId } = useParams();
  return <Navigate to={`/tools/${toolId}`} replace />;
};

export default ToolDetail;
