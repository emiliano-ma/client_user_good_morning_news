import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  return (
    <Card
      as={Link}
      to={`/articles/${article.id}`}
      data-cy={"article-" + article.id}
      key={article.id}
      className="article-card"
    >
      <Card.Content>
        <Card.Header data-cy="title">{article.title}</Card.Header>
        <Card.Description data-cy="teaser">{article.teaser}</Card.Description>
      </Card.Content>
      {article.image && <Image data-cy="image" src={article.image} />}
    </Card>
  );
};

export default ArticlesCard;
