import { useSearchParams } from "react-router";
import { ArchivosSection } from "../../../components/Dashboard/Archivos/ArchivosSection";

export const ArchivosPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const page = searchParams.get("page");
  
  if (!email) {
    return <div>Email no proporcionado</div>;
  }

  const decodedEmail = decodeURIComponent(email);
  const initialPage = page ? parseInt(page, 10) : 1;
  
  return <ArchivosSection userEmail={decodedEmail} initialPage={initialPage} />;
};
