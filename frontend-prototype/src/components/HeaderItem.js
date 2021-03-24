export default function HeaderItem({ data }) {
  return (
    <div class="topheader-content">
      <span>{data.title}</span>
      <p>
        {data.amount} {data.currency}
      </p>
    </div>
  );
}
