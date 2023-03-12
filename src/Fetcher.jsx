const Fetcher = async ({ pageNumber, search, status, gender, species }) => {
  const apiRes = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  );

  return apiRes.json();
};

export default Fetcher;
