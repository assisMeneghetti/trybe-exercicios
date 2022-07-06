const sinon = require('sinon');
const { expect } = require('chai');
// const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe.only('Insere um novo filme no BD', function () {
  describe('quando o payload informado não é válido', function () {
    const payloadMovie = {};

    it('retorna um boolean', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', function () {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(function () {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(function () {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async function () {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});