//your JS code here. If required.
() => {
  const css_properties = ['width', 'height', 'object-fit'];

  css_properties.forEach(property => {
    cy.get('img').should('have.css', property);

    if (property === 'object-fit') {
      // Check that the 'object-fit' property is set to 'cover'
      cy.get('img').should('have.css', property).and('eq', 'cover');
    }
  });
}
