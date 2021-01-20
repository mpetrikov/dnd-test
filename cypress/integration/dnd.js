describe("My First test", function () {
  it("dnd-test", function () {
    cy.visit("http://localhost:3000/");

    // work with real dom
    const dataTransfer1 = new DataTransfer();

    cy.get(".App>div>div:nth-child(1)").trigger("dragstart", { dataTransfer1 });

    cy.wait(1000);
    cy.get(".App>div>div:nth-child(2)").trigger("dragover", {
      dataTransfer1,
      position: "bottom"
    });

    cy.wait(10);
    cy.wait(1000);

    cy.get(".App>div>div:nth-child(2)").trigger("dragover", {
      dataTransfer1,
      position: "bottom"
    });

    cy.wait(1000);
    cy.get(".App>div>div:nth-child(2)").trigger("dragend", { dataTransfer1 });

    cy.wait(1000);
    // work with shadow dom
    const dataTransfer2 = new DataTransfer();

    cy.get(".shadow-app>div>div:nth-child(1)", {
      includeShadowDom: true
    }).trigger("dragstart", { dataTransfer2 });

    cy.wait(1000);
    cy.get(".shadow-app>div>div:nth-child(2)", {
      includeShadowDom: true
    }).trigger("dragover", {
      dataTransfer2,
      position: "bottom"
    });

    cy.wait(10);
    cy.wait(1000);

    cy.get(".shadow-app>div>div:nth-child(2)", {
      includeShadowDom: true
    }).trigger("dragover", {
      dataTransfer2,
      position: "bottom"
    });

    cy.wait(1000);
    cy.get(".shadow-app>div>div:nth-child(2)", {
      includeShadowDom: true
    }).trigger("dragend", { dataTransfer2 });
  });
});
