import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const sundas = () => {

  const router = useRouter();
  const pageNumber = router.query.sundas;
  return (
    <>
      <div><Navbar /></div>
      <div>{pageNumber}</div>
    </>
  )
}
export default sundas;