const fetchCharacters = async ({ pageNumber, search }) => {
  const apiRes = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  );

  return apiRes.json();
};

export default fetchCharacters;
