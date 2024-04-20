const NewsItem = ({ values }) => {
  const {
    title,
    description,
    urlToImage,
    url,
    content,
    author,
    source,
    publishedAt,
  } = values;

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={urlToImage}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt={url}
      />
      <div className="card-body">
        <h4 className="card-title">{title.slice(0, 50)}</h4>
        <p className="card-text">{description}</p>
        {/* <p className="card-text">{content}</p> */}
        {/* <p className="card-text">{author}</p> */}
        {/* <p className="card-text">{source.name}</p> */}
        {/* <p className="card-text">{publishedAt}</p> */}

        <a href={url} className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
