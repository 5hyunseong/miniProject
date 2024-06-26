import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";

function Menus() {

	const isAuthorized = !!localStorage.getItem('isLogin');
	const navigate = useNavigate();

	return (
		<div>
			<h1>메뉴 목록 {(isAuthorized) && <button onClick={() => navigate(`/menu/regist`)}>메뉴 추가</button>} </h1>
			<MenuList />
		</div>
	);
}

export default Menus;