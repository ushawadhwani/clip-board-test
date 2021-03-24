import ListItem from "./ListItem";

export default function List({ listData }) {
  return (
    <div class="content-blk">
      {listData.map((data, index) => {
        return <ListItem key={index} item={data} />;
      })}
    </div>
  );
}
