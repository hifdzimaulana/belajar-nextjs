export async function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

//

function Id({ data }) {
  return (
    <div>
      <h1>Details page</h1>
      <h3>{data.name}</h3>
      <h4>{data.email}</h4>
      <h4>Company: {data.company.name}</h4>
    </div>
  );
}

export default Id;
