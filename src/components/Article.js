const Article = ({ flags, name, population, region, subregion }) => {
  return (
    <>
      <article>
        <img src={flags.svg} alt='' />
        <h2 className='text-left font-bold text-lg text-gray-900 mb-2'>
          {name.common}
        </h2>
        <ul className='flex flex-col items-start justify-start gap-2'>
          <li>Population: {population.toLocaleString()}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
        </ul>
      </article>
    </>
  );
};

export default Article;
