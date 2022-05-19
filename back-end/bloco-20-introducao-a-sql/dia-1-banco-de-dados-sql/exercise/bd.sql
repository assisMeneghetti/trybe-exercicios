DROP SCHEMA IF EXISTS bd CASCADE;
CREATE SCHEMA bd;

USE bd;

CREATE TABLE `Filme` (
  `FilmeId` int(11) NOT NULL,
  `Descricao` varchar(100) NOT NULL,
  `AnoLancamento` int(11) NOT NULL,
  `Nota` int(11) DEFAULT NULL,
  PRIMARY KEY (`FilmeId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1