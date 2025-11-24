CREATE DATABASE troll;

 USE troll;
 
 -- Criação de tabelas
CREATE TABLE usuario (
  id_usuario INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL  UNIQUE,
  senha VARCHAR(45) NOT NULL
 )AUTO_INCREMENT = 0;
 
 
 CREATE TABLE raca (
  id_raca INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  atributo VARCHAR(300),
  descricao VARCHAR(300)
  )AUTO_INCREMENT = 0;
  
 CREATE TABLE atributo (
  id_atributo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  forca INT NOT NULL,
  destreza INT NOT NULL,
  constituicao INT NOT NULL,
  inteligencia INT NOT NULL,
  sabedoria INT NOT NULL,
  carisma INT NOT NULL
 )AUTO_INCREMENT = 0;
 
 CREATE TABLE classe (
  id_classe INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  vida VARCHAR(100),
  descricao VARCHAR(300)
  )AUTO_INCREMENT = 0;
  
  CREATE TABLE habilidade (
  id_habilidade INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  descricao VARCHAR(200),
  dano VARCHAR(50) NULL,
  fk_classe INT,
  CONSTRAINT fk_classe_habilidade
   FOREIGN KEY (fk_classe)
    REFERENCES classe(id_classe)
  )AUTO_INCREMENT = 0;
  
  CREATE TABLE armadura (
  id_armadura INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  defesa INT,
  furtividade VARCHAR(50)
  )AUTO_INCREMENT = 0;
  
  CREATE TABLE armadura_classe(
  fk_classe INT,
  CONSTRAINT fk_classe_armadura
   FOREIGN KEY (fk_classe) 
    REFERENCES classe (id_classe),
fk_armadura INT,
  CONSTRAINT fk_armadura_classe
   FOREIGN KEY (fk_armadura) 
    REFERENCES armadura (id_armadura),
CONSTRAINT pk_composta
 PRIMARY KEY (fk_classe, fk_armadura)
  );
  
  CREATE TABLE arma (
  id_arma INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  dano VARCHAR(10),
  alcance VARCHAR(50)
  )AUTO_INCREMENT = 0;
  
  CREATE TABLE arma_classe(
  fk_classe INT,
  CONSTRAINT fk_classe_arma
   FOREIGN KEY (fk_classe) 
    REFERENCES classe (id_classe),
fk_arma INT,
  CONSTRAINT fk_arma_classe
   FOREIGN KEY (fk_arma) 
    REFERENCES arma (id_arma),
CONSTRAINT pk_composta
 PRIMARY KEY (fk_classe, fk_arma)
  );
  
CREATE TABLE  ficha (
id_ficha INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(300),
fk_usuario INT,
  CONSTRAINT fk_usuario_ficha
   FOREIGN KEY (fk_usuario) 
    REFERENCES usuario (id_usuario),
fk_classe INT,
  CONSTRAINT fk_ficha_classe
   FOREIGN KEY (fk_classe) 
    REFERENCES classe (id_classe),
fk_raca INT,
  CONSTRAINT fk_usuari_raca
   FOREIGN KEY (fk_raca) 
    REFERENCES raca (id_raca),
fk_atributo INT,
  CONSTRAINT fk_usuario_atributo
   FOREIGN KEY (fk_atributo) 
    REFERENCES atributo (id_atributo)
);

-- Inserção de dados

INSERT INTO usuario (nome, email, senha) VALUES
('Mestre_Geral', 'mestre@rpg.com', 'senha123'),
('Jogador_A', 'jogador_a@mail.com', 'rpg_pass'),
('Jogador_B', 'jogador_b@mail.com', 'minha_senha');

INSERT INTO raca (nome, atributo, descricao) VALUES
('Elfo', '+2 Destreza, +1 Sabedoria', 'Raça ágil e sábia, com forte conexão com a natureza.'),
('Meio-Orc', '+2 Força, +1 Constituição', 'Raça robusta e forte, conhecida por sua resistência e selvageria.'),
('Humano', '+1 em todos os atributos', 'Raça versátil e adaptável, sem bônus ou penalidades específicos, mas muito flexível.');

