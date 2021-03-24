import HeaderItem from "./HeaderItem";

export default function Header({ headerData }) {
  return (
    <div class="topheader">
      {headerData.headerData.map((data, index) => {
        return <HeaderItem data={data} />;
      })}
    </div>
  );
}
