const { expect } = require('chai');
const translate = require('../index');

describe('translator layout', () => {
  it('should translate containers', () => {
    expect(translate(`
<div class="container">
</div>
<div class="container fluid">
</div>
`).jsx).to.eql(`
<Container>
</Container>
<Container fluid>
</Container>
`);
  });

  it('should translate rows', () => {
    expect(translate(`
<div class="row">
</div>
<div class="row no-gutter">
</div>
`).jsx).to.eql(`
<Row>
</Row>
<Row noGutter>
</Row>
`);
  });
});

it('should translate cols', () => {
  expect(translate(`
<div class="col col-md-auto">
</div>
<div class="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-1">
</div>
`).jsx).to.eql(`
<Col xs md="auto">
</Col>
<Col xs="12" sm="6" md="4" lg="2" xl="1">
</Col>
`);
});
