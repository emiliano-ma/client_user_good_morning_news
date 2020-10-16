describe("Premium article view for visitor/user", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
  });
  context("when current user role is not subscriber", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: "fixture:article_show_premium.json",
      });
      cy.visit("/");
      cy.get("[data-cy='article-1']").click();
    });
    it("can only see first 300 characters", () => {
      cy.get("[data-cy='title']").should(
        "contain",
        "Hello World"
      );
      cy.get("[data-cy='content']").should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      );
      cy.get("[data-cy='premium-message']").should(
        "contain",
        "This is part of our premium content, to get full access become premium user"
      );
      cy.get("[data-cy='subscription-button']").should(
        "contain",
        "Become premium!"
      );
    });
  });
});