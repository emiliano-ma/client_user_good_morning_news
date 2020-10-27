import ArticlesCard from "./ArticlesCard";
import React, { useState, useEffect } from "react";
import Articles from "../modules/articles";
import { Grid, Container, Message, Header, Segment } from "semantic-ui-react";
import { useParams, useLocation } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const { category, local } = useParams();
  let location = useLocation();
  const [message, setMessage] = useState();

  useEffect(() => {
    const getArticles = async () => {
      const response = await Articles.index(category, local);
      if (response?.constructor === Array) {
        setArticles(response);
        setErrorMessage("");
      } else {
        setArticles([]);
        setErrorMessage(response);
      }
    };
    getArticles();
  }, [category, local]);

  useEffect(() => {
    if (location.state) {
      setMessage(location.state.message);
    }
  }, [location]);

  return (
    <>
      {local && (
        <Container>
          <Segment textAlign="center">
            <Header>
              {local === "Sweden"
                ? "Welcome to our news about Sweden!"
                : "Enjoy our International section!"}
            </Header>
          </Segment>
        </Container>
      )}
      {category ? (
        <Container>
          <Segment textAlign="center">
            <Header>
              Enjoy our {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
              section!
            </Header>
          </Segment>
        </Container>
      ) : (
        !local && (
          <Container>
            <Segment textAlign="center">
              <Header>Enjoy our content!</Header>
            </Segment>
          </Container>
        )
      )}
      {message && (
        <Message positive data-cy="payment-success-message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
      {errorMessage && (
        <Message negative data-cy="error-message">
          <Message.Header>{errorMessage}</Message.Header>
        </Message>
      )}
      <Container className="container">
        <Grid>
          <Grid.Row>
            {articles.map((article) => {
              return (
                // <div data-cy={"article-" + article.id} key={article.id}>
                  <ArticlesCard article={article} />
                // </div>
              );
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};
export default ArticlesList;