INSERT INTO atributo (forca, destreza, constituicao, inteligencia, sabedoria, carisma) VALUES
(14, 10, 12, 8, 11, 9), 
(8, 15, 13, 10, 14, 12),
(12, 12, 12, 12, 12, 12);

INSERT INTO classe (nome, vida, descricao) VALUES
('Guerreiro', '10 + bônus de Contituição', 'Especialista em combate corpo a corpo e uso de armaduras pesadas.'),
('Mago', '6 + bônus de Contituição', 'Conjurador de magias arcanas, frágil mas com grande poder destrutivo.'),
('Ladrão', '8 + bônus de Contituição', 'Mestre na furtividade, evasão e uso de habilidades nas sombras.');

INSERT INTO habilidade (nome, descricao, dano, fk_classe) VALUES
('Investida', 'Corre e ataca o inimigo com força total.', '2d6 + Força', 1),
('Bola de Fogo', 'Lança uma esfera de fogo explosiva.', '4d6 Fogo', 2),
('Ataque Furtivo', 'Causa dano extra se o inimigo não o perceber.', '1d6 Extra', 3),
('Postura Defensiva', 'Aumenta a CA em 2 por um turno, sacrificando mobilidade.', 'Nenhum', 1), -- Guerreiro
('Raio de Gelo', 'Dispara um feixe de energia gélida.', '2d8 Gelo', 2), -- Mago
('Evasão', 'Pode esquivar-se de magias e efeitos de área com mais facilidade.', 'Nenhum', 3); -- Ladrão

INSERT INTO arma (nome, dano, alcance) VALUES
('Espada Longa', '1d8', 'Corpo a Corpo'),
('Arco Curto', '1d6', '25/100 metros'),
('Cajado de Madeira', '1d4', 'Corpo a Corpo'),
('Machado de Batalha', '1d10', 'Corpo a Corpo'),
('Adaga', '1d4', 'Corpo a Corpo / Arremesso (6/18 metros)'),
('Besta Leve', '1d8', '30/120 metros');

INSERT INTO armadura (nome, defesa, furtividade) VALUES
('Cota de Malha', 16, 'Desvantagem'),
('Couro Batido', 12, 'Nenhuma'),
('Roupas Comuns', 10, 'Nenhuma'),
('Armadura de Placas', 18, 'Desvantagem'),
('Camisão de Couro', 14, 'Nenhuma');

INSERT INTO arma_classe (fk_classe, fk_arma) VALUES
(1, 1), -- Guerreiro (1) pode usar Espada Longa (1)
(1, 4), -- Guerreiro (1) pode usar Machado de Batalha (4)
(1, 6), -- Guerreiro (1) pode usar Besta Leve (6)
(1, 2), -- Guerreiro (1) pode usar Arco Curto (2)
(2, 3), -- Mago (2) pode usar Cajado de Madeira (3)
(3, 2), -- Ladrão (3) pode usar Arco Curto (2)
(3, 5), -- Ladrão (3) pode usar Adaga (5)
(3, 6); -- Ladrão (3) pode usar Besta Leve (6)

INSERT INTO armadura_classe (fk_classe, fk_armadura) VALUES
(1, 1), -- Guerreiro (1) pode usar Cota de Malha (1)
(1, 4), -- Guerreiro (1) pode usar Armadura de Placas (4)
(1, 5), -- Guerreiro (1) também pode usar Camisão de Couro (5)
(2, 3), -- Mago (2) pode usar Roupas Comuns (3)
(3, 2), -- Ladrão (3) pode usar Couro Batido (2)
(3, 5); -- Ladrão (3) pode usar Camisão de Couro (5)

INSERT INTO ficha (nome, fk_usuario, fk_classe, fk_raca, fk_atributo) VALUES
('Kaelen, o Bravo', 2, 1, 1, 1),
('Zylos, o Arcano', 3, 2, 3, 2);

SELECT * FROM ficha;





  
 
 
  
