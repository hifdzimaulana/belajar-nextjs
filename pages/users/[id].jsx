// {STATIC SITE GENERATION}

export async function getStaticPaths(ctx) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() }, // the key name in params should be same with the file name/slug name
    };
  });

  return {
    paths, // [{}, {}, {}, ...]
    fallback: "blocking", // when a request is made to a page that hasn't been generated, Next.js will server-render the page on the first request. Future requests will serve the static file from the cache.
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, // Next.js triggers regeneration of the page (rebuild) in the background for every 10s.
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
