import { Input } from "antd";
import "./SearchBar.css"

const { Search } = Input;

export default function SearchBar({ onSearch }) {
	return (
		<Search
			className="search-bar"
			placeholder="Enter ingredients ..."
			allowClear
			enterButton="Search"
			size="large"
			styles={{
				button: { 
					root: { 
						backgroundColor: "var(--accent-bg)", 
						borderColor: "var(--accent)", 
					}, 
				}, 
			}}
			onSearch={onSearch}
		/>
	);
}